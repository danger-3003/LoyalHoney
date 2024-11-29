import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Bg from "../assets/Home/background.svg";
import Product from "../assets/Home/productImage.svg";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    const location = useLocation();
    const homeSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#home" && homeSection.current) {
            homeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            ref={homeSection}
            className="py-10 md:pb-20 pt-24 sm:pt-32 px-5 sm:px-7 md:px-10 flex items-center justify-center flex-col-reverse sm:flex-row bg-[#FFFBEB] gap-3 md:gap-5 lg:gap-10 xl:gap-28 font-[poppins]"
        >
            <div className="sm:w-[22rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem] flex items-center sm:items-start justify-center flex-col">
                <p className="font-[playfair] text-[#78350F] text-center sm:text-left text-4xl sm:text-[3rem] md:text-[3rem] lg:text-[4rem] font-extrabold md:leading-[2.5rem] lg:leading-[4rem] tracking-wider">
                    Pure Organic Honey
                </p>
                <p className="text-center sm:text-left text-[#B45309] my-3 md:my-5 text-base sm:text-lg md:text-xl font-normal sm:font-medium">
                    Discover the unparalleled taste and health benefits of our
                    carefully harvested organic honey.
                </p>
                <div className="flex items-start justify-center gap-5 flex-row text-sm sm:text-base">
                    <Link className="bg-[#F59E0B] border-2 border-[#F59E0B] group rounded-md shadow-md shadow-[#00000034] px-2 sm:px-4 py-1 text-white hover:bg-transparent hover:text-[#F59E0B] transition-all duration-300">
                        <FontAwesomeIcon
                            icon={faEnvira}
                            className="text-white group-hover:text-[#F59E0B] transition-all duration-300 mr-1.5"
                        />
                        Explore
                    </Link>
                    <Link className="border-2 border-[#F59E0B] group rounded-md shadow-md shadow-[#00000034] px-2 sm:px-4 py-1 text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all duration-300">
                        <FontAwesomeIcon
                            icon={faCircleInfo}
                            className="text-[#F59E0B] group-hover:text-white transition-all duration-300 mr-1.5"
                        />
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="w-40 sm:w-56 md:w-64 lg:w-96 relative flex items-center justify-center">
                <img
                    src={Product}
                    alt="Product"
                    className="relative z-[2] w-[80%]"
                />
                <img
                    src={Bg}
                    alt="Background"
                    className="opacity-80 absolute z-[1]"
                />
            </div>
        </div>
    );
}

export default Home;
