import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Babge12 from "../../../../public/assets/Badge.png"
import Babge13 from "../../../../public/assets/Badge (1).png"
import Babge14 from "../../../../public/assets/Badge (2).png"
import Babge15 from "../../../../public/assets/Badge (3).png"
import Babge16 from "../../../../public/assets/Badge (4).png"

export default function Footer() {
  return (
    <footer>
      <div className="md:w-[1270px] w-[392px] ml-4 bg-[#F2F0F1] flex justify-center items-center mb-5 py-24 md:py-16 px-8 md:px-8">
        <div className="w-full max-w-screen-xl flex flex-col justify-center md:flex-row space-y-10 md:space-y-0 mx-auto">

          {/* First div */}
          <div className="w-full md:w-1/5 text-textColor space-y-6 animate__animated animate__fadeIn ">
            <p className="text-3xl md:text-2xl font-bold tracking-wider">Shop .Co</p>
            <p className="leading-[24px] text-[15px] md:text-base">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex justify-start space-x-6 pb-8 mt-4">
              <RiFacebookLine className="w-6 h-6 transition-all hover:text-blue-600" />
              <CiTwitter className="w-6 h-6 transition-all hover:text-blue-400" />
              <FaInstagram className="w-6 h-6 transition-all hover:text-pink-500" />
              <FaLinkedinIn className="w-6 h-6 transition-all hover:text-blue-700" />
            </div>
          </div>
          <div className="grid md:space-x-24 md:grid-cols-4 grid-cols-2 gap-6 md:">
            {/* Second div */}
            <div className="w-full  md:w-[136px] text-textColor space-y-6 sm:ml-0 md:ml-20 animate__animated animate__fadeIn animate__delay-1s">
              <h2 className="text-lg md:text-xl font-bold">COMPANY</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base tracking-[2px]">About</p>
                <p className="text-sm md:text-base">Features</p>
                <p className="text-sm md:text-base">Works</p>
                <p className="text-sm md:text-base">Career</p>
              </div>
            </div>

            {/* Third div */}
            <div className="w-full  md:w-[136px] text-textColor space-y-6 animate__animated animate__fadeIn animate__delay-2s">
              <h2 className="text-lg md:text-xl font-bold">Account</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Customer Support</p>
                <p className="text-sm md:text-base  sm:w-auto md:w-[133px]">Delivery Details</p>
                <p className="text-sm md:text-sm sm:w-auto md:w-[133px]">Terms & Conditions</p>
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Privacy Policy</p>
              </div>
            </div>

            {/* Fourth div */}
            <div className="w-full  md:w-[136px] text-textColor space-y-6 animate__animated animate__fadeIn animate__delay-3s">
              <h2 className="text-lg md:text-xl font-bold">FAQ</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base">Account</p>
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Manage Deliveries</p>
                <p className="text-sm md:text-base">Orders</p>
                <p className="text-sm md:text-base">Payments</p>
              </div>
            </div>

            {/* Fifth div */}
            <div className="w-full md:w-[136px] text-textColor space-y-6 animate__animated animate__fadeIn animate__delay-4s">
              <h2 className="text-lg md:text-xl font-bold">Resources</h2>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">Free eBooks</p>
              <p className="text-sm md:text-sm text-[11px] font-medium sm:w-auto md:w-[133px]">Development Tutorial</p>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">How to - Blog</p>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-1 md:w-[1270px] w-[392px] ml-4  bg-slate-300"></div>

      <div className="bg-gray-100 md:w-[1270px] w-[392px] ml-4">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-base text-center sm:text-left">
            Areej Zaheer © Made By Areej Zaheer

          </p>
          <span className=" flex sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            <Image src={Babge12} alt="Babge1" />
            <Image src={Babge13} alt="Babge1" />
            <Image src={Babge14} alt="Babge1" />
            <Image src={Babge15} alt="Babge1" />
            <Image src={Babge16} alt="Babge1" />
          </span>
        </div>
      </div>
    </footer>

  );
}
