function Menu({ navegaPara }) {
  return (
    <>
      <nav className="max-h-screen bg-gray-300 border-r border-gray-200 p-8">
        <ul>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
            <a href="#" onClick={(e) => navegaPara(1)}>Dashboard</a>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <a href="#" onClick={(e) => navegaPara(2)}>Notas</a>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <a href="#" onClick={(e) => navegaPara(3)}>Faltas</a>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <a href="#" onClick={(e) => navegaPara(4)}>Boletos</a>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <a href="#" onClick={(e) => navegaPara(5)}>Requerimentos</a>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 cursor-pointer mt-6">
            <a href="#" onClick={(e) => navegaPara(0)}>Sair</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
