import { Routes, Route } from "react-router";
import About from "./pages/About";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Erro404 from "./pages/Erro404";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
}

export default App;
