
import Link from 'next/link'
import { HiOutlineMail } from "react-icons/hi";
import ThemeToggleButton from './Toggle';

export default function Navbar() {
  return(
    <div className='p-2 text-black shadow-md font-playfair flex justify-around items-center text-lg'>
      <Link className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='/sobre'>Sobre mim</Link>
      <Link className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='/tecnologias'>Tecnologias</Link>
      <Link className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='/projetos'>Projetos</Link>
      <Link className='hover:text-tertiary hover:transition duration-300' href='/contato'>
        <div className='px-4 py-2 rounded-md shadow-lg flex items-center bg-rose-400 hover:bg-secundary hover:text-white hover:transition duration-300'>
          <HiOutlineMail className='m-2' /> Contato
        </div>
      </Link>
      <ThemeToggleButton />
    </div>
  )
}