import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.tsx';
import ProjectsPage from "./projects/projectsPage.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
