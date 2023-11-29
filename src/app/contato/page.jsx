import Link from "next/link";

export default function Contato() {
  return (
    <div className="min-h-screen">
      <h1>Entre em contato!</h1>
      <Link href="mailto:paloma.wink@hotmail.com" rel="noopener noreferrer" target="_blank">Say Hello</Link>
      <Link href="/">Voltar para a Home</Link>
    </div>
  )
}