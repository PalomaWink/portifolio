"use client"
import Image from "next/image";
import Link from "next/link";
import emBreve from "../../../public/em_breve.png";
import react from '../../../public/tecnologias/react-logo-svgrepo-com.svg'
import nextjs from '../../../public/tecnologias/next-js-svgrepo-com.svg'
import typescript from '../../../public/tecnologias/typescript-icon-svgrepo-com.svg'
import javascript from '../../../public/tecnologias/javascript-logo-svgrepo-com.svg'
import redux from '../../../public/tecnologias/redux-logo-svgrepo-com.svg'
import tailwind from '../../../public/tecnologias/tailwindcss-icon-svgrepo-com.svg'
import jest from '../../../public/tecnologias/jest-svgrepo-com.svg'
import mocha from '../../../public/tecnologias/mocha-svgrepo-com.svg'
import docker from '../../../public/tecnologias/docker-svgrepo-com.svg'
import mysql from '../../../public/tecnologias/mysql-logo-svgrepo-com.svg'
import express from '../../../public/tecnologias/express-svgrepo-com.svg'
import sequelize from '../../../public/tecnologias/sequelize-svgrepo-com.svg'
import eslint from '../../../public/tecnologias/eslint-svgrepo-com.svg'
import testingLibrary from '../../../public/tecnologias/testing-library-seeklogo.com.svg'
import jwt from '../../../public/tecnologias/icons8-jwt-480.svg'
import chai from '../../../public/tecnologias/chai-seeklogo.com.svg'
import nodejs from '../../../public/tecnologias/icons8-node-js.svg'
import sinon from '../../../public/tecnologias/sinonJS.png'
import { TfiGithub } from "react-icons/tfi"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Projetos() {

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
    <div id="projetos" className="min-h-screen mt-20">
      <h1 className="font-playfair titles text-center text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800">
        &lt;&nbsp;
        Projetos
        &frasl;&nbsp;&gt;
      </h1>
      <ul className="flex justify-around flex-wrap max-w-full max-h-full">
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-1 mt-5">
              <p>TrybeTunes</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida para ouvir e curtir suas musicas favoritas, utilizando a api do ITunes</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/Trybetunes" target="_blank">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>Frontend Online Store</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida utilizando a api do Mercado Livre</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/FrontEnd-Online-Store" target="_blank">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>TrybeWallet</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida utilizando Redux</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={redux} alt="Redux" className="w-4"/>
                <span>Redux</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={testingLibrary} alt="RTL" className="w-4"/>
                <span>Testing Library</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/TrybeWallet" target="_blank">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>React Testing Library</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Testes criados para uma Pokedex</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={testingLibrary} alt="React Testing Library" className="w-4"/>
                <span>Testing Library</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/React-Testing-Library">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>Star Wars Planets Search</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida com intuito de trabalhar com multiplos filtros, estados e criando custom hooks, utilizando ContextAPI</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={testingLibrary} alt="React Testing Library" className="w-4"/>
                <span>Testing Library</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/StarWars-Planets-Search">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>App de Receitas</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida em grupo consumindo multiplas APIs</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pl-4 pr-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={testingLibrary} alt="React Testing Library" className="w-4"/>
                <span>Testing Library</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/Recipes-App">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li 
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>Trivia</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Aplicação desenvolvida em grupo como se fosse um jogo do milhão</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pl-4 pr-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={react} alt="React" className="w-4"/>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={tailwind} alt="Tailwind Css" className="w-4"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={testingLibrary} alt="React Testing Library" className="w-4"/>
                <span>RTL</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={eslint} alt="Eslint" className="w-4"/>
                <span>Eslint</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/Trivia" target="_blank">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
        <li
          className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center items-center space-y-2 mt-5">
              <p>Store Manager</p>
              <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
                <p>Em desenvolvimento</p>
              </div>
              <p>Trabalhando com arquitetura de software, essa aplicação foi feita utilizando MSC (Model, Service, Controler)</p>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pl-4 pr-4">
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={docker} alt="Docker" className="w-4"/>
                <span>Docker</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={sequelize} alt="Sequelize" className="w-4"/>
                <span>Sequelize</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={javascript} alt="JavaScript" className="w-4"/>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={express} alt="Express" className="w-4"/>
                <span>Express</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={mocha} alt="Mocha" className="w-4"/>
                <span>Mocha</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={chai} alt="Chai" className="w-4"/>
                <span>Chai</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={sinon} alt="Sinon" className="w-4"/>
                <span>Sinon</span>
              </div>
              <div className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
                <Image src={nodejs} alt="Node.JS" className="w-4"/>
                <span>Node.JS</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link href="https://github.com/PalomaWink/Store-Manager" target="_blank">
                <TfiGithub size={40} />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}