import Sidebar from "../components/Sidebar";
import avatar from "../assets/avatar.svg";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="flex items-center justify-between border-b border-gray-200 px-8 md:px-10 py-6 w-full">
          <h1 className="text-3xl font-semibold">Minhas Faltas</h1>

          <img src={avatar} alt="imagem do avatar" className="w-10 h-10" />
        </header>
        <h2 className="text-2xl font-semibold px-10 p-0 md:px-8 p-8">
          Histórico de faltas por Semestre
        </h2>

        <section className="p-8">
          <h3 className="bg-gray-300 text-gray-800 text-lg text-center font-bold p-2 rounded-t-lg overflow-hidden">
            1° SEMESTRE - 2026
          </h3>
          <table className="w-full border-1 border-solid border-gray-300">
            <thead className="bg-gray-300 p-8">
              <tr className="bg-gray-300 text-gray-800">
                <th className="p-2">Disciplinas</th>
                <th className="p-2">A1</th>
                <th className="p-2">A2</th>
                <th className="p-2">A3</th>
                <th className="p-2">Menção</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 border-l border-gray-300">
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  BI e Data Warehousing
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Construção de Frontend
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t  border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Manutenção de Software e DevOps
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
            </tbody>
          </table>
          </section>

          <section className="p-8">
          <h3 className="bg-gray-300 text-gray-800 text-lg text-center font-bold p-2 rounded-t-lg overflow-hidden">
            1° SEMESTRE - 2026
          </h3>
          <table className="w-full border border-solid border-gray-300">
            <thead className="bg-gray-300 p-8">
              <tr className="bg-gray-300 text-gray-800">
                <th className="p-2">Disciplinas</th>
                <th className="p-2">A1</th>
                <th className="p-2">A2</th>
                <th className="p-2">A3</th>
                <th className="p-2">Menção</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 border-l border-gray-300">
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  BI e Data Warehousing
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Construção de Frontend
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t  border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Manutenção de Software e DevOps
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="p-8">
          <h3 className="bg-gray-300 text-gray-800 text-lg text-center font-bold p-2 rounded-t-lg overflow-hidden">
            1° SEMESTRE - 2026
          </h3>
          <table className="w-full border-1 border-solid border-gray-300">
            <thead className="bg-gray-300 p-8">
              <tr className="bg-gray-300 text-gray-800">
                <th className="p-2">Disciplinas</th>
                <th className="p-2">A1</th>
                <th className="p-2">A2</th>
                <th className="p-2">A3</th>
                <th className="p-2">Menção</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 border-l border-gray-300">
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  BI e Data Warehousing
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Construção de Frontend
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
              <tr className="bg-white border-t  border-gray-300 text-gray-800">
                <td className="p-3 text-center  border-l border-gray-300">
                  Manutenção de Software e DevOps
                </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300"> </td>
                <td className="p-3 text-center  border-l border-gray-300">SR</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Notas;
