import { Link } from 'react-router-dom'
import imageSlide from './data'
import { useEffect, useState } from 'react'


const Hero = () => {
  const [currentState, setCurrentState] = useState(0)

  useEffect (() => {
    const timer = setTimeout(() => {
      if (currentState ===  imageSlide.length-1)
      {
          setCurrentState(0)  
      }
      else {
        setCurrentState(currentState+1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])
  
  const bgImageStyle = {
    backgroundImage : `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  }

  const goToNext = (currentState) => {
    setCurrentState(currentState)
  }

  return (
    <div className="countiner-style">
        <div style={bgImageStyle}></div>
        <div className="transparent-background"></div>
        <div className="description">
          <div className='hero-text'>
            <h1 style={{ whiteSpace: "pre-wrap" }} >{imageSlide[currentState].title}</h1>
            <p className='leading' style={{ whiteSpace: "pre-wrap" }} >{imageSlide[currentState].body}</p>
          </div>
        </div>
        <div className="carousel-boullt">
          {
            imageSlide.map((imageSlide, currentState) => (
              <span key={currentState} onClick={() => goToNext(currentState)} ></span>))
          }
        </div>
       
      </div>
    // <section className='section hero'>
      
    //   <div className="slide-container">
    //     <div className="slides">
    //       <img className='.active' src={'/img/hero.png'} alt="" />
    //       <img src={'/img/hero.png'} alt="" />
    //       <img src={'/img/cleaning1.png'} alt="" />
    //       <img src={'/img/flowerDelivery.png'} alt="" />
    //       <img src={'/img/gardening1.png'} alt="" />
    //     </div>
    //     <div className="buttons">
    //       <span className="next"> &#10095;</span>
    //       <span className="prev"> &#100954;</span>
    //     </div>
    //   </div>
    //   <img src={'/img/hero.png'} alt="" />
    //   <div className="hero-text">
    //       <h1>Dive <br /> into the world  of <br /> ProHelpers</h1>
    //       <p className='leading'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem animi earum veniam delectus odio? </p>

    //       <Link to={''} className='btn' >Learn More</Link>
    //   </div>
    // </section>
  )
}

export default Hero