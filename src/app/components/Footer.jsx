import Link from "next/link";
import ButtonGitHub from "./botoes/ButtonGitHub";
import ButtonLinkedin from "./botoes/ButtonLinkedin";

export default function Footer() {
  return (
    <footer className="font-playfair bottom-0 left-0 w-full p-4 z-10 top-shadow">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-lg mb-2">Informações de contato</p>
        <p className="mb-2">Email: paloma.wink@hotmail.com</p>
        <div className="flex justify-center space-x-4 mt-2 mb-4">
          <Link href='https://www.linkedin.com/in/paloma-wink/' target="_blank">
            <ButtonLinkedin />
          </Link>
          <Link href='https://github.com/PalomaWink' target="_blank">
            <ButtonGitHub />
          </Link>
        </div>
        <p className="text-sm"> &copy; 2023 feito com ❤️ por Paloma Wink </p>
      </div>
    </footer>
  )
}