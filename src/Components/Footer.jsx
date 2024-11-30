import {Link} from "react-router-dom"
import Logo from "../assets/FooterLogo.svg";
import Bg from "../assets/footer.svg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="bg-[#78350F] flex items-center justify-center font-[poppins] text-[#FDE68A] py-5 overflow-hidden">
            <div className="relative w-[90vw] lg:w-[55rem] xl:w-[75rem] flex items-center justify-center sm:justify-between flex-wrap sm:flex-row gap-5 sm:gap-0">
                <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-10 md:gap-15 lg:gap-20">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div className="flex items-center justify-center flex-col gap-3">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Products</Link>
                        <Link>Why Us</Link>
                        <Link>Gallery</Link>
                    </div>
                </div>
                <div className="sm:ml-0">
                    <div className="flex items-center justify-start flex-row gap-3 w-full">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:+91 8500609487">+91 8500609487</a>
                    </div>
                    <div className="flex items-center justify-start flex-row gap-3 w-full">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:loyalhoneyorganic@gmail.com" className="text-sm sm:text-base">loyalhoneyorganic@gmail.com</a>
                    </div>
                    <div className="flex items-center justify-start flex-row gap-3 w-full ml-0.5">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>AP, Telengana</p>
                    </div>
                </div>
                <div className="absolute right-0 sm:-right-10 bottom-5 opacity-25 ">
                    <img src={Bg} alt="Logo" className="w-40 sm:w-60"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
