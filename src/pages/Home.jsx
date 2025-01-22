import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import velogo from "../assets/velogo.jpg"
const Home = () => {
    const [timer, setTimer] = useState("");

  const timeHandler = () => {
    const eventDate = new Date("February 15, 2025 00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimer("00:00:00:00");
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((timeDiff / (1000 * 60)) % 60);
      const secs = Math.floor((timeDiff / 1000) % 60);

      setTimer(
        `${days.toString().padStart(2, "0")}d ${hrs
          .toString()
          .padStart(2, "0")}h ${mins.toString().padStart(2, "0")}m ${secs
          .toString()
          .padStart(2, "0")}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    timeHandler();
  });
        
   
    
  return (
    <>
    <div className='container mx-auto flex justify-center flex-col items-center'>
        <div className='mt-10'>
            <img className='w-full' src={logo} alt="" />
            <p className='text-gray-600 text-lg pl-6'>Ignite! Innovate! Secure!</p>
        </div>
        <div className='my-20 text-center'>
            <h3 className='font-bold text-2xl mb-3'>Get Ready! Cyber Minds!</h3>
            <p className='text-lg text-gray-600'>Registration for Cybernix'25 Open now</p>
        </div>
        <p className='text-gray-600'>Time is running out</p>
        <div className='text-center mt-10'>
            <h1 className='text-7xl text-blue-900 font-bold'>{timer}</h1>
            <button className='bg-blue-900 px-7 py-2 text-white rounded-md my-6'>Register Soon!</button>
            <p className='text-gray-600'>Don't miss this opportunity to showcase your skills!</p>
        </div>
        <div className='w-full mt-10 bg-blue-900 rounded-md p-10 flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-white'>
                About us
            </h2>
            <div className='w-[60%] bg-white rounded-md p-4 mt-4'>
            <p className='text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto. Tempora unde, iusto fuga cum animi numquam? Doloremque veniam delectus repellendus sit voluptatibus, assumenda voluptates perferendis dolore dignissimos hic explicabo aspernatur atque asperiores ducimus quidem ut consequatur! Atque natus, molestiae tenetur praesentium in voluptates quisquam corrupti quo voluptatum dolor iste?</p>
            </div>

            <h2 className='text-2xl font-bold text-white mt-10'>
            Hosted & Sponsor By
            </h2>
            <div className='w-[60%] bg-white rounded-md p-4 mt-4 flex gap-10 items-center'>
                <div className='w-[200px]'>
                <img className='w-full' src={velogo} alt="" />
               </div>
               <div>
                <h1 className='font-bold text-xl'>Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</h1>
               </div>
            
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Home