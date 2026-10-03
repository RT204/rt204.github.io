import type React from "react";

export default function Skills() {
    return (
        
        <div className="section" id="skills">
            <div className="container">
                <div className="section-label">Capabilities</div>
                <div className="section-title">Technical skills</div>
                <div className="skills-grid">
                    <div>
                        <div className="skills-label">Software & CAD</div>
                        <SkillBar label="SolidWorks" level="Expert" progress={90} barColor="var(--accent)" />
                        <SkillBar label="Onshape" level="Advanced" progress={80} barColor="var(--accent)" />
                        <SkillBar label="SimScale (FEA)" level="Intermediate" progress={65} barColor="var(--accent2)" />
                        <SkillBar label="AutoCAD 2D" level="Intermediate" progress={60} barColor="var(--accent)" />
                        <SkillBar label="Siemens NX" level="Beginner" progress={35} barColor="var(--accent)" />
                        
                        <div className="skills-label" style={{ marginTop: "2rem" }}>Programming</div>
                        <SkillBar label="Python" level="Advanced" progress={78} barColor="var(--green)" />
                        <SkillBar label="Arduino" level="Intermediate" progress={62} barColor="var(--green)" />
                        <SkillBar label="MATLAB" level="Intermediate" progress={55} barColor="var(--green)" />
                        <SkillBar label="Java" level="Beginner" progress={35} barColor="var(--green)" />
                    </div>
                    <div>
                        <div className="skills-label">Fabrication & Machinery</div>
                        <div className="check-list">
                            <SkillBoxItem label="FDM, SLA & PolyJet 3D printing"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="CO2 & fiber laser cutting"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="Waterjet cutting"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="Manual mill & lathe"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="Soldering & PCB assembly"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="GD&T & engineering drawings"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="P&ID documentation (AutoCAD)"><IconCheck fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="ProtoMat & ProtoLaser PCB routing"><IconCheck fontSize="14px" /></SkillBoxItem>
                        </div>
                        <div className="skills-label" style={{ marginTop: "2rem" }}>Languages</div>
                        <div className="check-list">
                            <SkillBoxItem label="English — Native"><IconLang fontSize="14px" /></SkillBoxItem>
                            <SkillBoxItem label="Japanese — Native (JLPT N1)"><IconLang fontSize="14px" /></SkillBoxItem>
                        </div>
                        <div className="skills-label" style={{ marginTop: "2rem" }}>Coursework highlights</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            <span className="pill">Machine Design</span>
                            <span className="pill">System Dynamics</span>
                            <span className="pill">Heat Transfer</span>
                            <span className="pill">Thermodynamics</span>
                            <span className="pill">Fluid Mechanics</span>
                            <span className="pill">Mechanics of Materials</span>
                            <span className="pill">Numerical Methods</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface SkillBarProps{
    label: string;
    level: string;
    progress: number;
    barColor: string;
}

function SkillBar(props: SkillBarProps){
    return(
        <div className="skill-bar">
            <div className="skill-bar-label">
                <span>{props.label}</span>
                <span>{props.level}</span>
            </div>
            <div className="bar-track">
                <div 
                    className="bar-fill" 
                    style={{
                        width: `${props.progress}%`,
                        background: props.barColor 
                    }}
                >
                </div>
            </div>
        </div>
    );
}

interface SkillBoxProps{
    label: string;
    children: React.ReactNode
}

function SkillBoxItem(props: SkillBoxProps){
    return(
        <div className="check-item">
            {props.children}
            {props.label}
        </div>
    );
}

interface IconProps{
    fontSize: string;
}

function IconCheck(props: IconProps){
    return(
        <i className="ti ti-check" style={{ color: "var(--green)", fontSize: props.fontSize}} aria-hidden="true"></i>
    )
}

function IconLang(props: IconProps){
    return(
        <i className="ti ti-language" style={{color: "var(--text-muted)", fontSize: props.fontSize}} aria-hidden="true"></i>
    );
}
