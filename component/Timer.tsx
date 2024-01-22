import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Countdown: React.FC = () => {
    const eventDate = new Date('2024-03-06T00:00:00Z'); // Set your event date and time here
    const [timeRemaining, setTimeRemaining] = useState<number>(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();
        return Math.max(Math.floor(difference / 1000), 0); // Ensure it's non-negative
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        localStorage.setItem('eventDate', eventDate.toISOString());
    }, [eventDate]);

    return (
        <div className='lg:m-auto  mx-4 flex rounded-3xl items-center justify-center '>
            <div className=" bg-[#009933] rounded-[24px] border-2 p-4 md:mx-5  my-10">


                <div className="flex justify-center items-center p-4   ">

                    <div className="xl:text-center   xl:text-[104px] xl:tracking-[-2%] text-center   font-bold lg:text-[72px] lg:leading:[80px]  leading:[64px] text-[60px] xl:leading-[112px]  p-4 text-[#fff]">
                        <span className="">
                            <span className="">Join us on this journey!  </span>

                        </span>

                    </div>
                </div>
                <div className="flex justify-center text-center items-center font-normal  lg:leading-[32px] text-[20px] leading-[20px] xl:leading-[32px] lg:text-center text-[#fff] my-5 ">
                Embark on an enriching exploration into the dynamic world of <br className="md:flex hidden" /> African data with us.
                </div>
                <div className="flex  items-center justify-center md:flex-row flex-col my-5   ">

                    <div className="flex mx-0 md:mx-2 my-2 ">
                        <p className=''>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSes71duyGOKOl5o_n3HIt0KccBy3CzUgP6NoBwIZV0D2JquzQ/viewform">
                            <button className='flex items-center justify-center whitespace-nowrap text-[#333333] bg-white rounded-3xl w-[240px]  px-[16px] py-[8px] text-[16px]'>
                                Register for Hackathon
                                <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                            </button>
                            </Link></p>
                    </div>
                    <div className="flex mx-0 md:mx-2 my-2 ">
                        <p className=''>
                            <button className='flex items-center justify-center whitespace-nowrap text-[#fff] border-2 border-[#fff] rounded-3xl  px-[16px] py-[8px] text-[16px] w-[240px] my-2'>
                            Volunteer at event
                                <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                            </button></p>
                    </div>
                </div>

                <div className='text-[#fff] text-[40px] xl:text-[80px] timer flex items-center justify-center my-5'> {formatTime(timeRemaining)}</div>
            </div>
        </div>
    );
};

const formatTime = (seconds: number): string => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
};

export default Countdown;
