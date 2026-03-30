import logo from './assets/learn.svg';
import avatar from './assets/avatar.svg';


function App(){
  return <div className='flex flex-col md:flex-row'>

    <aside className='hidden md:block bg-gray-300'>

      <header className='flex flex-row'>
        
        <img src={logo} alt="imagem do logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main className='flex flex-col max-w-screen'>
      <header className='flex flex-row' >
        <h1>Olá, Aluno!</h1>
        <img src={avatar} alt="imagem do avatar" />
      </header>
      <h2>Bem - vindo ao Portal do Aluno</h2>
      <section>
        <articule>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrições para Projeto de Extensão</li>
            <li>Eleição para representante de Turma</li>
            <li></li>
          </ul>
        </articule>
        <articule>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do Período Letivo 2026/1</li>
            <li>25/04 - Prazo Final para Aplicação da P1</li>
            <li>23/06 - Prazo Final para Aplicação P2</li>
            <li>04/07 - Fim do Perído Letivo 2026/1</li>
          </ul>
        </articule>
        <articule>
          <h3>MInhas Disciplinas</h3>
          <ul>
            <li>BI e Data Warehouse</li>
            <li>Construçãod e Frontend</li>
            <li>MAnutenção de Software e DevOps</li>
          </ul>
        </articule>
      </section>
    </main>
  </div>
}

export default App;