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
import css from "../../../public/tecnologias/css-3-svgrepo-com.svg";
import vercel from '../../../public/tecnologias/vercel-fill-svgrepo-com.svg'
import onlineStore from '../../../public/projetos/online-store.png'

export const projectsData = [
  {
    title: "TrybeTunes",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida para ouvir e curtir suas músicas favoritas, utilizando a API do iTunes",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
    ],
    githubUrl: "https://github.com/PalomaWink/Trybetunes",
    deployUrl: "",
  },
  {
    title: "Frontend Online Store",
    image: onlineStore,
    description: "Aplicação desenvolvida utilizando a api do Mercado Livre",
    technologies: [
      { name: "React", image: react },
      { name: "CSS3", image: css },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Vercel", image: vercel },
    ],
    githubUrl: "https://github.com/PalomaWink/FrontEnd-Online-Store",
    deployUrl: "https://front-end-online-store-alpha.vercel.app",
  },
  {
    title: "TrybeWallet",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida utilizando Redux",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Redux", image: redux },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/TrybeWallet",
    deployUrl: "",
  },
  {
    title: "React Testing Library",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Testes criados para uma Pokedex",
    technologies: [
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/React-Testing-Library",
    deployUrl: "",
  },
  {
    title: "Star Wars Planets Search",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida com intuito de trabalhar com multiplos filtros, estados e criando custom hooks, utilizando ContextAPI",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/StarWars-Planets-Search",
    deployUrl: "",
  },
  {
    title: "App de Receitas",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida em grupo consumindo multiplas APIs",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/Recipes-App",
    deployUrl: "",
  },
  {
    title: "Trivia",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida em grupo como se fosse um jogo do milhão",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/Trivia",
    deployUrl: "",
  },
  {
    title: "Store Manager",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Trabalhando com arquitetura de software, essa aplicação foi feita utilizando MSC (Model, Service, Controler)",
    technologies: [
      { name: "Docker", image: docker },
      { name: "Sequelize", image: sequelize },
      { name: "JavaScript", image: javascript },
      { name: "ExpressJS", image: express },
      { name: "Node.JS", image: nodejs },
      { name: "Mocha", image: mocha },
      { name: "Chai", image: chai },
      { name: "Sinon", image: sinon },
    ],
    githubUrl: "https://github.com/PalomaWink/Store-Manager",
    deployUrl: "",
  },
];