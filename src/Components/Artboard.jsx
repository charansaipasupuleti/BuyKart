import { useState } from 'react';
import final3 from "/src/assets/final3.webp";
import Artboard2 from "/src/assets/Artboard_2.webp";
import Artboard1 from "/src/assets/Artboard_1.webp";

function Artboard() {
  const images = [Artboard2,final3,Artboard1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const onRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-80 flex flex-row overflow-hidden">
      <img className="absolute z-0 w-full" src={images[currentIndex]} alt="Artboard" />
      <button className="absolute z-10 ml-2 mt-35 h-10 text-black hover:text-2xl" onClick={onLeftClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="absolute z-10 ml-300 mt-35 h-10 text-black hover:text-2xl" onClick={onRightClick}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Artboard;