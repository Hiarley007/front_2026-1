function Menu (){
    return (
        <>
        <nav className="max-h-screen bg-gray-300 border-r border-gray-200 p-8">
  <ul>

    <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
      Dashboard
    </li>

    <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      Notas
    </li>

    <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      Faltas
    </li>

    <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      Boletos
    </li>

    <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      Requerimentos
    </li>

    <li className="px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 cursor-pointer mt-6">
      Sair
    </li>

  </ul>
</nav>
      </>
    )
}

export default Menu;