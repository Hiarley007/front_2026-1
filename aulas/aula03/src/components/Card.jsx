function Card (){
    return (
        <>
        <section className='grid grid-cols-1 md:grid-cols-2 max-h-screen p-7 md:p-10 gap-6'>
        <articule className= 'bg-white border border-5px border-solid border-gray-300 rounded-t-lg md:col-span-1'>
          <h3 className='md:block rounded-t-lg p-3 bg-gray-300'><strong>Mural de Avisos</strong></h3>
          <ul className='space-y-2 p-2'>
            <li className="border-b border-gray-200 py-2" >Inscrições para Projeto de Extensão</li>
            <li className="border-b border-gray-200 py-2" >Eleição para representante de Turma</li>
            <li></li>
          </ul>
        </articule>
        <articule className= 'bg-white border border-5px border-solid border-gray-300 rounded-t-lg'>
          <h3 className='md:block rounded-t-lg p-3 bg-gray-300'><strong>Calendário Acadêmico</strong></h3>
          <ul className='space-y-2 p-2'>
            <li className="border-b border-gray-200 py-2"><strong>23/02</strong> - Início do Período Letivo 2026/1</li>
            <li className="border-b border-gray-200 py-2"><strong>25/04</strong> - Prazo Final para Aplicação da P1</li>
            <li className="border-b border-gray-200 py-2"><strong>23/06</strong> - Prazo Final para Aplicação P2</li>
            <li className="border-b border-gray-200 py-2"><strong>04/07</strong> - Fim do Perído Letivo 2026/1</li>
          </ul>
        </articule>
        <articule className= 'bg-white border border-5px border-solid border-gray-300 rounded-t-lg'>
          <h3 className='md:block rounded-t-lg p-3 bg-gray-300'><strong>Minhas Disciplinas</strong></h3>
          <ul className='space-y-2 p-2'>
            <li className="border-b border-gray-200 py-2">BI e Data Warehouse</li>
            <li className="border-b border-gray-200 py-2">Construçãod e Frontend</li>
            <li className="border-b border-gray-200 py-2">MAnutenção de Software e DevOps</li>
          </ul>
        </articule>

        <articule className= 'bg-white border border-5px border-solid border-gray-300 rounded-t-lg'>
          <h3 className='md:block rounded-t-lg p-3 bg-gray-300'><strong>Minhas Disciplinas</strong></h3>
          <ul className='space-y-2 p-2'>
            <li className="border-b border-gray-200 py-2">BI e Data Warehouse</li>
            <li className="border-b border-gray-200 py-2">Construçãod e Frontend</li>
            <li className="border-b border-gray-200 py-2">Manutenção de Software e DevOps</li>
          </ul>
        </articule>
      </section>
      </>
    )
}

export default Card;