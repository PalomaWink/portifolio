import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Informações de contato</p>
        <p>Email: paloma.wink@hotmail.com</p>
        <Link href='https://www.linkedin.com/in/paloma-wink/' target="_blanck">Linkedin</Link>
        <Link href='https://github.com/PalomaWink' target="_blanck">GitHub</Link>
      </div>
      <p> &copy; 2023 feito com ❤️ por Paloma Wink </p>
    </footer>
  )
}