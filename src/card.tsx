import type { ReactNode } from "react"
import { Link } from "react-router-dom";

interface CardProps {
    backgroundColor: string
    iconName: string;
    iconColor: string;
    header: string;
    title: string;
    tags: string[];
    link: string;
    children?: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <Link to={props.link} className="card-link">
            <div className="project-card">
                <div className="project-thumb" style={{ background: props.backgroundColor }}><i className={props.iconName} style={{ color: props.iconColor, fontSize: "36px" }} aria-hidden="true"></i></div>
                <div className="project-area" style={{ color: props.iconColor }}>{props.header}</div>
                <h3>{props.title}</h3>
                {props.children}
                <div className="pills">
                    {props.tags.map(t => <Pill text={t} />)}
                </div>
            </div>
        </Link>
    );
}

interface PillProps {
    text: string
}

function Pill(props: PillProps) {
    return (
        <span key={props.text} className="pill">{props.text}</span>
    );
}
