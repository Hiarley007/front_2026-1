import Card from "../components/Card";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const avisos = [
    "Eleiçõa para representante de Turma",
    "Inscrição para Projeto de Extensão",
  ]

  const datas = [
    "27-04 - Avalição do 1° Bimestre",
  ]

  const disciplinas = [
    "Construçõa de Frontend",
    "Manutençõa de Software e DevOps",
    "BI e Data Warehouse"
  ]


  return (
    <>
      <Sidebar />
      <Main titulo="Olá, ALuno!" subtitulo="Bem - vindo ao Portal do Aluno">
        <Card titulo='Mural de Avisos' itens={avisos}/>
        <Card titulo='Calendário Acdêmico' itens={datas}/>
        <Card titulo='Minhas Disciplinas' itens={disciplinas}/>
      </Main>
    </>
  );
}

export default Dashboard;
