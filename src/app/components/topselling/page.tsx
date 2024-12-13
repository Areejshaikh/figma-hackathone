import Blog1 from "../../../../public/assets/image 32.png";
import Blog2 from "../../../../public/assets/Frame 33.png";
import Blog3 from "../../../../public/assets/Frame 34.png";
import Blog4 from "../../../../public/assets/Frame 35.png";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import Buttons from "@/app/button";
export default function TopSelling() {
    return (
        <div className=" w-[1170px] h-[622px] mr-4">
            {/* Heading */}
            <h2 className="w-[403px] h-[58px] text-[48px] mx-auto ml-0 md:ml-4 my-12 font-bold leading-[48px] traking-[4%]">
               Top selling
            </h2>

            <div className="w-[440px] h-[500px] grid justify-center md:grid-cols-4 grid-cols-2  space-x-4">
                {/* 1st blog */}
               
                 <div>
                 <div className="w-[295px] bg-lineColor rounded-[4px]">
                        <Image src={Blog1} alt={'ProductDtails'} width={150} height={150}
                            className="w-[295px] h-[298px] rounded-3xl" />
                    </div>
                    <div className="w-[295px] h-[27px] my-6">
                        <p className="text-[20px] font-bold">
                        T-SHIRT WITH TAPE DETAILS
                        </p>
                    </div>
                    <div className="w-[150px] ">
                        <div className="flex">
                            <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                            </span>
                            <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold ml-2">
                                (4.5/5)
                            </span>
                        </div>
                        <div className="flex my-4">
                            <span className="w-[55px] h-[32px] text-[24px] font-bold text-textcolor flex ">$120</span>
                        </div>
                    </div>
                </div>




                {/* 2nd blog */}
                <div>
                    <div className="w-[295px] bg-lineColor rounded-[4px]">
                        <Image src={Blog2} alt={'ProductDtails'} width={150} height={150}
                            className="w-[295px] h-[298px]" />
                    </div>
                    <div className="w-[295px] h-[27px] my-6">
                        <p className="text-[20px] font-bold">
                            T-SHIRT WITH TAPE DETAILS
                        </p>
                    </div>
                    <div className="w-[150px] ">
                        <div className="flex">
                            <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                            </span>
                            <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold ml-2">
                                (4.5/5)
                            </span>
                        </div>
                        <div className="flex my-4">
                            <span className="w-[55px] h-[32px] text-[24px] font-bold text-textcolor flex ">$120</span>
                        </div>
                    </div>
                </div>

                {/* 3rd blog */}
                <div  className="hidden md:block">
                    <div className="hidden md:block w-[295px] bg-lineColor rounded-[4px]">
                        <Image src={Blog3} alt={'ProductDtails'} width={150} height={150}
                            className="w-[295px] h-[298px]" />
                    </div>
                    <div className="w-[295px] h-[27px] my-6">
                        <p className="text-[20px] font-bold">
                            T-SHIRT WITH TAPE DETAILS
                        </p>
                    </div>
                    <div className="w-[150px] ">
                        <div className="flex">
                            <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                            </span>
                            <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold ml-2">
                                (4.5/5)
                            </span>
                        </div>
                        <div className="flex my-4">
                            <span className="w-[55px] h-[32px] text-[24px] font-bold text-textcolor flex ">$120</span>
                        </div>
                    </div>
                </div>

                {/* 4th blog */}
                <div  className="hidden md:block">
                    <div className="hidden md:block w-[295px] bg-lineColor rounded-[4px]">
                        <Image src={Blog4} alt={'ProductDtails'} width={150} height={150}
                            className="w-[295px] h-[298px]" />
                    </div>
                    <div className="w-[295px] h-[27px] my-6">
                        <p className="text-[20px] font-bold">
                            T-SHIRT WITH TAPE DETAILS
                        </p>
                    </div>
                    <div className="w-[150px] ">
                        <div className="flex">
                            <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                                <HiStar className="w-[20px] h-[20px]" />
                            </span>
                            <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold ml-2">
                                (4.5/5)
                            </span>
                        </div>
                        <div className="flex my-4">
                            <span className="w-[55px] h-[32px] text-[24px] font-bold text-textcolor flex ">$120</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:ml-[550px] hidden md:block">
                <Buttons text="View All" colorType="primary" />
            </div>


        </div>
    )

}
