import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [logado, setLogado] = useState(false);

  const login = () => {
    setUsuario({ nome: "Hiarley"});
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}



export { AuthContext, AuthProvider };

/* import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const saved = localStorage.getItem("usuario");
    return saved ? JSON.parse(saved) : {};
  });

  const [logado, setLogado] = useState(() => {
    return localStorage.getItem("logado") === "true";
  });

  const login = ({ username }) => {
    setUsuario({ nome: username });
    setLogado(true);
    localStorage.setItem("usuario", JSON.stringify({ nome: username }));
    localStorage.setItem("logado", "true");
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
    localStorage.removeItem("usuario");
    localStorage.removeItem("logado");
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }; */