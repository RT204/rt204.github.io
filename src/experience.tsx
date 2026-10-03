
export default function Experience() {
    return (

        <div className="section" id="experience">
            <div className="container">
                <div className="section-label">Career</div>
                <div className="section-title">Experience</div>

                <div className="exp-card featured">
                    <div className="exp-header">
                        <div className="exp-title">Automotive Roadmap R&D Internship</div>
                        <div className="exp-date">Jun 20xx – Dec 20xx</div>
                    </div>
                    <div className="exp-company">Kuruma, Co. - Tokyo, Japan</div>
                    <ul className="exp-bullets blurred">
                        <li>Researched value-in-use of aluminum lightweighting for vehicle fuel efficiency, sustainability, and market positioning — presented to automotive OEMs including Volkswagen and Honda.</li>
                        <li>Analyzed material types and weights across 600+ vehicle body parts and battery enclosures in Python.</li>
                        <li>Built linear and power regression models using 950+ data points from A2MAC1 to estimate mass influence coefficients.</li>
                        <li>Modeled lightweighting effects on range, MPGe, and CO2 for ICE, BEV, and hybrid vehicles using NREL FASTSim — achieved 15% weight reduction and +10% fuel economy.</li>
                        <li>Created graphics presented at the Euro Car Body conference.</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-title">Mechanical Engineer Intern</div>
                        <div className="exp-date">May 20xx – Aug 20xx</div>
                    </div>
                    <div className="exp-company">Kigyo Industries, Paper Mill Division — Los Angeles, California</div>
                    <ul className="exp-bullets blurred">
                        <li>Designed a baler extension improving throughput by 30%; coordinated fabrication and installation with in-house team.</li>
                        <li>Performed static FEA on baler extension under 1,000+ lbf loads in SimScale to verify deformation and safety factors.</li>
                        <li>Reverse-engineered a $4,000 sensor housing in Onshape; created engineering drawings and sourced vendor fabrication.</li>
                        <li>Updated P&IDs with isolation valves for steam lines in AutoCAD 2D.</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-title">3D Printing Master Peer Instructor</div>
                        <div className="exp-date">Jan 20xx – Present</div>
                    </div>
                    <div className="exp-company">Maker Lab, Shinshu University — Nagano, Japan</div>
                    <ul className="exp-bullets blurred">
                        <li>Oversees operations and maintenance of 25+ machines producing 4,000+ prints annually.</li>
                        <li>Trained 60+ peer instructors on FDM, SLA, and PolyJet printing (Ultimakers, Stratasys F170/J55, Bambu, Formlabs).</li>
                        <li>Supports 250+ daily end-users across laser cutters, 3D printers, soldering stations, and oscilloscopes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
