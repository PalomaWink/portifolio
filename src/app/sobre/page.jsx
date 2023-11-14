"use client"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

import minhaFoto from '../../../public/minha_foto.jpg';

export default function Sobre() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Sobre mim...', 'Minha trajetória'],
      typeSpeed: 150,
      startDelay: 1000,
      backSpeed: 150,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [])
  return (
    <> 
      <Head>
        <title>Sobre Mim - Paloma Wink</title>
        <meta name="description" content="Página sobre mim do portfólio de Paloma Wink. Saiba mais sobre minha trajetória como desenvolvedora full-stack." />
        <meta name="keywords" content="desenvolvedora, full-stack, tecnologia, projetos" />
      </Head>
      <div className="grid grid-cols-6 mt-10">
        <div className="font-poppins col-span-3 ml-3 flex flex-col justify-center">
          <h1 className="text-3xl text-center font-bold m-4 tracking-widest text-rose-600">
            &lt;&nbsp;
            <span ref={el} />
            &frasl;&nbsp;&gt;
          </h1>
          <p className="text-lg text-center">Sou Bióloga formada com uma paixão pela tecnologia que me levou a iniciar uma transição de carreira no início de 2022. Minha jornada começou quando me questionei sobre a profissão que melhor se encaixaria no meu perfil. Sou uma entusiasta do aprendizado, sempre disposta a me desafiar e a adquirir novos conhecimentos.</p>
          <p className="text-lg text-center mt-2">Iniciei meus estudos na Trybe em janeiro de 2023, onde mergulhei em um treinamento abrangente que abordou uma ampla gama de tecnologias, onde tive a oportunidade de desenvolver varios projetos, individuais e em grupo.</p>
          <p className="text-lg text-center mt-2">Estou muito feliz para continuar minha evolução como desenvolvedora full-stack, trazendo minha paixão pela aprendizagem, resolução de problemas e dedicação para contribuir efetivamente em projetos desafiadores. Vamos construir o futuro da tecnologia juntos!</p>
          <Link href="/" className="text-rose-500 hover:underline m-4 block text-center">Voltar para a Home</Link>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <Image src={ minhaFoto } alt="Foto de perfil da Paloma Wink" width={ 400 } height={ 400 } className="rounded-lg"/>
        </div>
      </div>
    </>
  )
}