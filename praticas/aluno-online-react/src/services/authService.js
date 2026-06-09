const url = "http://localhost:3000/usuarios";

async function entrar(credenciais) {
  const resposta = await fetch(url); // busca todos, sem query
  const usuarios = await resposta.json();

  const usuario = usuarios.find(
    (u) => u.matricula == credenciais.matricula && u.senha == credenciais.senha
  );

  if (usuario) {
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
      mensagem: "login com sucesso"
    };
  }

  return { token: null, mensagem: "Credenciais inválidas" };
}

export { entrar };