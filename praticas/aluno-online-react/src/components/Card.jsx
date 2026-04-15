function Card(props) {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 p-7 md:p-4 gap-6">
        <article className="bg-white border border-solid border-gray-300 md:col-span-2 rounded-t-lg">
          <h3 className="md:block p-3 bg-gray-300 rounded-t-lg">
            <strong>{props.titulo}</strong>
          </h3>

          <ul className="space-y-2 p-2">
            {props.itens.map((item, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}

export default Card;
