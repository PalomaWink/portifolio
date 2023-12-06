
import Link from 'next/link'
import { HiOutlineMail } from "react-icons/hi";
import ThemeToggleButton from './Toggle';

export default function Navbar() {
  return(
    <div className='p-2 text-black shadow-md font-playfair flex justify-around items-center text-lg'>
      <Link className='hover:text-tertiary hover:underline transition duration-300' href='/sobre'>Sobre mim</Link>
      <Link className='hover:text-tertiary hover:underline transition duration-300' href='/tecnologias'>Tecnologias</Link>
      <Link className='hover:text-tertiary hover:underline transition duration-300' href='/projetos'>Projetos</Link>
      <Link className='hover:text-tertiary hover:underline transition duration-300' href='/contato'>
        <div className='px-4 py-2 rounded-md shadow-lg flex items-center bg-rose-400 hover:bg-secundary hover:text-white hover:underline transition duration-300'>
          <HiOutlineMail className='m-2' /> Contato
        </div>
      </Link>
      <ThemeToggleButton />
    </div>
  )
}