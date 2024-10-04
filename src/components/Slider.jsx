import "../pages/css/Slider.css";
import imageSlide from "./data";
import BtnSlider from "./BtnSlider";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    if (slideIndex !== imageSlide.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imageSlide.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imageSlide.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {imageSlide.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={imageSlide[index].url} />
            <div className="description">
              <div className="hero-text">
                <h1
                  dangerouslySetInnerHTML={{ __html: imageSlide[index].title }}
                  style={{ whiteSpace: "pre-wrap" }}
                ></h1>
                <p className="leading" style={{ whiteSpace: "pre-wrap" }}>
                  {imageSlide[index].body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: imageSlide.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot dot-active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
