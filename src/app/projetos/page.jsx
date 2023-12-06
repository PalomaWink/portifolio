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


export default function Projetos() {

  return (
    <div className="min-h-screen">
      <h1>Projetos</h1>
      <ul className="container flex justify-around flex-wrap max-w-full max-h-full">
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div>
            <div className="p-2">
              <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
            </div>
            <div className="text-center flex flex-col justify-center">
              <p>TrybeTunes</p>
              <p>Em desenvolvimento</p>
              <p>Aplicação desenvolvida para ouvir e curtir suas musicas favoritas, utilizando a api do ITunes</p>
              <div className="flex flex-wrap">
                <div>
                  <Image src={ react } alt="Em breve projetos" className="w-5"/>
                  <span>React</span>
                </div>
                <div>
                  <Image src={ tailwind } alt="Em breve projetos" className="w-5"/>
                  <span>Tailwind CSS</span>
                </div>
                <div>
                  <Image src={ javascript } alt="Em breve projetos" className="w-5"/>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div>
              <p>Link para repositorio</p>
            </div>
          </div>
        </li>
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div className="p-2">
            <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Nome do projeto</p>
            <p>Descrição do projeto</p>
            <p>Tecnologias utilizadas</p>
            <p>Link para o projeto</p>
            <p>Link para o repositório</p>
          </div>
        </li>
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div className="p-2">
            <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Nome do projeto</p>
            <p>Descrição do projeto</p>
            <p>Tecnologias utilizadas</p>
            <p>Link para o projeto</p>
            <p>Link para o repositório</p>
          </div>
        </li>
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div className="p-2">
            <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Nome do projeto</p>
            <p>Descrição do projeto</p>
            <p>Tecnologias utilizadas</p>
            <p>Link para o projeto</p>
            <p>Link para o repositório</p>
          </div>
        </li>
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div className="p-2">
            <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Nome do projeto</p>
            <p>Descrição do projeto</p>
            <p>Tecnologias utilizadas</p>
            <p>Link para o projeto</p>
            <p>Link para o repositório</p>
          </div>
        </li>
        <li className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
          <div className="p-2">
            <Image src={ emBreve } width={400} alt="Em breve projetos" height={400}/>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Nome do projeto</p>
            <p>Descrição do projeto</p>
            <p>Tecnologias utilizadas</p>
            <p>Link para o projeto</p>
            <p>Link para o repositório</p>
          </div>
        </li>
      </ul>
    </div>
  )
}