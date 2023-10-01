import logo from "../../images/logo2.jpg";
import solarInstall from "../../images/solar-for-home.jpg";
import completeSystem from "../../images/5kw system.png";
import styles from "./Slide.module.css";
import { useEffect, useRef, useState } from "react";

function Slide() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const images = [
    { img: solarInstall, text: "Installation by qualified technicians!" },
    { img: logo, text: "Let's use free sun power" },
    {
      img: completeSystem,
      text: "Pick up the system that suits you",
    },
  ];

  const resetTimeout = function () {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      index <= 1 ? setIndex(index + 1) : setIndex(0);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className={styles.mainSlide}>
      <div
        style={{ transform: `translate(${-index * 100}%)` }}
        className={styles.slider}
      >
        {images.map((image, i) => {
          return (
            <div key={i} className={styles.slide}>
              <img className={styles.img} src={image.img} />
              <div className={styles.liner}>
                <h2>{image.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.slideDots}>
        {images.map((image, i) => {
          return (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={styles[index === i ? `dot-active` : "dot"]}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slide;
