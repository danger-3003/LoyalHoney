import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../assets/Gallery/Image1.svg"
import Image2 from "../assets/Gallery/Image2.svg"
import Image3 from "../assets/Gallery/Image3.svg"
import Image4 from "../assets/Gallery/Image4.svg"
import Image5 from "../assets/Gallery/Image5.svg"
import Image6 from "../assets/Gallery/Image6.svg"

function Products() {
    const location = useLocation();
    const whySection = useRef(null);

    useEffect(() => {
        if (location.hash === "#why" && whySection.current) {
            whySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div
            ref={whySection}
            className="font-[poppins] flex items-center justify-center flex-col bg-[#FFFBEB] text-[#525252] pb-12 pt-16 md:pt-24"
        >
            <div className="flex items-center justify-center flex-col">
                <p className="font-[playfair] text-[#78350F] text-3xl md:text-[3rem] font-extrabold mb-5">
                    Gallery
                </p>
                <p className="w-[80vw] sm:w-min md:w-[35rem] lg:w-[40rem] text-sm sm:text-base text-center">
                    Step into the world of Loyal Organic Honey through our
                    gallery. Experience the beauty of our honey-making process
                    and the natural landscapes that our bees call home.
                </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-3 sm:gap-5 mt-10">
                <div className="flex items-center justify-center flex-col sm:flex-row gap-3 sm:gap-5">
                    <img src={Image1} alt="Image1" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[10rem] md:h-56 lg:h-80"/>
                    <div className="flex items-center justify-center flex-col gap-3 sm:gap-5">
                        <img src={Image2} alt="Image2" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[4.5rem] md:h-[6.5rem] lg:h-[9.5rem]"/>
                        <img src={Image3} alt="Image3" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[4.5rem] md:h-[6.5rem] lg:h-[9.5rem]"/>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col sm:flex-row gap-3 sm:gap-5">
                    <div className="flex items-center justify-center flex-col gap-3 sm:gap-5">
                        <img src={Image4} alt="Image4" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[4.5rem] md:h-[6.5rem] lg:h-[9.5rem]"/>
                        <img src={Image5} alt="Image5" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[4.5rem] md:h-[6.5rem] lg:h-[9.5rem]"/>
                    </div>
                    <img src={Image6} alt="Image6" className="shadow-md shadow-[#00000034] rounded-md w-[80vw] sm:w-min sm:h-[10rem] md:h-56 lg:h-80"/>
                </div>
            </div>
        </div>
    );
}

export default Products;
