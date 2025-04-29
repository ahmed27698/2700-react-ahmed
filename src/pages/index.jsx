import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";

export default function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}