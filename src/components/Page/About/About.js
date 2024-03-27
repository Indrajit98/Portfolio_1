import React from "react";
import image from "../../Asset/Image/about_image.png";
import { FaReact,FaHtml5,FaCss3  } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto pb-20">
      <h4 className="text-center items-center">About Me </h4>
      <div className="md:flex justify-between items-center">
        <div className="md:z-50 md:mr-8 w-1/3 ">
          <img className="md:h-full object-cover" src={image} alt="" />
        </div>
        <div className="md:w-1/2">
          <React.Fragment>
            {/* <h4>Hello I'm</h4>
            <h2 className="pb-5">Indrajit Chandra Chanda</h2>
            <p className="mb-5">Font-End Developer </p> */}
            <p className="text-xl pt-10 md:pt-0">
              I am interested to work with web development and in related
              fields. I am a lifetime learner. I spend my whole day, practically
              every day, experimenting with web technologies. I have worked with
              many languages throughout my studies HTML, CSS,
              Bootstrap,Tailwind, JavaScript. Currently, I am learning React.Js.
            </p>
          </React.Fragment>
        </div>

      </div>
    </div>
  );
};

export default About;
