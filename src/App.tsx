import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Internships from './components/Internships'
import Portfolio from './components/Portfolio'
import TechnicalSkills from './components/TechnicalSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Internships />
        <Portfolio />
        <TechnicalSkills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
