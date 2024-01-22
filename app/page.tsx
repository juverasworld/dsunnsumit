"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageSlider from '@/component/imageSlider';
import Footer from '@/component/Footer';
import Timer from '@/component/Timer';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const imageUrls = ['/img/sophia.svg', 'img/godson.svg', 'img/sophia.svg', '/img/godson.svg', 'img/sophia.svg',]; // Replace with your image URLs

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main className=" font-sf-pro-display">
      <nav className="bg-white p-4 border-[3px] border-[#F6F6F6]">
        <div className="container mx-auto flex justify-between  items-center">
          <Link href="/" className="text-[#808080]  font-500  font-500  font-500 text-lg font-bold">
            <Image src="/img/logo.svg" alt="img" width="100" height="100" />
          </Link>
          <div className="hidden md:flex xl:hidden">
            <p>
              <Link href="https://lu.ma/kif9q0to">

                <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
                  Register as an attendee
                  <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                </button>
              </Link>
            </p>
          </div>

          <div className="xl:hidden">
            {/* Hamburger icon for small and medium screens */}
            <button className="text-[#808080]  font-500  font-500  font-500" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute bg-white w-full text-center  right-4 p-4  dropdown-container">
                {/* Dropdown menu for small and medium screens */}
                <Link href="#about" className="block dropdown-item">
                  About event
                </Link>
                <Link href="#speakers" className="block dropdown-item">
                  Speakers
                </Link>
                <Link href="#panelist" className="block dropdown-item">
                  Panelist
                </Link>
                <Link href="#partners" className="block dropdown-item">
                  Partners & Sponsors
                </Link>
                <Link href="#organizers" className="block dropdown-item">
                  Organisers
                </Link>

                <div className="my-8 flex flex-col items-center justify-center">

                  <div className="flex my-2">
                    <p className=''>
                      <Link href="https://lu.ma/kif9q0to">
                        <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl w-[240px]  px-[16px] py-[8px] text-[16px]'>
                          Register as an attendee
                          <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="flex my-2 ">
                    <p className=''>
                      <Link href="https://chat.whatsapp.com/KHKuYYipdLO5ZOkP0rK0Sh">

                        <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px] w-[240px] my-2'>
                          Join our community
                          <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Add more links as needed */}
              </div>

            )}
          </div>

          <div className="hidden xl:flex space-x-4 items-center">
            {/* Navbar links for large screens */}

            {/* Add more links as needed */}
            <Link href="#about" className="block text-[#808080]  font-500  font-500  font-500 ">
              About event
            </Link>
            <Link href="#speakers" className="text-[#808080]  font-500  font-500  font-500">
              Speakers
            </Link>
            <Link href="#panelist" className="text-[#808080]  font-500  font-500  font-500">
              Panelist
            </Link>
            <Link href="#partners" className="text-[#808080]  font-500  font-500  font-500">
              Partners & Sponsors
            </Link>
            <Link href="#organizers" className="text-[#808080]  font-500  font-500  font-500">
              Organisers
            </Link>
            <div className="hidden lg:flex ">
              <p className=''>
                <Link href="https://lu.ma/kif9q0to">
                  <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
                    Register as an attendee
                    <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                  </button>
                </Link>
              </p>
            </div>
            <div className="hidden lg:flex ">
              <p className=''>
                <Link href="https://chat.whatsapp.com/KHKuYYipdLO5ZOkP0rK0Sh">
                  <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
                    Join our community
                    <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
                  </button>
                </Link></p>
            </div>
          </div>
        </div>
      </nav>
      <div className="">

        <div className=" lg:mx-10 mx-4">


          <div className="flex justify-center items-center ">
            <div className="xl:text-center  xl:text-[104px] tracking-[-2%] font-bold lg:text-[72px] lg:leading:[80px]  leading:[64px] text-[60px] xl:leading-[112px] ">
              <span className=" text-[#FE0000]">Data Scientists Network </span>
              <span className='text-[#009933] '>UNN Summit</span>
            </div>
          </div>
          <div className="flex justify-center items-center font-normal xl:text-[28px] lg:text-[24px] lg:leading-[40px] text-[20px] leading-[32px] xl:leading-[44px] lg:text-center text-[#808080] my-5 ">
            DSNUNNSummit highlights diverse careers in the African data space, catering to all level of professionals such as Data Analysts, Scientists, Engineers, AI/ML Engineers, Low Code Developers, Students, Administrators, Researchers, and Recruiters. It&apos;s the perfect event for you.
          </div>
        </div>
      </div>
      <div className="flex lg:mx-10 mx-0 my-16 items-center justify-evenly space-2  md:flex-row flex-col bg-[#F9F9F9] py-2 rounded-[24px] xl:rounded-[1000px]">
        <div className="flex my-2 lg:flex-row  flex-row-reverse  items-center text-[20px] leading-[23.87px] text-right tracking[2%]">
          <div className="mx-3 flex md:flex-col flex-row">

            <p className="text-[#333333]">Saturday 12th,</p>
            <p className="">Jan 2024</p>
          </div>
          <p className="">
            <Image src="/img/date.svg" width="10" height="10" alt="clock" className='w-auto' />
          </p>
        </div>
        <div className="flex  items-center lg:flex-row flex-col  ">

          <div className="flex mx-2 my-2">
            <p className=''>
              <Link href="https://lu.ma/kif9q0to">
                <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl  px-[16px] py-[8px] text-[24px]'>
                  Register as an attendee
                  <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                </button>
              </Link>
            </p>
          </div>
          <div className="flex mx-2 my-2 ">
            <p className=''>
              <Link href="">
                <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[42px] py-[8px] text-[24px]  my-2'>
                  Volunteer at event
                  <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex  flex-row-reverse my-2 items-center text-[20px] leading-[23.87px] text-left tracking[2%]">
          <div className="mx-3 flex md:flex-col flex-row w-fit">
            <p className="text-[#333333] w-fit">Freedom Square</p>
            <p className="text-left w-fit mx-2">UNN</p>
          </div>
          <p className="">
            <Image src="/img/location.svg" width="10" height="10" alt="clock" className='w-auto' />
          </p>

        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center lg:mx-10 mx-4 ">


        <Image src="/img/imgA.svg" alt="people" width="10" height="10" className='lg:w-auto w-full mx-2' />


        <div className="flex flex-col  lg:w-auto w-full m-2">
          <Image src="/img/imgB.svg" alt="people" width="10" height="10" className='xl:m-0 md:m-0 m-2 lg-w-auto w-[100%]' />
          <div className="hidden lg:flex  ">

            <Image src="/img/imgC.svg" alt="people" width="10" height="10" className='lg:w-auto w-fit md:m-2' />


            <Image src="/img/imgD.svg" alt="people" width="10" height="10" className='lg:w-auto w-fit m-2' />
          </div>
          <div className="lg:hidden flex  ">

            <Image src="/img/combined.svg" alt="people" width="10" height="10" className='lg:w-auto w-full m-2' />



          </div>

        </div>


        <Image src="/img/imgE.svg" alt="people" width="10" height="10" className='lg:w-auto w-full m-2' />


      </div>

      <section className="my-16" id="about">
        <div className="flex xl:flex-row flex-col justify-evenly items-center lg:mx-10 mx-4 ">
          <div className="xl:w-[45%] mx-2 w-full">
            <h1 className="text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] font-bold xl:text-[72px] text-[48px] ">
              About Event
            </h1>
            <div className="text-[#808080]">
              <span className="text-[#333333] font-bold">
                DSNUNNSummit 2024 </span> is a comprehensive event spotlighting diverse careers in Africa&apos;s data space. Designed to connect professionals, students, and enthusiasts, it serves as a platform for learning, networking, and collaboration. The summit features a range of activities, with a particular emphasis on the <span className="text-[#333333] font-bold">hackathon</span>  organized by  <span className="text-[#333333] font-bold">Data Scientists Network UNN(DSN)</span>. Participants can expect engaging sessions, hands-on workshops, and networking opportunities, all geared towards fostering community-driven engagement. <span className="text-[#333333] font-bold">DSNUNNSummit</span> is an essential gathering for those looking to explore, learn, and contribute to the dynamic field of data and technology in Africa.
            </div>
            <div className="flex  items-center md:flex-row flex-col my-5 ">

              <div className="flex mx-2 my-2">
                <p className=''>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSes71duyGOKOl5o_n3HIt0KccBy3CzUgP6NoBwIZV0D2JquzQ/viewform">

                    <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl   px-[16px] py-[8px] text-[24px]'>
                      Register for Hackathon
                      <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                    </button>
                  </Link>
                </p>
              </div>
              <div className="flex mx-2 my-2 ">
                <p className=''>
                  <Link href="https://chat.whatsapp.com/KHKuYYipdLO5ZOkP0rK0Sh">
                    <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-[30px]  px-[24px] py-[8px] text-[24px]  my-2'>
                      Join Our community
                      <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <Image src="/img/about.svg" alt="people" width="10" height="10" className='xl:w-auto w-full my-5 ' />
          </div>
          <div className="xl:w-[45%] mx-2 w-full">
            <h2 className="text-[#009933] md:leading-[47.73px] leading-[32.73px]  font-bold md:text-[40px] text-[32px] tracking-[-2%]">
              Schedule & Agenda

            </h2>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>
            <div className=' border-b-[1px] pb-4 my-2 border-[#333333]'>
              {/* <ul className="list-inside">
   <p className="text-pink-500"></p>
   </ul> */}
              <ul className="list-none">
                <li className="relative pl-5 flex font-bold text-[20px] leading-[24px] tracking-[2%] items-center text-[#808080]">
                  <span className="text-[#009933] my-2 font absolute left-0">&#8226;</span>
                  9:00AM-10:00AM
                </li>
              </ul>
              <p className="text-[#333333] my-2 font-bold leading-[32px] text-[28px] tracking-[-2%]">Door opens! - Registration & Check-in</p>
              <p className="text-[#808080] my-2 text-[20px] leading-[24px] ">Attendee arrival and Check-in</p>
            </div>


          </div>
        </div>
      </section>

      <section className="" id="speakers">
        <div className="flex items-center justify-center text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] my-5 font-bold xl:text-[72px] text-[48px]">Speakers</div>

        <div className="marquee-container">
          <div className="marquee inactive-color text-[#009933] leading-[57.28px] text-[48px] tracking-[-2%] text-extrabold font-bold">

            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>



          </div>
        </div>
        <div className="flex mx-0 md:mx-2 my-5 items-center justify-center">
          <p className=''>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5G5d2JznlctzNEefajv5YRfeFn_qqUNPjT6M2-7rkrFe_qA/viewform?pli=1">

            <button className='flex items-center font-bold  justify-center whitespace-nowrap text-[#009933]  border-2 border-[#009933] rounded-3xl w-[243px]  px-[24px] py-[8px] leading-[23.87px] text-[20px] xl:leading-[28px] xl:text-[24px]'>
              Become as Speaker
              <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
            </button>
            </Link>
            </p>
        </div>
      </section>
      <section className="bg-[#F9F9F9] my-5 py-12" id='partners' >
        <div className="flex items-center justify-center text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] my-5 font-bold xl:text-[72px] text-[48px]">    Partners & <br className="md:hidden flex" /> Sponsors</div>

        <div className="my-5">
          <p className="xl:text-[48px] flex items-center justify-center my-3 text-[32px] leading-[38.19px] font-bold xl:leading-[56px]">Partners</p>
          <div className="mx-5">
            <Image src="/img/partnerXL.svg" alt="img" width="100" height="100" className='xl:flex hidden w-auto' />
            <Image src="/img/partnerLg.svg" alt="img" width="100" height="100" className='lg:flex md:hidden hidden w-auto' />
            <Image src="/img/partnerMd.svg" alt="img" width="100" height="100" className=' md:hidden flex w-auto' />

          </div>
        </div>
        {/* <div className="marquee-container my-5">
          <div className="marquee inactive-color text-[#009933] leading-[57.28px] text-[48px] tracking-[-2%] text-extrabold font-bold">

            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>



          </div>
        </div> */}

        <div className="lg:mx-10 mx-4 my-16">


          <div className="flex justify-center items-center ">
            <div className="xl:text-center  xl:text-[48px]  font-bold lg:text-[40px] lg:leading:[47.73px]  leading:[38.19px] text-[32px] xl:leading-[56px] ">
              <span className="">Data Scientists Network UNN 2024  </span>
              <br className="md:flex hidden " />
              <span className=' '>Sponsorship</span>
            </div>
          </div>
          <div className="flex justify-center items-center font-normal  lg:leading-[32px] text-[20px] leading-[20px] xl:leading-[32px] lg:text-center text-[#808080] my-5 ">
            If your organization is interested in sponsoring the DSNUNNSummit event, Kindly got through our Sponsorship deck
          </div>
          <div className="flex  items-center justify-center md:flex-row flex-col  ">

            <div className="flex mx-0 md:mx-2 my-2 ">
              <p className=''>
                <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl   px-[16px] py-[8px] text-[24px]'>
                  Download our Deck
                  <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                </button></p>
            </div>
            <div className="flex mx-0 md:mx-2 my-2 ">
              <p className=''>
                <Link href="">
                  <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[24px]  my-2'>
                    Become a sponsor
                    <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2' />
                  </button>
                </Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="" id="panelist">
        <div className="flex items-center justify-center text-[#3E3F96] xl:leading-[80px] my-3 leading-[52.28px] tracking-[-2%] my-5 font-bold xl:text-[72px] text-[48px]">Panelist</div>

        <div className="marquee-container">
          <div className="marquee inactive-color text-[#009933] leading-[57.28px] text-[48px] tracking-[-2%] text-extrabold font-bold">

            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>
            <p className="my-5">COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!! COMING SOON !!!  COMING SOON !!! COMING SOON !!! COMING SOON !!! </p>



          </div>
        </div>

      </section>
      <section id="organizers" className='my-7'>
        <ImageSlider />

      </section>

      <div className=""> <div className="">


      </div></div>

      <section className="bg-[#F9F9F9] my-10">
        <Timer />
      </section >
      <Footer />
    </main>

  );
};

export default Navbar;
