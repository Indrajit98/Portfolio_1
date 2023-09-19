import React from "react";
import "./Home.css";
import image from "../../Asset/Image/Indrajit.png";
import { CiImport } from "react-icons/ci";
import Project from "../Project/Project";

const Home = () => {
  return (
    <div className="">
      <div className="hero-section overflow-hidden relative ">
        <span className="hero-shape"></span>
        <div className="container overflow-hidden">
          <div className="grid md:grid-cols-2 gap-3 md:px-0 px-3 ">
            {/* left div  */}
            <div className="hero-article">
              <div className="">
                <React.Fragment>
                  <h4>Hello I'm</h4>
                  <h2 className="hero-title-shape">Indrajit Chandra Chanda</h2>
                  <p>Web Developer </p>
                  <button className="button">
                    <a
                      href="https://drive.google.com/file/d/1w0wst_y8sZ0BAQC6AfVT4pujEun5chak/view?usp=sharing"
                      target="#"
                    >
                      Get Resume
                    </a>{" "}
                    <CiImport />
                  </button>
                </React.Fragment>
              </div>
            </div>
            {/* right div  */}
            <div className="md:z-50 ">
              <img className="md:h-full object-cover" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Project></Project>
    </div>
  );
};

export default Home;
