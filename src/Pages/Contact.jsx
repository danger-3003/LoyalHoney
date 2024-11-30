import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faP } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const location = useLocation();
    const contactSection = useRef(null);
    const [disable, setDisable] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: "",
        Subject: "",
        Body: "",
    });

    useEffect(() => {
        if (location.hash === "#contact" && contactSection.current) {
            contactSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);
        const data = {
            name: details.name,
            email: details.email,
            toMail: "loyalhoneyorganic@gmail.com",
            toName: "Loyal Organic Honey",
            phone: details.number,
            subject: details.Subject, // Include inquiryType in subject
            message: details.Body,
        };
        axios
            .post("https://api.qrdcard.com/api/url/sendmail", data)
            .then((res) => {
                if (res) {
                    setDisable(false);
                    alert("Form Submitted Successfully");
                    setDetails({
                        details,
                        name: "",
                        email: "",
                        number: "",
                        Subject: "",
                        Body: "",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(details);
    };

    return (
        <>
            <div
                ref={contactSection}
                className="font-[poppins] flex items-center justify-center flex-col bg-[#FFFBEB] text-[#525252] pb-12 pt-16 md:pt-24"
            >
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center flex-col">
                        <p className="font-[playfair] text-[#78350F] text-3xl md:text-[3rem] font-extrabold mb-5">
                            Enquiry Form
                        </p>
                        <p className="w-[90vw] md:w-[35rem] lg:w-[40rem] text-sm sm:text-base text-center mb-5">
                            For any wholesale or special product requests,
                            please fill out the form below, and we'll be in
                            touch shortly.
                        </p>
                    </div>
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-[80vw]"
                                        : "w-72"
                                } sm:w-72 md:w-80 my-2`}
                            >
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={details.name}
                                    required
                                    name="name"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            name: e.target.value,
                                        });
                                    }}
                                    className="border-[#FDE68A] border-2 bg-[#FEF3C7] outline-none rounded-md w-full h-10 px-2 py-1 text-[#525252]"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-[80vw]"
                                        : "w-72"
                                } sm:w-72 md:w-80 my-2`}
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={details.email}
                                    required
                                    name="email"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            email: e.target.value,
                                        });
                                    }}
                                    className="border-[#FDE68A] border-2 bg-[#FEF3C7] outline-none rounded-md w-full h-10 px-2 py-1 text-[#525252]"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-[80vw]"
                                        : "w-72"
                                } sm:w-72 md:w-80 my-2`}
                            >
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    value={details.number}
                                    required
                                    name="mobile"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            number: e.target.value,
                                        });
                                    }}
                                    className="border-[#FDE68A] border-2 bg-[#FEF3C7] outline-none rounded-md w-full h-10 px-2 py-1 text-[#525252]"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-[80vw]"
                                        : "w-72"
                                } sm:w-72 md:w-80 my-2`}
                            >
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    value={details.Subject}
                                    name="country"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            Subject: e.target.value,
                                        });
                                    }}
                                    className="border-[#FDE68A] border-2 bg-[#FEF3C7] outline-none rounded-md w-full h-10 px-2 py-1 text-[#525252]"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-[80vw]"
                                        : "w-72"
                                } sm:w-72 md:w-80 my-2`}
                            >
                                <textarea
                                    type="text"
                                    placeholder="Your Message"
                                    name="body"
                                    rows={3}
                                    value={details.Body}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            Body: e.target.value,
                                        });
                                    }}
                                    className="border-[#FDE68A] border-2 bg-[#FEF3C7] outline-none rounded-md w-full px-2 py-1 text-[#525252]"
                                />
                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    type="submit"
                                    disabled={disable}
                                    className="bg-[#F59E0B] hover:bg-[#ffbc49] rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300"
                                >
                                    Send
                                    <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-12">
                <iframe
                    className="w-[90vw] h-40 sm:w-[80vw] sm:h-60 md:h-72 md:w-[90vw] lg:h-80 lg:w-[55rem] xl:w-[75rem]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.005938705973!2d83.18555227436481!3d17.696692583244193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39693a08815c7b%3A0x1cbf2c89d085803b!2sNanddhan%20Steel%20Roofing%20Industries!5e1!3m2!1sen!2sin!4v1732620132589!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="eager"
                ></iframe>
            </div>
        </>
    );
}

export default Contact;
