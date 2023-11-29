import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import ButtonGitHub from "./botoes/ButtonGitHub";
import ButtonLinkedin from "./botoes/ButtonLinkedin";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-secundary text-white p-4 z-10">
      <div className="container mx-auto text-center">
        <p className="font-semibold">Informações de contato</p>
        <p>Email: paloma.wink@hotmail.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href='https://www.linkedin.com/in/paloma-wink/' target="_blank">
            <ButtonLinkedin />
          </Link>
          <Link href='https://github.com/PalomaWink' target="_blank">
            <ButtonGitHub />
          </Link>
        </div>
        <p className="text-sm mt-4"> &copy; 2023 feito com ❤️ por Paloma Wink </p>
      </div>
    </footer>
  )
}