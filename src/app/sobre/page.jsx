"use client"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import minhaFoto from '../../../public/foto_editada.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sobre() {
  /* const el = useRef(null);
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
    
  }, []) */
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])


  return (
    <>
      <Head>
        <title>Sobre Mim - Paloma Wink</title>
        <meta name="description" content="Página sobre mim do portfólio de Paloma Wink. Saiba mais sobre minha trajetória como desenvolvedora full-stack." />
        <meta name="keywords" content="desenvolvedora, full-stack, tecnologia, projetos" />
      </Head>
      <section className="container flex mx-auto p-6 min-h-screen font-playfair">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-400">
          &lt;&nbsp;
          Sobre mim
          &frasl;&nbsp;&gt;
          </h1>
          <div className="order-2 md:order-1">
            <p className="text-lg text-black mt-2">Sou Bióloga formada com uma paixão pela tecnologia que me levou a iniciar uma transição de carreira no início de 2022. Minha jornada começou quando me questionei sobre a profissão que melhor se encaixaria no meu perfil. Sou uma entusiasta do aprendizado, sempre disposta a me desafiar e a adquirir novos conhecimentos.</p>
            <p className="text-lg text-black mt-2">Iniciei meus estudos na Trybe em janeiro de 2023, onde mergulhei em um treinamento abrangente que abordou uma ampla gama de tecnologias, onde tive a oportunidade de desenvolver varios projetos, individuais e em grupo.</p>
            <p className="text-lg text-black mt-2">Estou muito feliz para continuar minha evolução como desenvolvedora full-stack, trazendo minha paixão pela aprendizagem, resolução de problemas e dedicação para contribuir efetivamente em projetos desafiadores. Vamos construir o futuro da tecnologia juntos!</p>
            <Link href="/">
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}