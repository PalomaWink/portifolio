
import Link from 'next/link'
import logo from '../../../public/Logo_Paloma.png'
import Image from 'next/image'

export default function Navbar() {
  return(
    <div className='grid grid-cols-3 p-2 bg-secundary text-white'>
      <div className='col-span-1 flex items-center'>
        <Link href='/'>
          <Image src={logo} className='w-14'/>
        </Link>
      </div>
      <div className='col-span-2 flex justify-around items-center'>
        <Link className='hover:text-tertiary hover:underline' href='/sobre'>Sobre mim</Link>
        <Link className='hover:text-tertiary hover:underline' href='/tecnologias'>Tecnologias</Link>
        <Link className='hover:text-tertiary hover:underline' href='/projetos'>Projetos</Link>
        <Link className='bg-quaternary hover:bg-tertiary text-black rounded-md px-8 py-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-none hover:text-white' href='/contato'>Contato</Link>
      </div>
    </div>
  )
}