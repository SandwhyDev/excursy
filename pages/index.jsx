import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Vector1 from "../assets/Vector1.svg";
import Vector1Rsp from "../assets/Vector1Rsp.svg";
import Vector2Rsp from "../assets/Vector2Rsp.png";
import Vector2 from "../assets/Vector2.svg";
import Vector4 from "../assets/Vector4.svg";
import Vector4Rsp from "../assets/Vector4Rsp.png";
import { IoIosArrowForward } from "react-icons/io";
import Sponsor from "../components/Sponsor";
import CountProject from "../components/CountProject";
import CardInterest from "../components/CardInterest";
import Footer from "../components/Footer";
import Heading from "../components/Head";
import SponsorRsp from "../components/SponsorRsp";
import CardCurrentProjects from "../components/CardCurrentProjects";
export default function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#FAFAFA] font-manrope  ">
      <Heading />
      <Navbar />

      {/* PAGE 1  */}
      <div
        className="w-full h-full flex flex-col gap-[25px] px-4 justify-between mt-5 sm:px-14 sm:flex sm:flex-row  "
        id="home"
      >
        <div className="flex flex-col sm:flex-col sm:gap-6 gap-4 ">
          <h1 className="text-[36px] sm:text-[56px] sm:leading-[130%] font-extrabold text-center sm:text-left leading-[45px] sm:w-[100%]">
            Let{"'"}s take a <br /> tour to
            <span className="text-[#FF6600]">Blockchain</span> Technology
          </h1>
          <p className="text-[14px] text-[#5B5B5B] text-center sm:text-left sm:w-[100%]  sm:text-[18px] ">
            We are highly focused by blockchain technology that will lead
            positively to the future web.
          </p>
          <div className="w-full h-full pl-4 sm:hidden ">
            <Image src={Vector1} className="object-cover" />
          </div>

          <div className="flex gap-4 mt-5  sm:w-[100%]">
            <button className="p-4 w-[50%] bg-[#FF6600] rounded-[10px] text-white text-[16px] font-bold flex items-center justify-center gap-2">
              <p>Get Started</p>
              <span>
                <IoIosArrowForward size={20} />
              </span>
            </button>

            <button className="p-4 w-[50%] bg-white border-[2px] border-[#FF6600] rounded-[10px]  text-[16px] font-bold">
              <p>Learn More</p>
            </button>
          </div>

          <div className="w-full h-full sm:hidden ">
            <Sponsor />
          </div>
        </div>
        <div className="w-[90%] h-full hidden sm:flex ">
          <Image src={Vector1Rsp} />
        </div>
      </div>

      <div className="w-full h-full hidden sm:flex sm:-mt-5   ">
        <SponsorRsp />
      </div>

      {/* PAGE 2 */}
      <div
        className="w-screen h-auto flex flex-col gap-6 p-4 sm:flex-row sm:p-0 sm:h-screen   "
        id="aboutUs"
      >
        <div className="w-[50%] h-auto hidden sm:flex  sm:items-center sm:justify-center  ">
          <Image src={Vector2Rsp} />
        </div>

        <div className=" sm:w-[50%] sm:flex sm:flex-col sm:gap-10  sm:justify-start sm:mt-32  h-auto gap-4 flex flex-col mt-5  sm:pr-20 ">
          <h1 className="text-center font-extrabold text-[24px] sm:text-left sm:text-[52px]">
            About Us
          </h1>
          <p className="text-[12px] text-[#5B5B5B] text-center sm:text-left sm:text-[23px] sm:w-[95%] ">
            We generated names based on a multitude of factors and picked the
            one that resonated with us the most. Our founder first engaged with
            the blockchain in 2013
          </p>

          <div className="w-full  h-full sm:hidden  ">
            <Image src={Vector2Rsp} />
          </div>
          <CountProject />
        </div>
      </div>

      {/* PAGE 3 */}
      <div
        className="w-screen h-screen flex flex-col gap-6  p-4 sm:p-14  sm:items-center"
        id="ourInterests"
      >
        <h1 className="text-center font-extrabold text-[24px] sm:text-[52px] ">
          Our Interests
        </h1>
        <p className="text-[12px] text-[#5B5B5B] text-center sm:text-[20px] sm:w-[60%] sm:leading-[35px]  ">
          It{"'"}s the norm these days to lay out a roadmap that gives
          stakeholders an indication of the direction that the project aspires
          to go. Inspired by Elon Musk{"'"}s 2006 masterplan, these are our
          skeleton ambitions.
        </p>
        <CardInterest />
      </div>
      {/* PAGE 4 */}
      <div
        className="w-screen h-full flex flex-col gap-6  p-4 items-center sm:h-screen sm:flex-row  sm:p-0 "
        id="values"
      >
        <div className="w-[50%] h-auto hidden sm:flex  sm:items-center sm:justify-center   ">
          <Image src={Vector4Rsp} />
        </div>

        <div className="w-full  h-full sm:hidden  ">
          <Image src={Vector4} />
        </div>

        <div className=" sm:w-[50%] sm:flex sm:flex-col sm:gap-10    h-auto gap-4 flex flex-col mt-5 items-center sm:items-start   sm:pr-20 ">
          <h1 className="text-center font-extrabold text-[24px] sm:text-left sm:text-[52px]">
            Our Values
          </h1>
          <p className="text-[12px] text-[#5B5B5B] text-center sm:text-left sm:text-[23px] sm:w-[95%] ">
            anftw is a hallmark. The team members may change, but the quality of
            our project execution will not.An outstanding team can build a
            product in any industry. Don{"'"}t be intimidated by incumbents.
          </p>

          <button className="p-4 w-[50%] bg-[#FF6600] text-white rounded-[10px]  text-[16px] font-bold">
            Read More
          </button>
        </div>
      </div>

      {/* PAGE 5  */}
      <div
        className="w-screen h-full flex flex-col gap-4 sm:h-screen   "
        id="currentProjects"
      >
        <h1 className="text-center font-extrabold text-[24px] text-[#FF6600] sm:text-[52px] sm:text-[#2B2B2B] sm:font-extrabold">
          Current Projects
        </h1>
        <CardCurrentProjects />
      </div>

      <Footer />
    </div>
  );
}
