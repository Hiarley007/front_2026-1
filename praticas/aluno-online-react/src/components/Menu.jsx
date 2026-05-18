import {Link, NavLink} from 'react-router'

function Menu() {
  return (
    <>
      <nav className="max-h-screen bg-gray-300 border-r border-gray-200 p-8">
        <ul>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
            <NavLink to="/">Dashboard</NavLink>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <NavLink to="/notas">Notas</NavLink>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <NavLink to="/faltas">Faltas</NavLink>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
           <NavLink to="/Boletos">Boletos</NavLink>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <NavLink to="/Requerimentos">Requerimentos</NavLink>
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 cursor-pointer mt-6">
            <Link to="/login">Sair</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;


 
