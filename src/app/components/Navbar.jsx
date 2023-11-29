import Link from 'next/link'

export default function Navbar() {
  return(
    <div className='grid grid-cols-3 p-6 '>
      <div className='col-span-1'>
        <p>PW</p>
      </div>
      <div className='col-span-2 flex justify-around'>
        <Link className='hover:text-rose-600 hover:underline' href='/sobre'>Sobre mim</Link>
        <Link className='hover:text-rose-600 hover:underline' href='/tecnologias'>Tecnologias</Link>
        <Link className='hover:text-rose-600 hover:underline' href='/projetos'>Projetos</Link>
        <Link className='hover:text-rose-600 hover:underline' href='/contato'>Contato</Link>
      </div>
    </div>
  )
}