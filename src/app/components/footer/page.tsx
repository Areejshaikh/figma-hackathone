import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-full bg-[#F2F0F1] flex justify-center items-center mb-5 mx-auto py-24 md:py-16 px-8 md:px-8">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0 mx-auto">
        
        {/* First div */}
        <div className="w-full md:w-1/5 text-textColor">
          <div className="space-y-6">
            <p className="text-3xl md:text-2xl font-bold tracking-wider">Shop .Co</p>
            <p className="leading-[24px] text-[15px] md:text-base">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
          </div>
          <div className="flex justify-start space-x-6 pb-8 mt-4">
            <RiFacebookLine className="w-6 h-6" />
            <CiTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaLinkedinIn className="w-6 h-6" />
          </div>
        </div>

        {/* Second div */}
        <div className="w-full md:w-1/5 text-textColor space-y-6">
          <h2 className="text-lg md:text-xl font-bold">COMPANY</h2>
          <div className="space-y-2 md:space-y-4">
            <p className="text-sm md:text-base tracking-[2px]">About</p>
            <p className="text-sm md:text-base">Features</p>
            <p className="text-sm md:text-base">Works</p>
            <p className="text-sm md:text-base">Career</p>
          </div>
        </div>

        {/* Third div */}
        <div className="w-full md:w-1/5 text-textColor space-y-7">
          <h2 className="text-lg md:text-xl font-bold">Account</h2>
          <div className="space-y-2 md:space-y-4">
            <p className="text-sm md:text-base">Customer Support</p>
            <p className="text-sm md:text-base">Delivery Details</p>
            <p className="text-sm md:text-base">Terms & Conditions</p>
            <p className="text-sm md:text-base">Privacy Policy</p>
          </div>
        </div>

        {/* Fourth div */}
        <div className="w-full md:w-1/5 text-textColor space-y-6">
          <h2 className="text-lg md:text-xl font-bold">FAQ</h2>
          <div className="space-y-2 md:space-y-4">
            <p className="text-sm md:text-base">Account</p>
            <p className="text-sm md:text-base">Manage Deliveries</p>
            <p className="text-sm md:text-base">Orders</p>
            <p className="text-sm md:text-base">Payments</p>
          </div>
        </div>

        {/* Fifth div */}
        <div className="w-full md:w-1/5 text-textColor space-y-6">
          <h2 className="text-lg md:text-xl font-bold">Resources</h2>
          <p className="text-sm md:text-base font-medium">Free eBooks</p>
          <p className="text-sm md:text-base font-medium">Development Tutorial</p>
          <p className="text-sm md:text-base font-medium">How to - Blog</p>
          <p className="text-sm md:text-base font-medium">Youtube Playlist</p>
        </div>

      </div>
    </div>
  );
}
