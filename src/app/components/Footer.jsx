import Link from "next/link";

export default function Footer() {
  return (
    <footer className="top-shadow bg-indigo-400 p-4 z-10">
      <div className="container mx-auto text-center">
        <p className="font-semibold">Informações de contato</p>
        <p>Email: paloma.wink@hotmail.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href='https://www.linkedin.com/in/paloma-wink/' target="_blank" className="hover:text-indigo-300">Linkedin</Link>
          <Link href='https://github.com/PalomaWink' target="_blank" className="hover:text-indigo-300">GitHub</Link>
        </div>
        <p className="text-sm mt-4"> &copy; 2023 feito com ❤️ por Paloma Wink </p>
      </div>
    </footer>
  )
}