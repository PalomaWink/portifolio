// Componentes
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// CSS
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Paloma Wink',
  description: 'Portifólio de Paloma Wink',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="pt-BR">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className="flex flex-col min-h-screen bg-light-mode bg-center bg-cover">
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
