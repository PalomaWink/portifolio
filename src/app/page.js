import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <h3>Olá! Meu nome é</h3>
        <h1>Paloma Wink</h1>
        <h2>Desenvolvedora Web Full-stack</h2>
      </div>
      <div>
        <p>
          Bem-vindo ao meu mundo digital! Sou uma desenvolvedora full stack apaixonada 
          por criar soluções inovadoras e funcionais. Com uma mente curiosa e uma paixão 
          pelo código, estou sempre em busca de desafios empolgantes que me permitam 
          transformar ideias em realidade.
        </p>
      </div>
      <Footer />
    </main>
  )
}
