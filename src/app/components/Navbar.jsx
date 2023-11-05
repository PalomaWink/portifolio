import Link from 'next/link'

export default function Navbar() {
  return(
    <div>
      <div>
        <p>PW</p>
      </div>
      <nav>
        <Link href='/sobre'>Sobre mim</Link>
        <Link href='/tecnologias'>Tecnologias</Link>
        <Link href='/projetos'>Projetos</Link>
        <Link href='/contato'>Contato</Link>
      </nav>
    </div>
  )
}