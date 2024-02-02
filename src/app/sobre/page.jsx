"use client"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import minhaFoto from '../../../public/Foto_Perfil_Paloma.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sobre() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, [])


  return (
    <>
      <Head>
        <title>Sobre Mim - Paloma Wink</title>
        <meta name="description" content="Página sobre mim do portfólio de Paloma Wink. Saiba mais sobre minha trajetória como desenvolvedora full-stack." />
        <meta name="keywords" content="desenvolvedora, full-stack, tecnologia, projetos" />
      </Head>
      <section id="sobre" className="container flex mx-auto p-6 min-h-screen font-playfair">
        <div
          className="grid grid-cols-2 md:grid-cols-2 gap-4 items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="order-1 md:order-1 pr-4 border-double border-r-4 border-rosa-pessego">
            <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-400">
            &lt;&nbsp;
            Sobre mim
            &frasl;&nbsp;&gt;
            </h1>
            <div className="text-justify">
              <p className="text-lg text-black mt-2">Sou Bióloga formada, aquarelista por hobbie e com uma paixão pela tecnologia que me levou a iniciar uma transição de carreira no início de 2022. Minha jornada começou quando me questionei sobre a profissão que melhor se encaixaria no meu perfil. Sou uma entusiasta do aprendizado, sempre disposta a me desafiar e a adquirir novos conhecimentos.</p>
              <p className="text-lg text-black mt-2">Iniciei meus estudos na Trybe em janeiro de 2023, onde mergulhei em um treinamento abrangente que abordou uma ampla gama de tecnologias, onde tive a oportunidade de desenvolver varios projetos, individuais e em grupo.</p>
              <p className="text-lg text-black mt-2">Estou muito feliz para continuar minha evolução como desenvolvedora full-stack, trazendo minha paixão pela aprendizagem, resolução de problemas e dedicação para contribuir efetivamente em projetos desafiadores. Vamos construir o futuro da tecnologia juntos!</p>
            </div>
          </div>
          <div className="order-2 md:order-2 ">
            <Image src={minhaFoto} width={900} height={900} alt="Foto da Paloma Wink" />
          </div>
        </div>
      </section>
    </>
  )
}