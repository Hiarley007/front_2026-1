const url = "http://localhost:3000/produtos";

// POST
async function criar(produto) {
  try {
    // Gera uma requisiçõa no HTTP no JS
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto),
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deus ruim! ${error.code}-${error.message}` };
  }
}

// GET /id
async function obter(produto) {
  try {
    // Gera uma requisiçõa no HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`);
    return await resposta.json();
  } catch (error) {
    return { message: `Deus ruim! ${error.code}-${error.message}` };
  }
}

// GET /
async function listar(token) {
  if (!token) {
    throw new Error("401 - Não Autorizado")
  }
  try {
    // Gera uma requisiçõa no HTTP no JS
    const resposta = await fetch(url, {
      headers: {Authorization: `Beraer ${token}`}
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deus ruim! ${error.code}-${error.message}` };
  }
}

// PUT /id
async function atualizar(produto) {
    try {
    // Gera uma requisiçõa no HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`, {
      method: "PUT",
      body: JSON.stringify(produto),
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deus ruim! ${error.code}-${error.message}` };
  }
}

// DELET /id
async function remover(produto) {
    try {
    // Gera uma requisiçõa no HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`, {
        method: "DELETE"
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deus ruim! ${error.code}-${error.message}` };
  }
}

export { criar, obter, listar, atualizar, remover };
