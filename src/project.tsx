import Card from "./card"

export default function Project() {
    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="section-label">Work</div>
                <div className="section-title">Projects</div>
                <div className="projects-grid">
                    <Card
                        backgroundColor="var(--purple-light)"
                        iconName="ti ti-robot"
                        iconColor="var(--purple)"
                        header="Robotics / Mechatronics"
                        title="RoboKen — Combat Robot"
                        tags={["SolidWorks", "Onshape", "Fiber Laser", "Waterjet", "Manual Mill"]}
                        link="/projects/roboken"
                    >
                        <p>Mechanical lead for a 10×10cm autonomous and RC combat bot. Designed the chassis to house 5 IR sensors, 2 light sensors, 2 motors, battery, and PCB. Fabricated custom aluminum and steel parts with fiber laser, waterjet, and manual mill. Placed 1st at Robotto Taikai in a 22-team field.</p>
                    </Card>

                    <Card
                        backgroundColor="var(--amber-light)"
                        iconName="ti ti-device-gamepad-2"
                        iconColor="var(--amber)"
                        header="Design / Electronics"
                        title="Sound Voltex Arcade Controller"
                        tags={["Solidworks", "Arduino", "Laser Cutting", "Cirkit Designer", "GitHub"]}
                        link="/projects/sound-voltex"
                    >
                        <p>Designed and fabricated a custom portable arcade controller from scratch — parts cut with CO2 and fiber laser cutters and 3D printers. Hand-soldered a custom circuit connecting buttons and optical rotary encoders to a microcontroller, programmed via Arduino IDE.</p>
                    </Card>

                    <Card
                        backgroundColor="var(--accent-light)"
                        iconName="ti ti-settings-automation"
                        iconColor="var(--accent)"
                        header="Robotics / Manufacturing"
                        title="Multi-Purpose Autonomous Robot"
                        tags={["SolidWorks", "FMEA", "HoQ", "Fabrication"]}
                        link="/projects/autonomous-robot"
                    >
                        <p>Fabrication lead on a team competition robot built to lift a 3" object 5 feet from the ground. Contributed 100+ hours across SolidWorks CAD, hardware fabrication, and validation testing. Seeded 2nd and finished top 16 of 60+ teams. Used FMEA, HoQ, and spec sheets to support design decisions.</p>
                    </Card>

                    <Card
                        backgroundColor="var(--accent2-light)"
                        iconName="ti ti-chart-area"
                        iconColor="var(--accent2)"
                        header="Structural FEA"
                        title="Waste Baler Extension - Kigyo Industries"
                        tags={["SimScale", "Onshape", "Static FEA", "GD&T"]}
                        link="/projects/kigyo"
                    >
                        <p>Designed and FEA-validated a baler extension under 1,000+ lbf loads in SimScale. Coordinated directly with in-house fabricators on build and installation. The extension improved baler performance by 30% by increasing volume per truck load.</p>
                    </Card>
                </div>
            </div>
        </div >
    );
}
