import useScrollSpy from "./useScrollSpy";

export default function Nav() {
    const sectionIds = ['projects', 'experience', 'skills', 'about', 'contact'];
    const activeId = useScrollSpy(sectionIds);
    return (
        <nav>
            <div className="nav-logo">John Smith</div>
            <div className="nav-links">
                {sectionIds.map(id => (
                    <a key={id} href={`#${id}`} className={activeId === id ? 'active' : ''}>
                        {id.at(0).toUpperCase() + id.substring(1)}
                    </a>
                ))}
            </div>
        </nav>
    );
}
