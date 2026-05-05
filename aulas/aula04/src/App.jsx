import { Routes, Route } from "react-router";
import About from "./pages/About";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Erro404 from "./pages/Erro404";
import Layout from "./layout/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="perfil/:id" element={<Perfil />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Erro404 />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
