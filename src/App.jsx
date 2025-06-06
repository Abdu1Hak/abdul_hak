import Navbar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Tech from './components/Tech.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
function App() {

  return (
    <>
      <div className='min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
          bg-[size:14px_24px] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 z-[-2] h-screen w-screen 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
        
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/>
          <About/>
          <Tech/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
