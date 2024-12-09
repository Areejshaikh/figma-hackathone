
import Image from 'next/image'
import FrameImage1 from '../../../../public/assets/Frame 1.png'
import FrameImage2 from '../../../../public/assets/Frame 2.png'
import FrameImage3 from '../../../../public/assets/Frame 3.png'
import FrameImage4 from '../../../../public/assets/Frame 4.png'


export default function HappyClient() {
    return (
        <section className="md:w-[1300px] w-[392px] ml-4  md:h-[850px] mb-12  mx-8  bg-[#F2F0F1] h-[975px] md:bg-sl rounded-3xl">
            <h2 className="md:w-[687px] md:h-[58px] w-[246px] pt-12 h-[72px] md:text-[48px] text-[32px] font-extrabold my-24 ml-20 md:ml-64 
  flex justify-center items-center slideIn
  ">
                Browse By Dress Style
            </h2>



            <div className="gap-8 md:grid-cols-2 p-8 justify-center md:space-y-4 space-y-2">
                <div className="md:flex justify-center md:mx-auto md:space-x-4 space-y-2 md:space-y-0">
                    <div className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] rounded-3xl">
                        <Image src={FrameImage1} alt='FrameImage1' className="md:w-[684px] md:h-[289px] w-[310px] h-[190px]" /></div>
                    <div className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] rounded-3xl">
                        <Image src={FrameImage2} alt='FrameImage1' className="md:w-[684px] md:h-[289px] w-[310px] h-[190px]" /></div>
                </div>
                <div className="md:flex justify-center md:mx-auto md:space-x-4 space-y-2 md:space-y-0">
                    <div className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] rounded-3xl">
                        <Image src={FrameImage3} alt='FrameImage1' className="md:w-[684px] md:h-[289px] w-[310px] h-[190px]" /></div>
                    <div className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] rounded-3xl">
                        <Image src={FrameImage4} alt='FrameImage1' className="md:w-[684px] md:h-[289px] w-[310px] h-[190px]" /></div>

                </div>

            </div>
        </section>
    );
}
