"use client"
import Image from "next/image";
import Link from "next/link";
import home from '../../public/home.webp'
import Sobre from '../app/sobre/page'
import Tecnologias from "./tecnologias/page";
import Projetos from "./projetos/page";
import ButtonBackHome from '../app/components/botoes/ButtonBackHome';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import Contato from "./contato/page";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
      typed.current = new Typed(el.current, {
        strings: ['Desenvolvedora Web Full Stack'],
        typeSpeed: 150,
        startDelay: 1000,
        backSpeed: 150,
        backDelay: 1000,
        loop: true,
      });

    return () => {
      typed.current.destroy();
    };
    
  }, [])
  return (
    <main className="min-h-screen text-black font-playfair">
      <div className="grid grid-cols-2 mt-10">
        <div className="col-span-1 p-10 text-center flex flex-col justify-center">
          <h3 className="text-3xl text-[#219ebc]">Olá! Meu nome é</h3>
          <h1 className="text-7xl font-bold mt-2">Paloma Wink</h1>
          <h2 className="text-5xl font-semibold text-[#023047] mt-1">
            &lt;&nbsp;
            <span ref={el} />
            &frasl;&nbsp;&gt;
          </h2>
          <p className="text-xl leading-relaxed">
            Bem-vindo ao meu mundo digital! Sou uma desenvolvedora full stack apaixonada 
            por criar soluções inovadoras e funcionais. Com uma mente curiosa e uma paixão 
            pelo código, estou sempre em busca de desafios empolgantes que me permitam 
            transformar ideias em realidade.
          </p>
        </div>
        <div className="col-span-1 flex justify-center mt-7">
          <Image src={home} alt="Imagem de uma menina sentada usando notebook" className="w-1/2 h-auto rounded-4xl" priority />
        </div>
      </div>
      <div className='fixed bottom-3 right-3 z-50'>
        <Link href='/'>
          <ButtonBackHome />
        </Link>
      </div>
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
    </main>
  )
}
