import { Canvas } from '@react-three/fiber'
import './App.css'
import Dog from './components/Dog'

function App() {
  return (
    <>
    <main>
      
      {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-left">
            ASTRA
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>
      <div className="canvas-wrapper">
    <Canvas 
    id="canvas"
    style={{
      height:"100vh",
      width:"100vw",
      position:"fixed",
      top:0,
      left:0,
      zIndex:1,
      // backgroundImage:"url(models/background-l.png)",
      // backgroundRepeat:"no-repeat",
      // backgroundSize:"cover"
      }}>
      
        <Dog />
      
    </Canvas>
    </div>
    <section id='section-1'>
      <div className="middle">
        <div className="left">
          <h1>AN<br/> INTERACTIVE <br/>DIGITAL<br/> PERSONA<br/></h1>
          </div>
          <div className='right'>

            
          
        </div>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className='right'></div>
        <p>ASTRA is an interactive digital persona crafted to explore modern frontend experiences through motion, depth, and design.</p>

      </div>
      <div className="first-line"></div>
      <div className="second-line"></div>
    </section>
    <section id='section-2'>
      
        
      
      <div className="titles">

        <div img-title="awake" className='title'>
            
            <h1>The Awakening</h1>
        </div>
        <div className='title' img-title="before-light">
            
            <h1>Before the Light</h1>
        </div>
       <div img-title="echoes" className="title">
            
            <h1>Echoes of Motion</h1>
        </div>
        <div img-title="silence" className="title">
            
            <h1>Where Silence Moves</h1>
        </div>
        <div className="title" img-title="shadow">
           
            <h1>Fragments of Tomorrow</h1>
        </div>
       
        
       
      </div>
    </section>
    <section id='section-3'>
      <div className="top">
        <div className='left'>
          <h3>This space explores how motion,interaction,<br/> and visual depth
come together to shape modern
frontend experiences.</h3>
        </div>
        <div className='right'></div>
      </div>
      
      
    </section>

    <section id="section-4">
      <div className="bottom">
        <div className='left'></div>
        <div className='right'>
          
          <p>This website is built as a focused exploration of layout, hierarchy, and visual balance. Each section is structured to guide attention naturally, allowing content and form to work together without distraction.</p>
          <p>The experience is developed using modern frontend tools such as React, Three.js, and GSAP, combining real-time 3D rendering with smooth scroll-based animations to create a controlled and responsive interface.</p>
        </div>
      </div>
    </section>
    </main>
    </>
  )
}

export default App
