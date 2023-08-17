import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SecondQuestion } from "./pages/second-question";
import { VslTiger } from "./pages/vsltiger";
import { Creative } from "./pages/creative";
import { Register } from "./pages/register";
import { BackRedirect } from "./pages/backredirect";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondplay" element={<SecondQuestion />} />
            <Route path="/vsltiger" element={<VslTiger />} />
            <Route path="/game" element={<Creative />} />
            <Route path="/register" element={<Register />} />
            <Route path="/backredirect" element={<BackRedirect />} />
        </Routes>
    );
}