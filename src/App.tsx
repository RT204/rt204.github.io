import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Hero from "./hero";
import Nav from "./nav";
import Project from "./project";
import Skills from "./skills";

export default function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Project />
            <Experience />
            <Skills />
            <About />
            <Contact />
            <footer>© 2026 Ray Toma — Mechanical Engineering Portfolio</footer>
        </>
    );
}
