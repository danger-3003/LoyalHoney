import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../assets/Products/Image1.svg";
import Image2 from "../assets/Products/Image2.svg";
import {
    faArrowRight,
    faSeedling,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            className="font-[poppins] flex items-center justify-center flex-col bg-[#FEF3C7] text-[#525252] pb-12 pt-16 md:pt-24"
        >
            <div className="flex items-center justify-center flex-col">
                <p className="font-[playfair] text-[#78350F] text-3xl md:text-[3rem] font-extrabold mb-5">
                    Why Choose Us
                </p>
                <p className="w-[90vw] md:w-[35rem] lg:w-[40rem] text-sm sm:text-base text-center">
                    At Loyal Organic Honey, we're more than just a brand. We're
                    a commitment to purity, sustainability, and the unparalleled
                    taste of nature's golden nectar. Here's why we stand out.
                </p>
            </div>
            <div className="flex items-start justify-center flex-wrap gap-5 mt-10">
                <div className="w-[80vw] sm:w-[19rem] h-max flex items-center justify-center flex-col">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="text-2xl text-[#F59E0B]"
                    />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Pure & Unprocessed
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        Our honey is harvested using eco-friendly methods that
                        support the health of the bee population and the
                        ecosystem.
                    </p>
                </div>
                <div className="w-[80vw] sm:w-[19rem] h-max flex items-center justify-center flex-col">
                    <FontAwesomeIcon
                        icon={faSeedling}
                        className="text-2xl text-[#F59E0B]"
                    />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Sustainably Sourced
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        We are committed to sustainability, ensuring our bees
                        and the environment are treated with the utmost care and
                        respect.
                    </p>
                </div>
                <div className="w-[80vw] sm:w-[19rem] h-max flex items-center justify-center flex-col">
                    <FontAwesomeIcon
                        icon={faUsers}
                        className="text-2xl text-[#F59E0B]"
                    />
                    <p className="text-lg mt-5 mb-3 sm:text-xl font-medium sm:font-semibold text-[#78350f]">
                        Trusted by Many
                    </p>
                    <p className="text-center text-sm sm:mx-5">
                        Our customers trust us for the quality and purity of our
                        honey, making us their top choice for all their honey
                        needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Products;
