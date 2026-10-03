
export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-eyebrow">Shinshu University — Mechanical Engineering, Class of 20xx</div>
                <h1>John Smith<br /><em>builds things.</em></h1>
                <p className="hero-bio">
                    Mechanical engineering student at Shinshu University with industry experience in automotive R&D, manufacturing, and fabrication. I design systems, run FEA, write Python, and machine my own parts — and I bring that same hands-on drive everywhere I work.
                </p>
                <div className="hero-tags">
                    <span className="tag"><i className="ti ti-vector" aria-hidden="true"></i> CAD / Design</span>
                    <span className="tag"><i className="ti ti-chart-area" aria-hidden="true"></i> Structural FEA</span>
                    <span className="tag"><i className="ti ti-tool" aria-hidden="true"></i> Manufacturing</span>
                    <span className="tag"><i className="ti ti-robot" aria-hidden="true"></i> Robotics</span>
                    <span className="tag"><i className="ti ti-code" aria-hidden="true"></i> Python / Arduino</span>
                </div>
                <div className="hero-badges">
                    <div className="badge badge-gold"><i className="ti ti-trophy" aria-hidden="true"></i> 1st place — Robotto Taikai</div>
                    <div className="badge badge-blue"><i className="ti ti-building-factory" aria-hidden="true"></i> Internship at Kuruma, Co. — Automotive R&D</div>
                    <div className="badge badge-purple"><i className="ti ti-printer" aria-hidden="true"></i> 3D Printing Master — Shinshu 3D Print Lab</div>
                </div>
            </div>
        </div>
    );
}
