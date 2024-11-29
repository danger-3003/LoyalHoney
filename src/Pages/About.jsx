import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Image1 from "../assets/About/Image1.svg";
import Image2 from "../assets/About/Image2.svg";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);

    useEffect(()=>{
        if(location.hash==="#about" && aboutSection.current)
        {
            aboutSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);

    return (
        <div ref={aboutSection} className="font-[poppins] flex items-center justify-center flex-col bg-[#FEF3C7] text-[#525252] pb-12 pt-16 md:pt-24">
            <div className="flex items-center justify-center flex-col">
                <p className="font-[playfair] text-[#78350F] text-3xl md:text-[3rem] font-extrabold mb-5">
                    Our Story
                </p>
                <p className="w-[90vw] md:w-[35rem] lg:w-[40rem] text-sm sm:text-base text-center">
                    Loyal Organic Honey is the culmination of generations of
                    beekeeping tradition, dedicated to bringing you the purest,
                    most natural honey possible. Our journey began in the serene
                    meadows of our family farm, where we learned the art of
                    beekeeping and the importance of organic practices.
                </p>
            </div>
            <div className="flex items-start justify-center flex-wrap gap-5 mt-10">
                <div className="w-[80vw] sm:w-[19rem] md:w-[23rem] lg:w-[28rem] h-max flex items-center justify-center flex-col">
                    <img src={Image1} alt="Image1" className="w-[90%] rounded-md shadow-md shadow-[#00000034]" />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Sustainable Practices
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        We are committed to sustainability, ensuring our bees
                        and the environment are treated with the utmost care and
                        respect. Our honey is harvested using eco-friendly
                        methods that support the health of the bee population
                        and the ecosystem.
                    </p>
                </div>
                <div className="w-[80vw] sm:w-[19rem] md:w-[23rem] lg:w-[28rem] h-max flex items-center justify-center flex-col">
                    <img src={Image2} alt="Image2" className="w-[90%] rounded-md shadow-md shadow-[#00000034]" />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Pure & Unprocessed
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        Our honey is as nature intended – pure, unprocessed, and
                        full of the natural goodness that only organic honey can
                        provide. We do not use any additives or heat treatments,
                        preserving all the enzymes, vitamins, and minerals that
                        make honey so beneficial.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
