import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <Sidebar />
      <Main titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
          <Tabela titulo="2026.1"/>
          <Tabela titulo="2025.2"/>
          <Tabela titulo="2025.1"/>
      </Main>
    </>
  );
}
export default Boletos;
