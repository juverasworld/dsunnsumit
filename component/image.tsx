import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ImageGallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(1);

  const totalImages = 20; // Update with the total number of images

  const scrollSlider = (direction: "left" | "right") => {
    const step = 100; // adjust as needed
    const currentScroll = sliderRef.current?.scrollLeft || 0;

    if (direction === "left" && currentImage > 1) {
      sliderRef.current?.scrollTo({
        left: currentScroll - step,
        behavior: "smooth",
      });
      setCurrentImage((prev) => prev - 1);
    } else if (direction === "right" && currentImage < totalImages) {
      sliderRef.current?.scrollTo({
        left: currentScroll + step,
        behavior: "smooth",
      });
      setCurrentImage((prev) => prev + 1);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] my-5 font-bold xl:text-[72px] text-[48px]">
        Organizers
      </div>
      <div ref={sliderRef} className="containers overflow-hidden relative">
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/lead.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/ibekwe-kingsley-ba0b0516a">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/nancy.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/nancy-amandi">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/chukwuemeka.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/samuel-okwor-b80740242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/vera.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/obasi-vera-a8b155198/">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/oluwa.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/boniface.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/chidera.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/chisom.svg" />
          <div className="button-container">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/chisom-chibuike/">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/tochukwu.svg" />
          <div className="button-container px-5">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/tobechukwu-okamkpa">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box">
          <Image width="10" height="10" alt="" src="/img/solomon.svg" />
          <div className="button-container px-5">
            <button className="hello-button">
              <Link href="https://www.linkedin.com/in/odelola-solomono-47b816194/">
                <Image
                  src="/img/button.svg"
                  alt=""
                  width="3"
                  height="3"
                  className="w-2 icons"
                />
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
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
        <p className="bg-[#F9F9F9] mx-5">{`${currentImage}/${totalImages}`}</p>
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
  );
};

export default ImageGallery;
