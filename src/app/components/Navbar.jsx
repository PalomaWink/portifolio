"use client"
import Link from 'next/link'
import { HiOutlineMail } from "react-icons/hi";
// import ThemeToggleButton from './botoes/Toggle';


export default function Navbar() {

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return(
    <nav className="p-2 text-black shadow-md font-playfair flex justify-around items-center text-lg">
      <Link onClick={(e) => handleScroll(e, 'sobre')} className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='#sobre'>Sobre mim</Link>
      <Link onClick={(e) => handleScroll(e, 'tecnologias')} className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='#tecnologias'>Tecnologias</Link>
      <Link onClick={(e) => handleScroll(e, 'projetos')} className='hover:text-tertiary hover:transition duration-300 hover:px-4 hover:py-2 hover:rounded-md hover:shadow-lg' href='#projetos'>Projetos</Link>
      <Link onClick={(e) => handleScroll(e, 'contato')} href="#contato">
        <div className='px-4 py-2 rounded-md shadow-lg flex items-center bg-rose-400 hover:bg-secundary hover:text-white hover:transition duration-300'>
          <HiOutlineMail className='m-1' /> Contato
        </div>
      </Link>
      {/* <button type='button'>
        <ThemeToggleButton  />
      </button> */}
      
    </nav>
  )
}