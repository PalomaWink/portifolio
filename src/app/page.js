import Image from "next/image";
import home from '../../public/home.png'
import Sobre from '../app/sobre/page'
import Tecnologias from "./tecnologias/page";
import Projetos from "./projetos/page";

export default function Home() {
  return (
    <main className="min-h-screen text-black font-playfair">
      <div className="grid grid-cols-2 mt-10">
        <div className="col-span-1 p-10 text-center flex flex-col justify-center">
          <h3 className="text-lg text-[#219ebc]">Olá! Meu nome é</h3>
          <h1 className="text-4xl font-bold mt-2">Paloma Wink</h1>
          <h2 className="text-3xl font-semibold text-[#023047] mt-1">Desenvolvedora Web Full-stack</h2>
          <p className="text-md leading-relaxed">
            Bem-vindo ao meu mundo digital! Sou uma desenvolvedora full stack apaixonada 
            por criar soluções inovadoras e funcionais. Com uma mente curiosa e uma paixão 
            pelo código, estou sempre em busca de desafios empolgantes que me permitam 
            transformar ideias em realidade.
          </p>
        </div>
        <div className="col-span-1">
          <Image src={home} alt="Imagem de uma menina sentada usando notebook" className="w-full" />
        </div>
      </div>
      <Sobre />
      <Tecnologias />
      <Projetos />
    </main>
  )
}
