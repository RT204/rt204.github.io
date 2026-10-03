import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 80) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - offset) {
                    current = id;
                }
            }
            setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeId;
}
