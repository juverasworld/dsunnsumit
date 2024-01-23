// import React, { useState } from 'react';
// import Image from 'next/image';
// interface ImageSliderProps {
//   images: string[];
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative border-2 border-pink-500 overflow ">
//       {/* <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%] overflow-x-auto"> */}
//         <div className="flex w-1/4  overflow border-2 border-black">
//         {images.map((image, index) => (
//           <div key={index} className="w-auto">
//             <Image width="10" height="10" src={image} alt={`Slide ${index + 1}`} className="w-full" />
//           </div>
//         ))}
//       </div>
//       {/* <button className="absolute top-1/2 text-white left-2 transform -translate-y-1/2" onClick={goToPrev}>
//         &#9664;
//       </button>
//       <button className="absolute top-1/2 text-white right-2 transform -translate-y-1/2" onClick={goToNext}>
//         &#9654;
//       </button> */}
//     </div>
//   );
// };

// export default ImageSlider;




import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(1);

  const totalImages = 19; // Update with the total number of images

  const scrollSlider = (direction: 'left' | 'right') => {
    const step = 100; // adjust as needed
    const currentScroll = sliderRef.current?.scrollLeft || 0;

    if (direction === 'left' && currentImage > 1) {
      setCurrentImage((prev) => prev - 1);
      sliderRef.current?.scrollTo({
        left: currentScroll - step,
        behavior: 'smooth',
      });
    } else if (direction === 'right' && currentImage < totalImages) {
      setCurrentImage((prev) => prev + 1);
      sliderRef.current?.scrollTo({
        left: currentScroll + step,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="">
      <div className="flex items-center justify-center text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] my-5 font-bold xl:text-[72px] text-[48px]">
        Organizers
      </div>
      <div className="ml-16 my-4">
        <div
          ref={sliderRef}
          className="flex ml-16  pl-10 overflow-x-auto speaker relative"
        >
          <div className="w-"></div>
          <Link href="https://www.google.com" className="w-full mx-3 widther">
            <Image
              width="10"
              height="10"
              src="/img/lead.svg"
              alt="image"
              className="w-full mx-3 "
            />
          </Link>
          <Link href="https://www.google.com" className="w-full mx-3 widther ">

          <Image
            width="10"
            height="10"
            src="/img/nancy.svg"
            alt="image"
            className="w-auto mx-3 "
          />
          </Link>
          <Link href="https://www.google.com" className="w-full mx-3 widther ">
          <Image
            width="10"
            height="10"
            src="/img/chukwuemeka.svg"
            alt="image"
            className="w-auto mx-3 "
          />
          </Link>
          <Link href="https://www.google.com" className="w-full mx-3 widther ">
          <Image
            width="10"
            height="10"
            src="/img/boniface.svg"
            alt="image"
            className="w-auto mx-3 "
          />
          </Link>
          <Link href="https://www.google.com" className="w-full mx-3 widther ">
          <Image
            width="10"
            height="10"
            src="/img/godson.svg"
            alt="image"
            className="w-auto mx-3 "
          />
          </Link>
         
          {/* Add your other Image components here */}
        </div>
        {/* <div className="flex items-center justify-center my-5">
          <div className="flex my-2 ">
            <p className="">
              <button className="flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px] w-[240px] my-2">
                Join a community
                <Image
                  src="/img/green.svg"
                  width="10"
                  height="10"
                  alt=""
                  className="w-auto px-2"
                />
              </button>
            </p>
          </div>
        </div> */}
        <div className="flex items-center flex-row my-5 justify-center">
          <button onClick={() => scrollSlider("left")}>
            <Image
              width="10"
              height="10"
              src="/img/right.svg"
              alt="image"
              className="w-auto  mx-2"
            />
          </button>
          <p className="bg-[#F9F9F9]  mx-5"> 0{currentImage}-15</p>
          <button onClick={() => scrollSlider("right")}>
            <Image
              width="10"
              height="10"
              src="/img/left.svg"
              alt="image"
              className="w-auto  mx-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
