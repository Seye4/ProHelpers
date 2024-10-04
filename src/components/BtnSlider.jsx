import leftArrow from '/sliderImgs/caret-left-solid.svg'
import rightArrow from '/sliderImgs/caret-right-solid.svg'
import '../pages/css/Slider.css'

const BtnSlider = ({direction, moveSlide}) => {
    
  return (
    <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'} >
       <img src={direction === 'next' ? rightArrow : leftArrow}  /> 
    </button>
  )
}

export default BtnSlider