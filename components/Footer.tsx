import { socialMedia } from "@/data";
import { BsSendCheck } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full pt-5 md:pt-16 lg:pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 opacity-80">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col mx-auto w-[85%] gap-5 relative items-center">
        <h1 className="heading">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200  text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>
      <form className="flex mt-10 flex-col relative items-center w-full md:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:gap-8">
          <input
            required
            className="text-[15px] block w-full px-4 py-4 text-white bg-black-200 border border-white/[0.2] rounded-lg focus:outline-none"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Your full name"
          />
          <input
            required
            className="text-[15px] block w-full px-4 py-4 text-white bg-black-200 border border-white/[0.2] rounded-lg focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
          <textarea
            required
            className="md:col-span-2 text-[15px]  w-full h-36 block  px-4 py-4 text-white bg-black-200 border border-white/[0.2] rounded-lg focus:outline-none "
            name="message"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border mt-5 md:mt-8 text-base flex items-center gap-2 font-semibold relative border-white/[0.2] text-black dark:text-white py-3 px-5 rounded-lg"
        >
          <BsSendCheck size={16} />
          <span>Send Message</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </form>
      <div className="flex mt-16 md:flex-row-reverse relative gap-4 flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 text-white">
          {socialMedia.map((info) => (
            <a
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 text-white h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* {info.link} */}
              <img
                className="text-white"
                src={info.img}
                alt="icons"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
        <p className="md:text-base my-0 text-xs text-center md:font-normal font-light text-gray-400">
          Copyright © 2025 FaisalHdev.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
