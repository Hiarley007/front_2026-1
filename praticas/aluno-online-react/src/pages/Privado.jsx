import {Navigate, Outlet} from 'react-router';
import useAuth from '../hooks/useAuth';

function Privado () {
    const {logado} = useAuth();
    return <>
        {logado ? (<Outlet />) : (<Navigate to="/login" />) }
    </>
}

export default Privado; 