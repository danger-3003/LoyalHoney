import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../assets/Products/Image1.svg";
import Image2 from "../assets/Products/Image2.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products() {
    const location = useLocation();
    const productSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#products" && productSection.current) {
            productSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div
            ref={productSection}
            className="font-[poppins] flex items-center justify-center flex-col bg-[#FFFBEB] text-[#525252] pb-12 pt-16 md:pt-24"
        >
            <div className="flex items-center justify-center flex-col">
                <p className="font-[playfair] text-[#78350F] text-3xl md:text-[3rem] font-extrabold mb-5">
                    Our Products
                </p>
                <p className="w-[90vw] md:w-[35rem] lg:w-[40rem] text-sm sm:text-base text-center">
                    Explore our range of organic honey products, each crafted
                    with care to bring you the finest taste and the highest
                    quality. From the rich flavors of our wildflower honey to
                    the delicate sweetness of our acacia honey, there's a jar
                    for every palate.
                </p>
            </div>
            <div className="flex items-start justify-center flex-wrap gap-5 mt-10">
                <div className="w-[80vw] sm:w-[19rem] md:w-[23rem] lg:w-[28rem] h-max flex items-center justify-center flex-col">
                    <img src={Image1} alt="Image1" className="w-[90%] rounded-md shadow-md shadow-[#00000034]" />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Organic Honey
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        Sourced from a variety of wildflowers, this honey is as
                        diverse as the fields it comes from. Rich and
                        full-bodied, with a robust floral taste.
                    </p>
                </div>
                <div className="w-[80vw] sm:w-[19rem] md:w-[23rem] lg:w-[28rem] h-max flex items-center justify-center flex-col">
                    <img src={Image2} alt="Image2" className="w-[90%] rounded-md shadow-md shadow-[#00000034]" />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Organic Honey
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        Light and golden, with a gentle, floral taste. Acacia
                        honey is perfect for sweetening without overpowering
                        other flavors.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <Link className="text-white text-base group bg-[#F59E0B] shadow-md shadow-[#00000034] hover:bg-transparent border-2 border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-300 rounded-md px-4 py-1">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white group-hover:text-[#F59E0B] transition-all duration-300 mr-2"/>
                    View More
                </Link>
            </div>
        </div>
    );
}

export default Products;
