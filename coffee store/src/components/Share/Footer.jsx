import navLogo from "../../assets/more/navLogo.png";
import footerImg from "../../assets/more/footerImg.jpg";
import copywriteImg from "../../assets/more/copywriteImg.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    setName("");
    setEmail("");
    setMessage("");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You'r Message send successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div
      className="w-full h-auto overflow-hidden"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-4/5 h-full mx-auto my-10 flex justify-center items-center">
        {/* left side  */}
        <div className="w-1/2 h-[410px]">
          <img src={navLogo} alt="footer logo" className="w-10 h-10" />
          <h1 className="text-xl my-5 font-real text-shadow-black-glow text-[#331A15]">
            Espresso Emporium
          </h1>
          <p className="font-Raleway text-sm">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* social icons */}
          <div className="w-full h-10 my-5 flex justify-start items-center gap-3">
            <FaFacebook className="w-8 h-8 object-cover text-[#331A15]" />
            <FaInstagram className="w-8 h-8 object-cover text-[#331A15]" />
            <FaTwitter className="w-8 h-8 object-cover text-[#331A15]" />
            <FaLinkedin className="w-8 h-8 object-cover text-[#331A15]" />
          </div>

          {/* contact icons */}
          <h1 className="text-xl my-5 font-real text-shadow-black-glow text-[#331A15]">
            Getin Touch
          </h1>
          <div className="w-full my-5 flex flex-col justify-center items-start gap-3">
            <div className="flex items-center gap-5 text-lg">
              <FaPhoneAlt className="w-6 h-6 object-cover text-[#331A15]" />
              <p>+88 01533 333 333</p>
            </div>

            <div className="flex items-center gap-5 text-lg">
              <IoMail className="w-6 h-6 object-cover text-[#331A15]" />
              <p>info@gmail.com</p>
            </div>

            <div className="flex items-center gap-5 text-lg">
              <IoLocationSharp className="w-6 h-6 object-cover text-[#331A15]" />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="w-1/2 h-[410px]">
          <h1 className="ml-10 mt-14 font-real text-[#331A15] text-shadow-black-glow">
            Contact with us
          </h1>
          <div className="ml-10 flex justify-center items-start gap-5 flex-col my-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md"
            />
            <textarea
              rows={5}
              cols={20}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded-lg"
              name="textaria"
              maxLength={100}
            />
          </div>
          <button
            onClick={handleSendMessage}
            className="ml-10 border rounded-xl p-2 cursor-pointer hover:bg-black hover:text-white" 
          >
            Send Message
          </button>
        </div>
      </div>
      <div
        className="w-full h-10 flex justify-center items-center"
        style={{
          backgroundImage: `url(${copywriteImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-real text-xl text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
