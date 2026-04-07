import Sidebar from "../components/Sidebar";
import avatar from "../assets/avatar.svg";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 h-screen md:overflow-hidden">
        <header className="flex items-center justify-between border-b border-gray-200 px-3 md:px-10 py-6 w-full">
          <h1 className="text-3xl font-semibold">Meus Requerimentos</h1>

          <img src={avatar} alt="imagem do avatar" className="w-10 h-10" />
        </header>
        <h2 className="text-2xl font-semibold px-3 md:px-8 p-8">
          Faça solitações online para Scretária
        </h2>

        <section className="p-2 md:p-8">
          <table className="w-full border-1 border-solid- border-gray-300">
            <thead className="bg-gray-300 p-8">
              <tr className="bg-gray-300 text-gray-800"> 
                <th className="p-3 font-semibold">Tipo de Requerimentos</th>
                <th className="p-3 font-semibold">Data de Solicitação</th>
                <th className="p-3 font-semibold">Situação</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 border-l border-gray-300">
              <tr className="border-t border-gray-300 bg-gray-100 text-red-600">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Revisão de Mensão</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">15/12/2025</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Indeferido</td>
              </tr>
              <tr className="border-t border-gray-300 text-red-600">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Dispensa de Disciplina</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">12/05/2025</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Indeferido</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Trancamento de Matrícula</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">05/01/2024</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Deferido</td>
              </tr>
              <tr className="border-t border-gray-300 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Mudança de Turno</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">10/10/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Deferido</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Renovação de Matrícula</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">20/02/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Deferido</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Mudança de Turno</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">10/10/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Em análise</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Renovação de Matrícula</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">20/02/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Em análise</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Mudança de Turno</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">10/10/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Em análise</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Renovação de Matrícula</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">20/02/2023</td>
                <td className="p-3 text-center  border-l border-gray-300 font-semibold">Em análise</td>
              </tr>
        
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
export default Boletos;
