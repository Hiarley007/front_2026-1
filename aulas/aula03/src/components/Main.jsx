import Card from "./Card";
import Topbar from "./Topbar";


function Main (){
    return (
        <>
            <main className='flex flex-col max-w-screen'>
                  <Topbar />
                  <h2>Bem - vindo ao Portal do Aluno</h2>
                  <Card/>
                </main>
                </>
        
    )
}

export default Main;