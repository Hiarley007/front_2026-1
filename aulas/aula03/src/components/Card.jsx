function Card(props) {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 max-h-screen p-7 md:p-10 gap-6">
        <articule className="bg-white border border-5px border-solid border-gray-300 rounded-t-lg md:col-span-1">
          <h3 className="md:block rounded-t-lg p-3 bg-gray-300">
            <strong>{props.titulo}</strong>
          </h3>
          <ul className="space-y-2 p-2">
            {props.itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

          </ul>
        </articule>
      </section>
    </>
  );
}

export default Card;
