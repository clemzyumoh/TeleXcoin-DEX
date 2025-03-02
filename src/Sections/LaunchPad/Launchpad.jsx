// export default Launchpad;
import { useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/vote.webp";
import img1 from "../../assets/deeproot-banner.jpg";
import img2 from "../../assets/address.jpeg";
import img3 from "../../assets/telexcoin.jpeg";
import img4 from "../../assets/asset5.jpeg";
import img5 from "../../assets/share.webp";
import img6 from "../../assets/launch.webp";
import img7 from "../../assets/metafabric.webp";
import img8 from "../../assets/rootopia.jpeg";
import img9 from "../../assets/the foundation.jpeg";
import img10 from "../../assets/sax.webp";
import AnimatedText from "../../Components/AnimationText";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import BlurEffect from "../../Components/BlurEffect";

const projects = [
  {
    id: 1,
    name: "DEEPROOTS",
    description: "For Innovative Deworld Apps.",
    image: img1,
    href: "www.deeproots.earth",
  },
  {
    id: 2,
    name: "ADDRESS WALLET",
    description: "9 Layers of Dynamic Finance.",
    image: img2,
    href: "www.addresswallet.com",
  },
  {
    id: 3,
    name: "TELEXCOIN",
    description: "Unlock the Future of Finance.",
    image: img3,
    href: "www.telexcoin.com",
  },
  {
    id: 4,
    name: "DEEP ASSETS",
    description: "Transforming Real-World Assets .",
    image: img4,
    href: "www.deepassets.com",
  },
  {
    id: 5,
    name: "SHARE VALUE",
    description: " A DeWorld Education Hub.",
    image: img5,
    href: "www.sharevalue.com",
  },
  {
    id: 6,
    name: "INNOFI",
    description: "VOTE & FUND DeWorld.",
    image: img,
    href: "www.innofi.com",
  },
  {
    id: 7,
    name: "INNOLAUNCH",
    description: "Empowering DeWorld Projects.",
    image: img6,
    href: "www.innolaunch.com",
  },
  {
    id: 8,
    name: "METAFABRICK",
    description: "Blockchain to Runway Your Style.",
    image: img7,
    href: "www.metafabric.com",
  },
  {
    id: 9,
    name: "ROOTOPIA RACE",
    description: "Step into Rootopia World Race.",
    image: img8,
    href: "www.rootopiarace.com",
  },
  {
    id: 10,
    name: "SAXOPHONE LIVE PODCAST",
    description: "For Blockchain Insights.",
    image: img10,
    href: "www.saxpodcast.com",
  },
];

const Launchpad = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-28  pt-20 dark:bg-transparent">
      {/* <div className="flex justify-between mx-4 mb-12  items-center">
        <AnimatedText
          text="InnoFi"
          animation="fade"
          as="h1"
          className="font-extrabold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 text-5xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
        <div className="flex justify-center items-center lg:hidden ">
          <button
            onClick={() => navigate("/notifications")}
            className="rounded-full p-2 ">
            <IoIosNotifications className="hover:scale-110 md:text-2xl text-xl text-[#f68082]  dark:text-[#97f4f3] cursor-pointer hover:rotate-12" />
          </button>
          <button className="  p-2  rounded-full ">
            <NavLink to="/settings" className="flex items-center">
              <FaCog className="hover:scale-110 md:text-2xl text-xl text-[#f68082]  dark:text-[#97f4f3] hover:rotate-90" />
            </NavLink>
          </button>
        </div>
      </div>
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute top- lg:top-20 right-16 lg:right-24  bg-[#97f4f3] blur-[200px] rounded-full"
        />
      </div>
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute top- lg:top-20 right-16 lg:left-32 hidden lg:flex  bg-[#97f4f3] blur-[200px] rounded-full"
        />
      </div> */}
      <div className=" mx-auto px-6  lg:w-[50vw] lg:h-[80vh] shadow-2xl mb-0 text-center">
        <img
          src={img6}
          alt=""
          className="text-center lg:mx-auto w-full h-full rounded-4xl"
        />
      </div>
      {/* Project Cards */}
      <div className="flex justify-center items-center my-6 flex-col mx-8">
        <AnimatedText
          text=" Empowering DeWorld Projects on the Deep Roots Blockchain."
          animation="fade"
          as="h1"
          className="font-bold   leading-[40px] tracking-wider text-center lg:text-start  text-xl lg:leading-normal bg-gradient-to-l from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 dark:bg-[#E1F0F8] py-8 rounded-3xl mt-10 mb-16 gap-6 md:mx-16 mx-2 px-2 lg:px-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full lg:w-full md:w-[70vw] md:mx-auto h-[550px]  md:h-[600px] lg:h-[600px] bg-cover rounded-4xl  bg-center shadow-lg  overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }} // ✅ Use correct project image
            transition={{ type: "spring", stiffness: 100 }}>
            <div className="z-0 text-lg">
              <BlurEffect
                color="#0085a8"
                className="w-60 h-60 absolute top- lg:top-0 right-2 hidden lg:flex  bg-[#97f4f3] blur-[200px] rounded-full"
              />
            </div>
            {/* Vote Section */}
            <div className="absolute bottom-0 left-0 right-0 flex-col bg-black bg-opacity-60 text-white flex flex-wrap justify-center items-center p-3 rounded-lg">
              <div className="flex justify-between w-full items-center">
                <div className="">
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-[12px]">{project.description}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-bold text-sm text-transparent">
                    {" "}
                    {project.href}
                  </a>
                </div>
                <h3 className="font-bold text-sm   md:text-xl bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent">
                  A & P{" "}
                </h3>
              </div>

              <AnimatedText
                text="VOTE"
                animation="fade"
                as="h1"
                className="font-extrabold lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
              />

              {/* Phase Completion & Vote Buttons */}
              <div className="md:gap-3 gap-2 flex text-white text-[12px] w-full">
                {[
                  { phase: "Phase 1", percent: "100%" },
                  { phase: "Phase 2", percent: "75%" },
                  { phase: "Phase 3", percent: "50%" },
                  { phase: "Phase 4", percent: "20%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between flex-col items-center w-full bg-gray-800 px-2 py-2 rounded-2xl">
                    <span>{item.phase}</span>
                    <span className="text-gray-300">{item.percent}</span>
                    <button className="bg-gradient-to-r from-[#F68082] to-[#97F4F3] text-black font-bold px-2 py-1 rounded">
                      Vote
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}

            {/* <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white flex-wrap justify-between items-center p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-[12px]">{project.description}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-bold text-sm text-transparent">
                    {" "}
                    {project.href}
                  </a>
                </div>
                <h3 className="font-bold text-sm   md:text-xl bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent">
                  A & P{" "}
                </h3>
              </div>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Launchpad;
