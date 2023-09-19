import React from "react";
import { Link } from "react-router-dom";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
   <div className="bg-bgProject">
     <div className="container mx-auto">
      <footer className="footer items-center p-4 text-neutral-content py-10">
        <aside className="items-center grid-flow-col">
          <Link href="/" className=" text-3xl font-bold text-white">
            Indrajit
          </Link>
          <p className="text-base pl-4">
            Copyright © 2023 - All right reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to='https://twitter.com/IndrajitChand16' className="text-3xl">
          <FaSquareTwitter/>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100007206587467"  className="text-3xl">
          <FaFacebook/> 
          </Link>
          <Link to='https://linkedin.com/in/indrajit-chandra' className="text-3xl">
            <FaLinkedin/>  
          </Link>
          <Link to='https://github.com/Indrajit98' className="text-3xl">
          <FaSquareGithub/>
          </Link>
        </nav>
      </footer>
    </div>
   </div>
  );
};

export default Footer;
