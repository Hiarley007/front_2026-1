import { useParams } from "react-router";


function Perfil() {
  const { id } = useParams ();
  return (
    <>
      <h1>Página do Usuário {id} </h1>
     
    </>
  );
}

export default Perfil;
