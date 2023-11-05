import Image from "next/image";
import Link from "next/link";
import emBreve from "../../../public/em_breve.png";

export default function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>
      <Link href="/">Voltar para a Home</Link>
      <div className="container flex justify-around flex-wrap max-w-full max-h-full">
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
        <div className="conteiner bg-pink-500 w-2/4 m-4 flex max-h-96 max-w-xl rounded-md">
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
        </div>
      </div>
    </div>
  )
}