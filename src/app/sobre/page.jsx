"use client"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import minhaFoto from '../../../public/foto_editada.png';

export default function Sobre() {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ['Sobre mim', 'Minha trajetória'],
        typeSpeed: 150,
        startDelay: 1000,
        backSpeed: 150,
        backDelay: 1000,
        loop: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
    
  }, [])


  return (
    <>
      <Head>
        <title>Sobre Mim - Paloma Wink</title>
        <meta name="description" content="Página sobre mim do portfólio de Paloma Wink. Saiba mais sobre minha trajetória como desenvolvedora full-stack." />
        <meta name="keywords" content="desenvolvedora, full-stack, tecnologia, projetos" />
      </Head>
      <section className="container mx-auto p-6 min-h-screen font-raleway">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold text-center md:text-left mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-cyan-400">
            &lt;&nbsp;
            Sobre mim
            &frasl;&nbsp;&gt;
            </h1>
            <p className="text-lg text-black mt-2">Sou Bióloga formada com uma paixão pela tecnologia que me levou a iniciar uma transição de carreira no início de 2022. Minha jornada começou quando me questionei sobre a profissão que melhor se encaixaria no meu perfil. Sou uma entusiasta do aprendizado, sempre disposta a me desafiar e a adquirir novos conhecimentos.</p>
            <p className="text-lg text-black mt-2">Iniciei meus estudos na Trybe em janeiro de 2023, onde mergulhei em um treinamento abrangente que abordou uma ampla gama de tecnologias, onde tive a oportunidade de desenvolver varios projetos, individuais e em grupo.</p>
            <p className="text-lg text-black mt-2">Estou muito feliz para continuar minha evolução como desenvolvedora full-stack, trazendo minha paixão pela aprendizagem, resolução de problemas e dedicação para contribuir efetivamente em projetos desafiadores. Vamos construir o futuro da tecnologia juntos!</p>
            <Link href="/">
            </Link>
          </div>
          <div className="order-1 md:order-2 mb-4 md:mb-0 flex justify-center">
            <Image src={minhaFoto} alt="Foto da Paloma" className="w-80 rounded-3xl"  style={{ clipPath: 'circle(75% at center)' }} />
          </div>
        </div>
      </section>
    </>
  )
}