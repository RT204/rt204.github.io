
export default function Contact() {
    return (
        <div className="section" id="contact">
            <div className="container">
                <div className="section-label">Reach out</div>
                <div className="section-title">Contact</div>
                <div className="contact-card">
                    <div className="contact-row"><i className="ti ti-phone" aria-hidden="true"></i><span>xxx-xxx-xxxx</span></div>
                    <div className="contact-row"><i className="ti ti-mail" aria-hidden="true"></i><a>john@example.com</a></div>
                    <div className="contact-row"><i className="ti ti-brand-linkedin" aria-hidden="true"></i><a href="" target="_blank" rel="noopener">linkedin.com/in/john-smith-8208811a01ba83c</a></div>
                    <div className="contact-row" style={{ borderBottom: "none" }}><i className="ti ti-map-pin" aria-hidden="true"></i><span>Tokyo, Japan — open to relocation</span></div>
                </div>
            </div>
        </div>
    );
}
