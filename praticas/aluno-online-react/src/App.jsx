
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";

function App () {
  return (
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path="notas" element={<Notas />}/>
        <Route path="faltas" element={<Faltas />}/>
        <Route path="boletos" element={<Boletos />}/>
        <Route path="requerimentos" element={<Requerimentos />}/>
     </Route>
        
    <Route path="*" element={<Erro404 />}/>
    <Route path="/login" element={<Login />} />
    </Routes>
  ) 
}

export default App;