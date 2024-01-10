"use client";
import Link from "next/link";

export default function Contato() {

  return (
    <div id="contato" className="max-h-screen flex flex-col items-center justify-center mt-10 mb-10 max-w-full">
      <h1 className="w-full font-playfair titles text-center text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800">
        &lt;&nbsp;
        Entre em contato
        &frasl;&nbsp;&gt;
      </h1>
      <div className="relative rounded-lg w-1/2 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
        <input placeholder="Name" className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text"/>
      </div>
      <div className="relative rounded-lg w-1/2 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
        <input placeholder="E-mail" className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text"/>
      </div>
      <div className="relative rounded-lg w-1/2 h-32 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
        <textarea placeholder="Message" className="relative h-32 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text"/>
      </div>
      <div className="ml-6 pl-6 mt-10">
        <button className="button">
          Enviar :)
        <style jsx>{`
          .button {
            --bg: #000;
            --hover-bg: #ff90e8;
            --hover-text: #000;
            color: #fff;
            border: 1px solid var(--bg);
            border-radius: 4px;
            padding: 0.6em 3em;
            background: var(--bg);
            transition: 0.2s;
            max-width: 100%;
          }

          .button:hover {
            color: var(--hover-text);
            transform: translate(-0.25rem,-0.25rem);
            background: var(--hover-bg);
            box-shadow: 0.25rem 0.25rem var(--bg);
          }

          .button:active {
            transform: translate(0);
            box-shadow: none;
          }
        `}</style>
        </button>
      </div>
    </div>
  )
}