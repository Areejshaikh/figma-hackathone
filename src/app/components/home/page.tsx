import heroImage from '../../../../public/assets/Rectangle 2.png'
import './style.css'
import Image from "next/image";
import Button from "@/app/button";

function LaedingPage() {
    return (
        <section className=" bg-image py-10 my-2 px-9">
            <div className="max-w-[1170px] md:h-[433px] [h-448px]  flex flex-col items-start mt-8  bg-[#F2F0F1]">
                <div className="lg:relative lg:w-[577px] lg:h-[173px] w-[352px] h-[93px] lg:mb-4 mb-20">
                    <h3 className=" text-black   text-[36px] font-extrabold lg:text-[64px] leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
                </div>
                <p className="mt-5 w-[350px] h-[50px] lg:w-[545px] lg:h-[33px] mb-8 text-[14px] lg:text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <div className="flex justify-between lg:w-80 lg:h-12 ">
                    <Button text="Shop Now" colorType="primary"/>

                </div>
                <Image src={heroImage} alt="Hero Image" className=" mb-44 justify-center  w-[400px] h-[448px] md:hidden"/ >
            </div>
                 </section>
    );
}

export default LaedingPage;