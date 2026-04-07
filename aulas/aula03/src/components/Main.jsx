import Card from "./Card";
import Topbar from "./Topbar";

function Main(props) {
  return (
    <>
      <main className="flex-1 max-w-7xl mx-auto">
        <Topbar titulo={props.titulo} />

        <h2 className="text-lg font-semibold px-4 md:px-10 p-8">
          {props.subtitulo}
        </h2>
        <section>
          {props.children}
        </section>
      </main>
    </>
  );
}

export default Main;
