import Image from "next/image"
import Dining from "../../public/dining.png"
import Living from "../../public/living.png" 
import Bedroom from "../../public/bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="-mt-48">
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src={Dining} width={300} alt="Picture of the author" />
                <h6 className="mt-4 mb-4 text-xl">Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src={Living} width={300} alt="Picture of the author" />
            <h6 className="mt-4 mb-4 text-xl">Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src={Bedroom} width={300} alt="Picture of the author" />
            <h6 className="mt-4 mb-4 text-xl">Bedroom</h6>    
            </div>
           </div>
     </div>
        </>
    )
}