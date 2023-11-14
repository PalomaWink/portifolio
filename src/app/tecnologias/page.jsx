import Link from "next/link";
import Image from "next/image";
import react from '../../../public/tecnologias/react-logo-svgrepo-com.svg'
import nextjs from '../../../public/tecnologias/next-js-svgrepo-com.svg'
import typescript from '../../../public/tecnologias/typescript-icon-svgrepo-com.svg'
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

export default function Tecnologias() {
  return (
    <div>
      <div>
        <h1>Tecnologias</h1>
        <Image src={react} width={100} alt="Logo React"/>
        <Image src={nextjs} width={100} alt="Logo Next.JS"/>
        <Image src={typescript} width={100} alt="Logo TypeScript"/>
        <Image src={redux} width={100} alt="Logo Redux"/>
        <Image src={tailwind} width={100} alt="Logo Tailwind CSS"/>
        <Image src={jest} width={100} alt="Logo Jest"/>
        <Image src={mocha} width={100} alt="Logo Mocha"/>
        <Image src={docker} width={100} alt="Logo Docker"/>
        <Image src={mysql} width={100} alt="Logo MySQL"/>
        <Image src={express} width={100} alt="Logo Express.JS"/>
        <Image src={sequelize} width={100} alt="Logo Sequelize"/>
        <Image src={eslint} width={100} alt="Logo ESLint"/>
        <Image src={testingLibrary} width={100} alt="Logo ESLint"/>
        <Image src={jwt} width={100} alt="Logo JWT"/>
        <Image src={chai} width={100} alt="Logo Chai"/>
        <Image src={nodejs} width={100} alt="Logo Chai"/>

        <p>CSS Modules</p>
        <p>Sinon</p>
        <p>Bcryp</p>
      </div>
      <Link href="/">Voltar para a Home</Link>
    </div>
  );
}