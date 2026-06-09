import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { listar } from "../services/requerimentosService";
import Main from "../components/Main";
import Tabela from "../components/Tabela";

function Requerimentos() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dados, setDados] = useState([]);

  const colunas = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

  const exibirTabela = location.pathname === "/requerimentos";

  useEffect(() => {
    if (exibirTabela) {
      const carregar = async () => {
        const resposta = await listar();
        setDados(resposta);
      };
      carregar();
    }
  }, [location.pathname]);

  return (
    <Main
      titulo="Meus Requerimentos"
      subtitulo="Faça solicitações online para Secretária"
      className="flex-1 h-screen md:overflow-hidden"
    >
      {exibirTabela ? (
        <>
          <Tabela
            colunas={colunas}
            dados={dados.map((item) => [
              item.tipo,
              item.dataSolicitacao,
              item.situacao,
            ])}
          />

          <button
            onClick={() => navigate("/requerimentos/novo")}
            className="block ml-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white text-sm font-medium px-4 py-2 mr-4 rounded-lg transition-colors"
          >
            Novo Requerimento
          </button>
        </>
      ) : (
        <Outlet />
      )}
    </Main>
  );
}

export default Requerimentos;