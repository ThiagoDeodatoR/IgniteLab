import { Route, Routes } from "react-router-dom";
import { IgniteLab } from "./pages/IgniteLab";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/ignite-lab" element={<IgniteLab />} />
            <Route path="/ignite-lab/lesson/:slug" element={<IgniteLab />} />
        </Routes>
    )
}