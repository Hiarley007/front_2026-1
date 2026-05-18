import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import Erro404 from "./pages/Erro404";
import Layout from "./layout/Layout";

function App() {
  const {logado} = useAuth();

  return (
    <Routes>
      {logado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="notas" element={<Notas />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
        </Route>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}
export default App;