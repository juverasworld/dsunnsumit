import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer: React.FC = () => {
    return (
      <footer className="my-16 border-0">
        <div className="">
          <div className="my-2 mx-10 lg:mx-0 ">
            <Link
              href="/"
              className="text-[#808080]  font-500  font-500  font-500 text-lg font-bold"
            >
              <Image src="/img/logo.svg" alt="img" width="100" height="100" />
            </Link>
            <p className="my-2 ">
              DSNUNNSummit is a comprehensive event
              <br className="" /> spotlighting diverse careers in Africa&apos;s
              data space
            </p>
            <p className="flex my-2 items-center">
              <Image
                src="/img/twitter.svg"
                alt="img"
                width="100"
                height="100"
                className="w-auto mx-3"
              />
              <Image
                src="/img/linkedin.svg"
                alt="img"
                width="100"
                height="100"
                className="w-auto mx-3"
              />
            </p>
          </div>
          <div className="flex xl:flex-row flex-col items-center ">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <Link href="/">About</Link>
                <Link href="/">Speakers</Link>
                <Link href="/">Partners & Sponsors</Link>
              </div>
              <div className="flex flex-col">
                <Link href="/">Panelist</Link>
                <Link href="/">Organizers</Link>
                <Link href="/">Our Blog</Link>
              </div>
            </div>
            <div className="flex ">
            <p className="">

                <button className="flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl w-[240px]  px-[16px] py-[8px] text-[16px]">
                  Join Our Community
                  <Image
                    src="/img/arrow.svg"
                    width="10"
                    height="10"
                    alt=""
                    className="w-auto px-2"
                  />
                </button>
            </p>
           
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
