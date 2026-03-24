// Impotação do CSS
import './App.css';
import logo from './assets/learn.svg'

// JSX - SISTAXE QUE MESCLA HTML e JAVASCRIPT
function App() {
  return (

    <main>
      { /* Chaves dentro no JSX aceita JS*/ }

      <img src={logo} alt="logotipo"/>

      <h1>Aluno Online</h1>

      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula"/>
      <p id="matriculaErro"></p>

      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha"/>
      <p id="senhaErro"></p>
      <button>Entrar</button>
    </main>
  );
};

export default App;