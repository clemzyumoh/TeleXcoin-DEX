// img from "../../assets/sec2.png"
//import Roadmap from "../../Components/Roadmap";
import FoundationRewards from "./Section1";
//import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import AnimatedText from "../../Components/AnimationText";
import { FaMicrophone } from "react-icons/fa";
import Section4 from "./Section4";
import { IoIosPeople } from "react-icons/io";
import { FaSeedling } from "react-icons/fa6";
import { BsShareFill } from "react-icons/bs";
import AnimateItem from "../../Components/AnimationItem";
import banner from "../../assets/pink2.png";
import FoundationBenefits from "./Section2";
import img1 from "../../assets/active.jpg"
//import img2 from "../../assets/active-removebg-preview.png";
import { FaPowerOff } from "react-icons/fa";
const Foundation = () => {
  return (
    <div className=" lg:pb-3 md:pb-40 pb-32 flex w-full pt-20 md:pt-20    flex-col justify-center items-center dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD] ">
      {/* <div className="flex w-full px-2 justify-between mx-4 mb-3   items-center">
        <AnimatedText
          text="FOUNDATION"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal dark:frm-[#9b6afc] from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]  bg-gradient-to-l bg-clip-text font-orbitron text-transparent"
        />
        <AnimatedText
          text="SEEDING"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]   bg-gradient-to-l bg-clip-text font-orbitron text-transparent"
        />
        <AnimatedText
          text="REFERRAL "
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal bg-gradient-to-r from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]  bg-clip-text font-orbitron text-transparent"
        />
        <div className="flex justify-center items-center lg:mt-20 ">
          <FaMicrophone className="text-xl hover:text-[#9b6afc] md:text-2xl hover:rotate-12 hover:scale-105" />
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center  w-full lg:mt-8">
        <div className="w-full flex justify-center bg-black px-6  rounded-4xl items-center ">
          <AnimateItem delay={0.2} direction="left">
            <img
              src={banner}
              alt="Membership"
              className=" rounded-4xl lg:rounded-none lg:h-[80vh] lg:w-[60vw] h-auto"
            />
          </AnimateItem>
        </div>

        {/* <div className="p-6 bg-white rounded-4xl shadow-[10px_10px_15px_#e8ebff,-10px_-10px_15px_#e8ebff]">
          <h3 className="text-xl font-bold">Custom Shadow Card</h3>
          <p className="text-gray-600">
            This card has shadow
          </p>
        </div> */}

        {/* 
        <button className="my-2  dark:text-neutral-900 hover:scale-105 hover:bg-none text-[#b0e6f8] hover:text-black dark:hover:text-[#b0e6f8] dark:hover:shadow-[2px_2px_2px_#b0e6f8,-2px_-2px_2px_#9c61c1] from-[#9C61C1]  cursor-pointer dark:to-[#B0e6f8] to-[#1E1164] hover:shadow-[2px_2px_2px_#1e1164,-2px_-2px_2px_#9c61c1] bg-gradient-to-bl md:px-7 md:py-4 text-center px-5 py-3 font-bold rounded-2xl text-sm md:text-xl md:my-6 border-none ">
          ACTIVATE FOUNDATION SEAT
        </button> */}
      </div>
      <div className="flex-col flex justify-center mt-8 items-center w-full">
        <AnimatedText
          text="ACTIVATE"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5 text-2xl hidden lg:text-4xl leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal dark:frm-[#9b6afc] from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]  bg-gradient-to-l bg-clip-text font-orbitron text-transparent"
        />
        <img
          src={img1}
          alt=""
          className=" rounded-4xl  w-[80vw] lg:w-[70vw] "
        />
        <FaPowerOff className="hidden  text-9xl"/>
     

        <div className=" rounded-4xl bg-[#bfc7f8] dark:bg-gray-800  flex w-[90vw] md:w-[70vw] mt-3 flex-col lg:w-[60vw] justify-center items-center ">
          <img src={img1} alt="" className=" hidden w-[80vw] " />

          <AnimateItem delay={0.2} direction="top">
            <div className="p-6 bg-white my-5 dark:bg-gray-800 flex justify-center items-center gap-3 px-8 z-20 rounded-4xl shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]">
              <div className="flex justify-center items-center p-3 rounded-full shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#a97ffb]">
                <IoIosPeople className="text-3xl " />
              </div>
              <h3 className="text-xl font-bold">FOUNDATION</h3>
            </div>
          </AnimateItem>
          <div className="z-20">
            <AnimateItem delay={0.2} direction="top">
              <div className="p-6 bg-white my-5 dark:bg-gray-800 flex items-center gap-10 px-10  rounded-4xl shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]">
                <div className="flex justify-center items-center p-3 rounded-full shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#a97ffb]">
                  <FaSeedling className="text-3xl " />
                </div>
                <h3 className="text-xl font-bold">SEEDING</h3>
              </div>
            </AnimateItem>
          </div>
          <AnimateItem delay={0.2} direction="top">
            <div className="p-6 bg-white my-5 dark:bg-gray-800 flex items-center gap-10 px-10 rounded-4xl shadow-[2px_2px_5px_rgba(0,0,0,0.2),-1px_-1px_5px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)]">
              <div className="flex justify-center items-center p-3 rounded-full shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#a97ffb]">
                <BsShareFill className="text-3xl " />
              </div>
              <h3 className="text-xl font-bold">REFERRAL</h3>
            </div>
          </AnimateItem>
        </div>
      </div>

      <FoundationRewards />
      <FoundationBenefits />

      <Section4 />

      <Section3 />
    </div>
  );
};

export default Foundation;
