"use client"
import Link from "next/link";
import Image from "next/image";
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

export default function Tecnologias() {


  const tecnologias = [
    {src: react, alt: "React"},
    {src: nextjs, alt: "Next.JS"},
    {src: typescript, alt: "TypeScript"},
    {src: javascript, alt: "JavaScript"},
    {src: redux, alt: "Redux"},
    {src: tailwind, alt: "Tailwind CSS"},
    {src: jest, alt: "Jest"},
    {src: mocha, alt: "Mocha"},
    {src: docker, alt: "Docker"},
    {src: mysql, alt: "MySQL"},
    {src: express, alt: "Express.JS"},
    {src: sequelize, alt: "Sequelize"},
    {src: eslint, alt: "ESLint"},
    {src: testingLibrary, alt: "Testing Library"},
    {src: jwt, alt: "JSON Web Token"},
    {src: chai, alt: "Chai"},
    {src: nodejs, alt: "Node.JS"},
    {src: sinon, alt: "Sinon"},
  ]
  
  return (
    <div className="min-h-screen flex flex-col">
        <h1 className="font-poppins text-4xl font-bold text-black my-4 shadow-lg text-center">Tecnologias</h1>
      <div className="grid grid-cols-6 ">
        {
          tecnologias.map((tecnologia, index) => (
            <div key={index} className="border-2 border-tertiary m-3 p-10
              rounded-lg shadow-lg transition duration-500 ease-in-out transform
              hover:-translate-y-1 hover:scale-110">
              <Image className="border-4 border-b-black-600 mx-auto mb-4" src={tecnologia.src} alt={tecnologia.alt} width={100} height={100}/>
              <p className="text-center font-semibold text-lg">{tecnologia.alt}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}