import React from "react";
import "./Home.css";
import image from "../../Asset/Image/hero_image.gif";
import { CiImport } from "react-icons/ci";
import Project from "../Project/Project";
import About from "../About/About";


const Home = () => {
  return (
    <>
      <div className="hero-section overflow-hidden relative  ">
        <span className="hero-shape"></span>
        <div className="container  ">
          <div className="grid md:grid-cols-2 gap-3 md:px-0 px-3 ">
            {/* left div  */}
            <div className="hero-article">
              <div className="">
                <React.Fragment>
                  <h4>Hello I'm</h4>
                  <h1 className="hero-title-shape">Indrajit Chandra Chanda</h1>
                  <p>Front-End Developer </p>
                  <button className="button">
                    <a
                      href="https://drive.google.com/file/d/1CKrw-AcMQMn91yKkVJwLKKCOPnyu78yA/view?usp=sharing"
                      target="#"
                      className="pr-2"
                    >
                      Get Resume
                    </a>{" "}
                    <CiImport />
                  </button>
                </React.Fragment>
              </div>
            </div>
            {/* right div  */}
            <div className="md:z-50 w-full h-full flex item-center">
              <img className="md:h-full object-cover" src={image} alt="imag" />
            </div>
          </div>
        </div>
      </div>
      <Project></Project>
      <About></About>
    </>
  );
};

export default Home;
