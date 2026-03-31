import avatar from '../assets/avatar.svg'

function Topbar (){
    return (
        <>
    <header className='flex flex-row' >
            <h1>Olá, Aluno!</h1>
            <img src={avatar} alt="imagem do avatar" />
          </header>
          </>
    );
}

export default Topbar;