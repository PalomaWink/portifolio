import Link from 'next/link'

export default function Navbar() {
  return(
    <div className='grid grid-cols-3 bg-indigo-800 text-white p-6'>
      <div className='col-span-1'>
        <p>PW</p>
      </div>
      <div className='col-span-2 flex justify-around'>
        <Link className='hover:text-rose-600' href='/sobre'>Sobre mim</Link>
        <Link className='hover:text-rose-600' href='/tecnologias'>Tecnologias</Link>
        <Link className='hover:text-rose-600' href='/projetos'>Projetos</Link>
        <Link className='hover:text-rose-600' href='/contato'>Contato</Link>
      </div>
    </div>
  )
}