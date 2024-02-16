"use client";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"


const validacaoDeContatoSchema = z.object({
  nome: z.string().min(3, 'O campo do nome é obrigatorio').max(255).transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().email("Email inválido").min(10, "O campo do email é obrigatório").max(255).toLowerCase(),
  mensagem: z.string().min(3, 'O campo da mensagem é obrigatorio').max(255),
})
export default function Contato() {
  const { 
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(validacaoDeContatoSchema)
  })

  const [capVal, setCapVal] = useState(null)

  async function onSubmitEmail(data) {
    const templateParams = {
      from_name: data.nome,
      from_email: data.email,
      message: data.mensagem,
    };
  
    try {
      const response = await emailjs.send("service_3nu36wu", "template_pxo1wuc", templateParams, "AqLuZzCqpb48hDAPj");
      console.log('SUCCESS!', response.status, response.text);
      reset();
    } catch (err) {
      console.log('FAILED...', err);
    }
  }

  return (
    <div id="contato" className="max-h-screen flex flex-col items-center justify-center mt-10 mb-10 max-w-full">
      <h1 className="w-full font-playfair titles text-center text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800">
        &lt;&nbsp;
        Entre em contato
        &frasl;&nbsp;&gt;
      </h1>
      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="flex flex-col items-center justify-center w-full h-auto"
      >
        <div className="relative rounded-lg w-1/2 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
          <input 
            placeholder="Nome"
            className="input_contact"
            type="text"
            {...register('nome')}
          />
          {errors.nome && <span className="text-red-600 text-sm">{errors.nome.message}</span>}
        </div>
        <div className="relative rounded-lg w-1/2 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
          <input
            placeholder="E-mail"
            className="input_contact"
            type="email"
            {...register('email')}
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        <div className="relative rounded-lg w-1/2 h-32 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:right-12 after:top-3 after:rounded-full after:blur-lg m-3">
          <textarea 
            placeholder="Mensagem"
            className="input_contact h-32"
            type="text"
            {...register('mensagem')}
          />
          {errors.mensagem && <span className="text-red-600 text-sm">{errors.mensagem.message}</span>}
        </div>
        <div className="ml-6 pl-6 mt-10 flex flex-col items-center">
          <ReCAPTCHA 
          sitekey='6LervXUpAAAAABCIgugyB--Td3ukF6gse31Clziz'
          onChange={val => setCapVal(val)}
          className="mb-4"
          />
          <button className="button" type="submit" disabled={!capVal}>
            Enviar :)
          </button>
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
              cursor: pointer;
              opacity: 0.5;
            }

            .button:hover {
              color: var(--hover-text);
              transform: translate(-0.25rem, -0.25rem);
              background: var(--hover-bg);
              box-shadow: 0.25rem 0.25rem var(--bg);
            }

            .button:active {
              transform: translate(0);
              box-shadow: none;
            }

            .button:disabled {
              cursor: not-allowed;
              opacity: 0.5;
            }

            .button:not(:disabled) {
              opacity: 1;
            }
          `}</style>
        </div>
      </form>
    </div>
  )
}