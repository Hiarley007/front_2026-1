function Tabela(props) {
  return (
    <>
      {props.titulo && (
        <h2 className="text-2xl font-semibold p-2 bg-gray-300 text-center border-b border-gray-100 rounded-t-lg">
          {props.titulo}
        </h2>
      )}

      <section className="pb-8">
        <table className="w-full border border-gray-300">
          {/* Cabeçalho */}
          <thead className="bg-gray-300 text-gray-800">
            <tr>
              {props.colunas.map((item, index) => (
                <th key={index} className="p-3 font-semibold text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          {/* Corpo */}
          <tbody className="text-gray-900">
            {props.dados.map((linha, i) => {
              const status = linha[2];

              return (
                <tr
                  key={i}
                  className={`
                    border-t border-gray-300
                    ${i % 2 === 0 ? "bg-gray-100" : ""}
                    ${status === "Pago" ? "text-green-600" : ""}
                    ${status === "Em atraso" ? "text-red-600" : ""}
                    ${status === "Deferido" ? "text-green-600" : ""}
                    ${status === "Indeferido" ? "text-red-600" : ""}
                  `}
                >
                  {linha.map((coluna, j) => (
                    <td
                      key={j}
                      className="p-3 text-center border-l border-gray-300"
                    >
                      {coluna}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Tabela;
