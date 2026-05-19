import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSalvar = (data) => {
    console.log(data);
  };
  // register => {id:"", name:"", onChange:""}
  // buscar o usuário pelo id;

  const validadores = {
    name: {
      required: "Nome é obrigatório",
      minLength: { value: 3, message: "Nome deve ter mais de 2 caracteres" },
    },

    email: {
      min: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
      message: "Telefone é um número" },
    },

    nascimento: {
      validate: (value) => Date.parse(value) < Date.now() || "Data de Nascimento Inválida",
      },

    telefone: {
      min: { value: /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/, 
      message: "Telefone é um número" },
    },
  };

  return (
    <>
      <h1>Página do Usuário {id} </h1>

      <form onSubmit={handleSubmit(onSalvar)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name", validadores.name)}
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", validadores.email)}
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="nascimento"
            {...register("nascimento", validadores.nascimento)}
          />
          {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>

        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            {...register("telefone", validadores.telefone)}
          />
          {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
