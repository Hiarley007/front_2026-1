import avatar from "../assets/avatar.svg";

function Topbar() {
  return (
    <> 
    
      <header className="flex items-center justify-between border-b border-gray-200 md:px-6 py-6 w-full">
        <h1 className="text-lg font-semibold">Olá, Aluno!</h1>

        <img src={avatar} alt="imagem do avatar" className="w-10 h-10" />
      </header>

    </>
  );
}

export default Topbar; 
