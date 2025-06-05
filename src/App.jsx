import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dash from "./pages/dash";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}
