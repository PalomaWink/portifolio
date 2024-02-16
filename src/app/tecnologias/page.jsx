"use client"
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
import nest from '../../../public/tecnologias/nestjs-svgrepo-com.svg'
import csharp from '../../../public/tecnologias/csharp-svgrepo-com.svg'
import dotNet from '../../../public/tecnologias/dot-net-svgrepo-com.svg'
import git from '../../../public/tecnologias/git-icon-svgrepo-com.svg'
import gitHub from '../../../public/tecnologias/github-octocat-svgrepo-com.svg'
import postman from '../../../public/tecnologias/postman-icon-svgrepo-com.svg'
import sass from '../../../public/tecnologias/sass-svgrepo-com.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Tecnologias() {

  const firstBlock = [
    {src: react, alt: "React"},
    {src: nextjs, alt: "Next.JS"},
    {src: typescript, alt: "TypeScript"},
    {src: javascript, alt: "JavaScript"},
    {src: redux, alt: "Redux"},
    {src: tailwind, alt: "Tailwind CSS"},
    {src: sass, alt: "SASS"},
  ]
  
  const secondBlock = [
    {src: testingLibrary, alt: "Testing Library"},
    {src: jest, alt: "Jest"},
    {src: mysql, alt: "MySQL"},
    {src: express, alt: "Express.JS"},
    {src: sequelize, alt: "Sequelize"},
    {src: mocha, alt: "Mocha"},
  ]
  
  const thirdBlock = [
    {src: docker, alt: "Docker"},
    {src: jwt, alt: "JSON Web Token"},
    {src: chai, alt: "Chai"},
    {src: nodejs, alt: "Node.JS"},
    {src: sinon, alt: "Sinon"},
    {src: nest, alt: "Nest.JS"},
  ]
  
  const fourthBlock = [
    {src: eslint, alt: "ESLint"},
    {src: csharp, alt: "C#"},
    {src: dotNet, alt: ".NET"},
    {src: git, alt: "Git"},
    {src: gitHub, alt: "GitHub"},
    {src: postman, alt: "Postman"},
  ]

  const settingsTop = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: true,
    cssEase: "linear",
  };

  // Configurações para o segundo slider
  const settingsBottom = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: false,
    cssEase: "linear",
  };

  return (
    <div id="tecnologias" className="h-screen w-screen font-playfair">
      <h1 className="my-4 titles text-center text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800">
        &lt;&nbsp;
        Tecnologias
        &frasl;&nbsp;&gt;
      </h1>
      <div className="">
        <Slider {...settingsTop}>
          {firstBlock.map((tecnologia, index) => (
            <div key={index} className="font-playfair border-2 border-tertiary m-3 p-2 rounded-lg shadow-lg">
              <Image className="mx-auto mb-4" src={tecnologia.src} alt={tecnologia.alt} width={100} height={100}/>
              <p className="text-center font-semibold text-lg">{tecnologia.alt}</p>
            </div>
          ))}
        </Slider>
        <Slider {...settingsBottom}>
          {secondBlock.map((tecnologia, index) => (
            <div key={index} className="border-2 border-tertiary m-3 p-2 rounded-lg shadow-lg ">
              <Image className=" mx-auto mb-4" src={tecnologia.src} alt={tecnologia.alt} width={100} height={100}/>
              <p className="text-center font-semibold text-lg">{tecnologia.alt}</p>
            </div>
          ))}
        </Slider>
        <Slider {...settingsTop}>
          {thirdBlock.map((tecnologia, index) => (
            <div key={index} className="font-playfair border-2 border-tertiary m-3 p-2 rounded-lg shadow-lg">
              <Image className="mx-auto mb-4" src={tecnologia.src} alt={tecnologia.alt} width={100} height={100}/>
              <p className="text-center font-semibold text-lg">{tecnologia.alt}</p>
            </div>
          ))}
        </Slider>
        <Slider {...settingsBottom}>
          {fourthBlock.map((tecnologia, index) => (
            <div key={index} className="font-playfair border-2 border-tertiary m-3 p-2 rounded-lg shadow-lg">
              <Image className="mx-auto mb-4" src={tecnologia.src} alt={tecnologia.alt} width={100} height={100}/>
              <p className="text-center font-semibold text-lg">{tecnologia.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}