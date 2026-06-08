import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
 


function Layout() {
  const { logado } = useAuth();

  return (
    <>
      {logado ? (
        <>
          <Sidebar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;