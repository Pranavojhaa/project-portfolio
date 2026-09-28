import { useEffect, useRef } from "react";
import { Carriage } from "./components/Carriage";
import { Footer } from "./components/Footer";
import { Glance } from "./components/Glance";
import { Hero } from "./components/Hero";
import { JourneyBoard } from "./components/JourneyBoard";
import { MainLine } from "./components/MainLine";
import { Navbar } from "./components/Navbar";
import { ProjectRoute } from "./components/ProjectRoute";
import { ProofLedger } from "./components/ProofLedger";
import { Recap } from "./components/Recap";
import { Section } from "./components/Section";
import { SkillsCarriage } from "./components/SkillsCarriage";
import { Timeline } from "./components/Timeline";
import { about } from "./data/portfolio";

// The second sentence of the about text introduces the skills carriage; the first opens the recap.
const [, ...aboutRest] = about.split(/(?<=\.)\s+/);

function App() {
  const mainRef = useRef(null);

  // Hands client-rendered [data-reveal] nodes to the observer set up in index.html (a no-op when motion is reduced).
  useEffect(() => {
    window.__reveal?.();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar />

      <main id="main" ref={mainRef} tabIndex={-1} className="trunk-gutter relative outline-none">
        <MainLine containerRef={mainRef} />
        <Hero />

        {/* Path one: the quick scan. */}
        <Glance />

        {/* Path two: the story lane. Project stations, then three carriages, then the recap. */}
        <Section
          id="projects"
          title="What I’ve built"
          intro="Six projects and an internship, laid out as a route. Each stop is a piece of work; each coloured line is a skill, and it stops wherever I used it. Pick a line to trace it, or read down the route."
        >
          <ProjectRoute />
        </Section>

        <div className="train-cars">
          <Carriage id="skills" number={1} title="The skills carriage" intro={aboutRest.join(" ")}>
            <SkillsCarriage />
          </Carriage>
          <Carriage
            id="experience"
            number={2}
            title="The timeline carriage"
            intro="Roles and education, newest first. Only dated work appears here."
          >
            <Timeline />
          </Carriage>
          <Carriage
            id="proof"
            number={3}
            title="The results and proof carriage"
            intro="What each stop claims, and how you can check it yourself. Private builds are marked as private rather than dressed up."
          >
            <ProofLedger />
          </Carriage>
        </div>

        <Recap />
      </main>

      <Footer />
      <JourneyBoard />
    </div>
  );
}

export default App;
