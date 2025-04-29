import { BrowserRouter, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";

export default function appRoutes() {
    return (
    <>
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/detalhes">Detalhes</Link>
        <Link to="/favoritos">Favoritos</Link>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
    </BrowserRouter>
    </>
    );
    }