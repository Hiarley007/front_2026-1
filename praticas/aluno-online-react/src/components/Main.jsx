import Card from "./Card";
import Topbar from "./Topbar";

function Main() {
  return (
    <>
      <main className="flex-1 mx-auto pr-6 pl-6">
        <Topbar />

        <h2 className="text-lg font-semibold px-4 md:px-10 p-8">
          Bem - vindo ao Portal do Aluno
        </h2>

        <Card/> 
      </main>
    </>
  );
}

export default Main;
