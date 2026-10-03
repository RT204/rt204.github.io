import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.tsx';
import Roboken from "./projects/roboken.tsx";
import SoundVoltex from "./projects/soundVoltex.tsx";
import AutonomousRobot from "./projects/autonomousRobot.tsx";
import Kigyo from "./projects/kigyo.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects">
                    <Route path="/projects/roboken" element={<Roboken />} />
                    <Route path="/projects/sound-voltex" element={<SoundVoltex />} />
                    <Route path="/projects/autonomous-robot" element={<AutonomousRobot />} />
                    <Route path="/projects/kigyo" element={<Kigyo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
