import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Notas(props) {
  const colunas = ["Disciplinas", "Total de Faltas", "% de Presença"];

  const notas = [
    [
      ["BI e DataWarehouse", "0", "100%"],
      ["Construção de Frontend", "0", "100%"],
      ["Manutenção de Softawre e DevOps", "0", "100%"],
    ],

    [
      ["Estrutura de Dados", "0", "100%"],
      ["Construção de Backend", "0", "100%"],
      ["Gerenciamento de Projetos", "0", "100%"],
    ],

    [
      ["Estrutura de Dados", "0", "100%"],
      ["Construção de Backend", "0", "100%"],
      ["Gerenciamento de Projetos", "0", "100%"],
    ],
  ];
  return (
    <>
      <Sidebar navegaPara={props.navegaPara}/>
      <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas">
        <Tabela
          titulo="1° Semestre - 2026"
          colunas={colunas}
          dados={notas[0]}
        />
        <Tabela
          titulo="2° Semestre - 2025"
          colunas={colunas}
          dados={notas[1]}
        />
        <Tabela
          titulo="1° Semestre - 2025"
          colunas={colunas}
          dados={notas[2]}
        />
      </Main>
    </>
  );
}

export default Notas;
