import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import balerFull from '../assets/baler-full.jpg';
import balerCloseup from '../assets/baler-closeup.jpg';
import sensorCad from '../assets/sensor-cad.jpg';
import sensorDrawing from '../assets/sensor-drawing.jpg';
import robotLayout from '../assets/robot-layout.jpg';
import robotChassis from '../assets/robot-chassis.jpg';
import robotBlade from '../assets/robot-blade.jpg';
import sdvxTop from '../assets/sdvx-top.jpg';
import sdvxInterior from '../assets/sdvx-interior.jpg';

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.project-section[id]');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');

    const handleScroll = () => {
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 80) {
          current = s.id;
        }
      });
      setActiveSection(current);
      links.forEach((a) => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
          a.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">Ray Toma</Link>
        <div className="nav-links">
          <Link to="/#projects" className={activeSection === '' ? 'active' : ''}>← Portfolio</Link>
          <a href="#baler" className={activeSection === 'baler' ? 'active' : ''}>Baler</a>
          <a href="#sensor" className={activeSection === 'sensor' ? 'active' : ''}>Sensor Bracket</a>
          <a href="#robots" className={activeSection === 'robots' ? 'active' : ''}>Robots</a>
          <a href="#sdvx" className={activeSection === 'sdvx' ? 'active' : ''}>SDVX</a>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <div className="page-eyebrow">Selected work</div>
          <h1>Project deep-dives</h1>
          <p>A closer look at four projects spanning industrial design, FEA, combat robotics, and embedded electronics.</p>
        </div>

        {/* ── BALER EXTENSION ─────────────────────────── */}
        <div className="project-section" id="baler">
          <div className="project-label" style={{ color: 'var(--accent2)' }}>Manufacturing / FEA · Pratt Industries Internship</div>
          <h2>Baler Extension</h2>
          <div className="project-meta">
            <span className="meta-pill"><i className="ti ti-building-factory" aria-hidden="true"></i> Pratt Industries, Conyers GA</span>
            <span className="meta-pill"><i className="ti ti-calendar" aria-hidden="true"></i> Summer 2024</span>
          </div>
          <p className="project-desc">
            The paper mill's waste baler compresses filtered waste and transports it through a chute to a truck below — but the original system couldn't deliver the maximum capacity of the truck, leaving significant throughput on the table. I designed a cost-effective extension to the original chute that expanded its capacity by 40%, created all technical drawings, coordinated directly with in-house fabricators on assembly, and ran static FEA in SimScale under loads exceeding 1,000 lbf to verify deformation and safety factors before sign-off. The system was successfully installed and operating by the end of my internship.
          </p>
          <div className="img-grid-2">
            <div>
              <img className="project-img tall" src={balerFull} alt="Installed baler extension — full view" />
              <p className="img-caption">Installed baler extension — full view</p>
            </div>
            <div>
              <img className="project-img tall" src={balerCloseup} alt="Close-up showing expanded chute with compressed bale" />
              <p className="img-caption">Close-up showing expanded chute with compressed bale</p>
            </div>
          </div>
          <div className="outcomes">
            <div className="outcome-card"><div className="num">40%</div><div className="label">Increase in chute capacity per truck load</div></div>
            <div className="outcome-card"><div className="num">1,000+ lbf</div><div className="label">Load simulated in FEA (SimScale)</div></div>
            <div className="outcome-card"><div className="num">✓</div><div className="label">Installed within internship term</div></div>
          </div>
          <div className="skills-used">
            <span className="skill-tag">Onshape (CAD)</span><span className="skill-tag">SimScale (FEA)</span>
            <span className="skill-tag">GD&T</span><span className="skill-tag">Engineering Drawings</span><span className="skill-tag">Fabrication Coordination</span>
          </div>
        </div>

        {/* ── SENSOR BRACKET ─────────────────────────── */}
        <div className="project-section" id="sensor">
          <div className="project-label" style={{ color: 'var(--accent)' }}>Reverse Engineering / GD&T · Pratt Industries Internship</div>
          <h2>Sensor Bracket</h2>
          <div className="project-meta">
            <span className="meta-pill"><i className="ti ti-building-factory" aria-hidden="true"></i> Pratt Industries, Conyers GA</span>
            <span className="meta-pill"><i className="ti ti-calendar" aria-hidden="true"></i> Summer 2024</span>
          </div>
          <p className="project-desc">
            A sensor bracket on the wastewater piston gate was corroding and wearing out, and a direct replacement would have cost $4,000 from the OEM. I reverse-engineered the original components, built a full 3D model in Onshape, produced detailed engineering drawings with proper GD&T callouts, and coordinated with an external vendor to fabricate the replacement parts — bringing the cost down to a fraction of the original. The bracket was installed and operating before the end of the internship.
          </p>
          <div className="img-grid-2">
            <div>
              <img className="project-img auto" src={sensorCad} alt="Onshape CAD model — full assembly" />
              <p className="img-caption">Onshape CAD model — full assembly</p>
            </div>
            <div>
              <img className="project-img auto" src={sensorDrawing} alt="Engineering drawing with GD&T for vendor fabrication" />
              <p className="img-caption">Engineering drawing with GD&T for vendor fabrication</p>
            </div>
          </div>
          <div className="outcomes">
            <div className="outcome-card"><div className="num">$4,000</div><div className="label">OEM cost avoided through reverse engineering</div></div>
            <div className="outcome-card"><div className="num">✓</div><div className="label">Installed within internship term</div></div>
          </div>
          <div className="skills-used">
            <span className="skill-tag">Onshape (CAD)</span><span className="skill-tag">GD&T</span>
            <span className="skill-tag">Reverse Engineering</span><span className="skill-tag">Engineering Drawings</span><span className="skill-tag">Vendor Coordination</span>
          </div>
        </div>

        {/* ── SUMO ROBOTS ────────────────────────────── */}
        <div className="project-section" id="robots">
          <div className="project-label" style={{ color: 'var(--purple)' }}>Robotics / Mechatronics · RoboJackets</div>
          <h2>Sumo Robots (Robowrestling)</h2>
          <div className="project-meta">
            <span className="meta-pill"><i className="ti ti-robot" aria-hidden="true"></i> RoboJackets, Georgia Tech</span>
            <span className="meta-pill"><i className="ti ti-calendar" aria-hidden="true"></i> Aug 2024 – Present</span>
            <span className="meta-pill"><i className="ti ti-trophy" aria-hidden="true"></i> 1st in Florida · 3rd Inhouse</span>
          </div>
          <p className="project-desc">
            Robowrestling is a sumo-style robotics competition where small autonomous and RC bots (500g and 3kg classes) fight to push opponents off a 77cm diameter field. The robots feature metal bases, IR sensors, line sensors, and a razor-blade sloped front edge designed to slip underneath opponents and eject them. As mechanical lead, I designed and built multiple 500g robots, continued development on the 3kg design, and fabricated custom "jigs" to mill sheet metal at precise blade angles. I also mentored new sub-team members in SolidWorks and fabrication techniques.
          </p>
          <div className="img-grid-3">
            <div>
              <img className="project-img medium" src={robotLayout} alt="500g robot body — internal layout CAD" />
              <p className="img-caption">500g robot body — internal layout CAD</p>
            </div>
            <div>
              <img className="project-img medium" src={robotChassis} alt="Transparent chassis view — component packaging" />
              <p className="img-caption">Transparent chassis view — component packaging</p>
            </div>
            <div>
              <img className="project-img medium" src={robotBlade} alt="Blade attachment — razor-edge wedge design" />
              <p className="img-caption">Blade attachment — razor-edge wedge design</p>
            </div>
          </div>
          <div className="outcomes">
            <div className="outcome-card"><div className="num">1st</div><div className="label">Orlando MakerFaire — 500g autonomous (22 teams)</div></div>
            <div className="outcome-card"><div className="num">4th</div><div className="label">RMS International, Brazil — 500g division</div></div>
            <div className="outcome-card"><div className="num">3rd</div><div className="label">Inhouse competition</div></div>
          </div>
          <div className="skills-used">
            <span className="skill-tag">SolidWorks</span><span className="skill-tag">Onshape</span><span className="skill-tag">Waterjet</span>
            <span className="skill-tag">Fiber Laser Cutter</span><span className="skill-tag">Knee Mill</span><span className="skill-tag">3D Printing</span>
          </div>
        </div>

        {/* ── SDVX CONTROLLER ────────────────────────── */}
        <div className="project-section" id="sdvx">
          <div className="project-label" style={{ color: 'var(--amber)' }}>Personal Project · Design + Electronics</div>
          <h2>SDVX Custom Controller</h2>
          <div className="project-meta">
            <span className="meta-pill"><i className="ti ti-device-gamepad-2" aria-hidden="true"></i> Personal Project</span>
            <span className="meta-pill"><i className="ti ti-calendar" aria-hidden="true"></i> Jan 2024 – May 2025</span>
          </div>
          <p className="project-desc">
            Sound Voltex (SDVX) is a Japanese cabinet-style rhythm game. I wanted to replicate the arcade experience on a personal computer, so I designed and built a fully custom portable controller from scratch. The enclosure was designed in SolidWorks and fabricated using CO2 and fiber laser cutters and 3D printers. Inside, I hand-soldered a custom circuit connecting 4 main buttons, 2 side buttons, and two optical rotary encoders (for the knobs) to a microcontroller, then wrote firmware in Arduino IDE to map all inputs to computer signals. The full idea-to-product process was documented on GitHub.
          </p>
          <div className="img-grid-2">
            <div>
              <img className="project-img medium" src={sdvxTop} alt="Completed controller — top panel with buttons and knobs" />
              <p className="img-caption">Completed controller — top panel with buttons and knobs</p>
            </div>
            <div>
              <img className="project-img medium" src={sdvxInterior} alt="Interior — custom circuit, encoders, and wiring" />
              <p className="img-caption">Interior — custom circuit, encoders, and wiring</p>
            </div>
          </div>
          <div className="outcomes">
            <div className="outcome-card"><div className="num">✓</div><div className="label">Fully functional arcade-style controller</div></div>
            <div className="outcome-card"><div className="num">✓</div><div className="label">Custom firmware written in Arduino IDE</div></div>
            <div className="outcome-card"><div className="num">✓</div><div className="label">Full process documented on GitHub</div></div>
          </div>
          <div className="skills-used">
            <span className="skill-tag">SolidWorks</span><span className="skill-tag">Laser Cutting</span><span className="skill-tag">3D Printing</span>
            <span className="skill-tag">Soldering</span><span className="skill-tag">Arduino / C</span><span className="skill-tag">Cirkit Designer</span><span className="skill-tag">GitHub</span>
          </div>
        </div>

        <Link to="/" className="back-link"><i className="ti ti-arrow-left" aria-hidden="true"></i> Back to full portfolio</Link>
      </div>

      <footer style={{ padding: '2rem', textAlign: 'center', fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2rem' }}>© 2026 Ray Toma — Mechanical Engineering Portfolio</footer>
    </>
  );
}
