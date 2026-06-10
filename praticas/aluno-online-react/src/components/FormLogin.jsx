import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";
import useAuth from "../hooks/useAuth";


function FormLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();
  const [erro, setErro] = useState();

  const entrar = async (dados) => {
    let validacao = true;

    setMatriculaErro("");
    setSenhaErro("");

    if (!dados.matricula) {
      setMatriculaErro("Matrícula é obrigatória");
      validacao = false;
    }

    if (!dados.senha) {
      setSenhaErro("Senha é obrigatória");
      validacao = false;
    } else if (dados.senha.length < 6) {
      setSenhaErro("A senha deve ter no mínimo 6 caracteres");
      validacao = false;
    }

    if (validacao) {
      try {
        await login(dados);
        navigate("/");
        setErro("");
      } catch (error) {
        setErro(error.message);
      }
    }
  };

  return (
    <>
    <p>{erro}</p>
    <form onSubmit={handleSubmit(entrar)} className="flex flex-col md:w-100">
      <InputMatricula
        erro={matriculaErro}
        {...register("matricula")}
      />
      <InputSenha
        erro={senhaErro}
        {...register("senha")}
      />
      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
      <InputSubmit texto="Entrar" />
    </form>
    </>
  );
}

export default FormLogin;