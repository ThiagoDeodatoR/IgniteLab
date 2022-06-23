import { Route, Routes } from "react-router-dom";
import { IgniteLab } from "./pages/IgniteLab";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/ignite-lab" element={<IgniteLab />} />
            <Route path="/ignite-lab/lesson/:slug" element={<IgniteLab />} />
        </Routes>
    )
}