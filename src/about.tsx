
export default function About() {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="section-label">Background</div>
                <div className="section-title">About me</div>
                <div className="about-grid">
                    <div className="about-text">
                        <div className="avatar">RT</div>
                        <p>I'm a mechanical engineering student at Shinshu University (Class of 20xx) with a minor in Computer Science. I'm drawn to work that bridges the physical and digital — whether that's running Python regression models on automotive lightweighting data or wiring up a custom arcade controller from scratch.</p>
                        <p>At the Maker Lab, I've spent hundreds of hours helping students bring ideas to life — and doing the same with my own projects through RoboKen and personal builds. I believe the best engineers are also capable fabricators.</p>
                        <p>Fluent in both English and Japanese (native level, JLPT N1), and currently holding an FCC Technician license. Open to opportunities in R&D, robotics, or manufacturing engineering.</p>
                    </div>
                    <div>
                        <div className="info-row"><i className="ti ti-school" aria-hidden="true"></i><div><div className="info-label">University</div><div className="info-val">Shinshu University of International</div></div></div>
                        <div className="info-row"><i className="ti ti-certificate" aria-hidden="true"></i><div><div className="info-label">Degree</div><div className="info-val">B.S. Mechanical Engineering + CS Minor</div></div></div>
                        <div className="info-row"><i className="ti ti-calendar" aria-hidden="true"></i><div><div className="info-label">Expected graduation</div><div className="info-val">May 20xx</div></div></div>
                        <div className="info-row"><i className="ti ti-star" aria-hidden="true"></i><div><div className="info-label">GPA</div><div className="info-val">3.7 / 4.0</div></div></div>
                        <div className="info-row"><i className="ti ti-map-pin" aria-hidden="true"></i><div><div className="info-label">Location</div><div className="info-val">Tokyo, Japan — open to relocation</div></div></div>
                        <div className="info-row"><i className="ti ti-antenna" aria-hidden="true"></i><div><div className="info-label">FCC License</div><div className="info-val">Technician class</div></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
