import { useState } from "react";
import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="container relative">
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/lead.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/nancy.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/boniface.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/chukwuemeka.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/chukwuemeka.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
      <div className="box">
        <Image width="10" height="10" alt="" src="/img/chukwuemeka.svg" />
        <div className="button-container">
          <button className="hello-button">Hello World</button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
