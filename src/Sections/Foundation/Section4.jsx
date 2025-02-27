//import img from "../../assets/Designer 4.jpeg";
//import banner from "../../assets/Designer 4.jpeg";
import img from "../../assets/Picture3.png";
import img1 from "../../assets/Picture4.png";


const Section4 = () => {
  return (
  
    <div className="bg-transparent hidden my-16 w-full">
      <h1 className="text-3xl text-center mb-16 font-bold md:text-4xl">Road Map</h1>
      <img src={img} alt="" className="dark:hidden" />
      <img src={img1} alt="" className="hidden dark:block" />
    </div>
  );
};

export default Section4;
