import { HiStar } from "react-icons/hi2";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function OurCustomer() {
    return (
        <section className=" md:w-[1239px] ml-8 my-8 md:h-[466px]  w-[350px] h-[975px]  rounded-3xl">
            <div className=" flex justify-center ">
                {/* Heading and Timer */}
                <div className='md:w-[1440px] w-[500px] h-[103px] md:[88px] flex justify-between  items-center'>
                    <h2 className="ml-8 text-[36px] lg:w-[654px] w-[250px] font-semibold leading-[48px] tracking-[4%]">
                        Our Happy Customerse
                    </h2>

                </div>
                {/* Button */}
                <div className="w-[100px] h-[46px] flex space-x-2 mt-16 ">
                    <IoIosArrowRoundBack className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
                    <IoIosArrowRoundForward className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
                </div>
            </div>


            <div className="md:flex justify-around md:flex-col-3 flex-row">
                <div className="w-[340px] rounded-2xl  h-[200px] bg-[#F2F0F1] p-4 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>Sarah M.</p>
                    <p>I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.</p>
                </div>
                {/* 2 */}
                <div className="w-[340px] rounded-2xl  h-[200px] bg-[#F2F0F1] p-4 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>Alex K.</p>
                    <p>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable catering to a variety of tastes and occasions.</p>
                </div>
                {/*  */}
                <div className="w-[340px] rounded-2xl  h-[200px] bg-[#F2F0F1] p-4 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>James L.</p>
                    <p>As someone who always on the lookout for unique fashion pieces, I &apos; m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
                </div>

            </div>


        </section>
    )
}