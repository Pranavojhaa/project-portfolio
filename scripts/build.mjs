import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { build, createServer } from "vite";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const indexPath = resolve(root, "index.html");
const originalHtml = await readFile(indexPath, "utf8");
const rootElement = '<div id="root"></div>';

if (!originalHtml.includes(rootElement)) {
  throw new Error("The root element placeholder is missing from index.html.");
}

const server = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

let appMarkup;

try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  appMarkup = renderToString(React.createElement(App));
} finally {
  await server.close();
}

const prerenderedHtml = originalHtml.replace(
  rootElement,
  `<div id="root">${appMarkup}</div>`
);

// createServer sets NODE_ENV to "development"; reset it so the client build
// bundles production React instead of the development build.
process.env.NODE_ENV = "production";

try {
  await writeFile(indexPath, prerenderedHtml);
  await build({ root, mode: "production" });
} finally {
  await writeFile(indexPath, originalHtml);
}
