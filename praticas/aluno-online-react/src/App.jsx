import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";
import Layout from "./layout/Layout";
import useAuth from "./hooks/useAuth";

function App() {
  const {logado} = useAuth();

  return (
    <Routes>
<<<<<<< HEAD
       <Route path="/login" element={<Login />} />
     <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path="notas" element={<Notas />}/>
        <Route path="faltas" element={<Faltas />}/>
        <Route path="boletos" element={<Boletos />}/>
        <Route path="requerimentos" element={<Requerimentos />}/>
     </Route>
        
    <Route path="*" element={<Erro404 />}/>
=======
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
>>>>>>> 5d0d3e984a52e345e8fd3b40a39e7ccdd24766bf
    </Routes>
  );
}
export default App;