import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import minhaFoto from '../../../public/minha_foto.jpg';

export default function Sobre() {
  return (
    <div>
      <Head>
        <title>Sobre Mim - Paloma Wink</title>
        <meta name="description" content="Página sobre mim do portfólio de Paloma Wink. Saiba mais sobre minha trajetória como desenvolvedora full-stack." />
        <meta name="keywords" content="desenvolvedora, full-stack, tecnologia, projetos" />
      </Head>
      <div className="conteiner mx-auto px-4">
        <div className="relative w-64 h-64 mx-auto">
          <div className="bg-rose-300 absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-2/3 w-40 h-40"></div>
          <div className="bg-purple-300 absolute top-1/4 left-1/4 transform w-40 h-40"></div>
          <Image src={minhaFoto} alt="Foto de perfil da Paloma Wink" width={200} height={200} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded" />
        </div>
        <h1 className="text-2xl font-bold mt-4 font-raleway">Sobre mim</h1>
      <section className="mt-4 font-roboto transform translate-y-10">
        <p className="text-lg">Sou Bióloga formada com uma paixão pela tecnologia que me levou a iniciar uma transição de carreira no início de 2022. Minha jornada começou quando me questionei sobre a profissão que melhor se encaixaria no meu perfil. Sou uma entusiasta do aprendizado, sempre disposta a me desafiar e a adquirir novos conhecimentos.</p>
        <p className="text-lg mt-2">Iniciei meus estudos na Trybe em janeiro de 2023, onde mergulhei em um treinamento abrangente que abordou uma ampla gama de tecnologias, onde tive a oportunidade de desenvolver varios projetos, individuais e em grupo.</p>
        <p className="text-lg mt-2">Estou muito feliz para continuar minha evolução como desenvolvedora full-stack, trazendo minha paixão pela aprendizagem, resolução de problemas e dedicação para contribuir efetivamente em projetos desafiadores. Vamos construir o futuro da tecnologia juntos!</p>
      </section>
      <Link href="/" className="text-rose-500 hover:underline mt-4 block">Voltar para a Home</Link>
      </div>
    </div>
  )
}