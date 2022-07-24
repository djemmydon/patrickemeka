import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Why from '../components/Why'


export default function Home() {
  return (
    <div  className=" bg-[#1a1b4b]   ">

      <nav>
        <Navbar/>
     
      </nav>
      <main>
      <Hero/>
      <About/>
      <Why/>
      <Portfolio/>
      </main>
    </div>
  )
}




//#5C0808//