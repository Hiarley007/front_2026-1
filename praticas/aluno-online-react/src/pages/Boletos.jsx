import Sidebar from "../components/Sidebar";
import avatar from "../assets/avatar.svg";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 h-screen md:overflow-hidden">
        <header className="flex items-center justify-between border-b border-gray-200 px-8 md:px-10 py-6 w-full">
          <h1 className="text-3xl font-semibold">Meus Boletos</h1>

          <img src={avatar} alt="imagem do avatar" className="w-10 h-10" />
        </header>
        <h2 className="text-2xl font-semibold px-10 p-0 md:px-8 p-8">
          Histórico de Pagamentos
        </h2>

        <section className="p-8">
          <table className="w-full border-1 border-solid- border-gray-300">
            <thead className="bg-gray-300 p-8">
              <tr className="bg-gray-300 text-gray-800">
                <th className="p-3 font-semibold">Vencimento</th>
                <th className="p-3 font-semibold">Valor R$</th>
                <th className="p-3 font-semibold">Situação</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 border-l border-gray-300">
              <tr className="border-t border-gray-300 bg-gray-100 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/01/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  Pago
                </td>
              </tr>
              <tr className="border-t border-gray-300 text-red-600">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/02/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  Em atraso
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/03/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  Pago
                </td>
              </tr>
              <tr className="border-t border-gray-300 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/04/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  Pago
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100 text-green-600">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/05/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  Pago
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/06/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/07/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/08/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/09/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/10/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/11/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/12/2026
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100">
                <td className="p-3 text-center  border-l border-gray-300">
                  19/01/2027
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  500,00
                </td>
                <td className="p-3 text-center  border-l border-gray-300">
                  A pagar
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
export default Boletos;
