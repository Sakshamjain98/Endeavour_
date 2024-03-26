import { useEffect, useState } from "react";
import "./styles.css";

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const items = document.querySelectorAll(".item");
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      scrollTo(nextIndex);
    }, 4500);

    function scrollTo(i) {
      slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
      setActiveIndex(i);
    }

    function animate(i) {
      items.forEach((item, index) => {
        if (index === i) {
          item.classList.add("animation");
        } else {
          item.classList.remove("animation");
        }
      });
    }

    animate(activeIndex);
    return () => clearInterval(interval);
  }, [activeIndex]);
  const colors = [
    "c8e1ec",
    "1a8fbe",
    "043e79",
    "040506",
    "5db2cf",
    "045b95",
    "064d81",
    "2b4c53",
    "7ccce4",
  ];
  const gradient = `linear-gradient(to bottom right, ${colors.join(", ")})`;
  const cardStyle = {
    background: gradient,
    // padding: '20px',
    // borderRadius: '10px',
    // color: '#fff', // Text color for better readability (can be adjusted)
  };
  return (
    <main className=" pb-0" id="speaker">
      {/* <div className="particles-background absolute inset-0 z-0"></div> */}
      <h1
        className="text-center  text-6xl m-2  text-blue-600 font-serif font-bold mt-8"
        style={
          {
            // color: "#5db2cf"
          }
        }
        id="speaker"
      >
        Speakers
      </h1>
      <ul className="slider">
        <li className="item">
          <img
            className="image"
            src="https://source.unsplash.com/IF9TK5Uy-KI"
            alt="Testimonial 1"
          />
          <div className="testimonial font-serif" style={cardStyle}>
            <p>This is the best no-code platform Ive ever seen</p>
            <p>Alyssa Morris</p>
            <p>Product Manager, Intel</p>
          </div>
        </li>

        <li className="item">
          <img
            className="image"
            src="https://source.unsplash.com/C5XyLljkMrY"
            alt="Testimonial 2"
          />
          <div className="testimonial">
            <p>The perfect organizer and team builder</p>
            <p>Randall Howard</p>
            <p>UX Designer, Netflix</p>
          </div>
        </li>
        <li className="item">
          <img
            className="image"
            src="https://source.unsplash.com/IF9TK5Uy-KI"
            alt="Testimonial 1"
          />
          <div className="testimonial">
            <p>This is the best no-code platform Ive ever seen</p>
            <p>Alyssa Morris</p>
            <p>Product Manager, Intel</p>
          </div>
        </li>
        <li className="item">
          <img
            className="image"
            src="https://source.unsplash.com/C5XyLljkMrY"
            alt="Testimonial 2"
          />
          <div className="testimonial">
            <p>The perfect organizer and team builder</p>
            <p>Randall Howard</p>
            <p>UX Designer, Netflix</p>
          </div>
        </li>
        <li className="item">
          <img
            className="image"
            src="https://source.unsplash.com/e12wQLAjQi0"
            alt="Testimonial 3"
          />
          <div className="testimonial">
            <p>Flexible product with near endless possibilities </p>
            <p>Adam Worrell</p>
            <p>Data Analyst, Spotify</p>
          </div>
        </li>
        {/* <li className='item'>
          <div className='testimonial'>
          <img className='image' src='https://source.unsplash.com/e12wQLAjQi0' alt="Testimonial 3" />
            <p>Flexible product with near endless possibilities </p>
            <p>Adam Worrell</p>
            <p>Data Analyst, Spotify</p>
          </div>
        </li> */}
      </ul>
      {/* <nav>
        <button className='btn' data-index='0'></button>
        <button className='btn' data-index='1'></button>
        <button className='btn' data-index='2'></button>
        <button className='btn' data-index='3'></button>
        <button className='btn' data-index='4'></button>
        <button className='btn' data-index='5'></button>
      </nav> */}
    </main>
  );
}

export default TestimonialCarousel;
