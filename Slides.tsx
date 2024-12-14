import Image from "next/image";
import Inner from "../../public/inner.png" 
import Sideinner from "../../public/Sideinner.png" 
export default function Slide() {
  return (
    <div className="slideSection bg-[#FCF8F3]">
      <div className="slideText pt-9">
        <h4 className="font-extrabold text-[2rem]">50+ Beautiful rooms inspiration</h4>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a07c27] transition">
          Explore More
        </button>
      </div>
      <div className="slideImages">
        <Image src={Inner} width={280} height={200} alt="Beautiful Room Inspiration" />
      </div>
      <div className="slideImages mt-3">
        <Image src={Sideinner} width={300} height={200} alt="Additional Room Inspiration" />
      </div>
    </div>
  );
}