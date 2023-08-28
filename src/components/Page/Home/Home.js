import React from "react";
import "./Home.css";
import image from "../../Asset/Image/Indrajit.png";
import { CiImport } from "react-icons/ci";

const Home = () => {
  return (
    <div className="hero-section overflow-hidden relative themeColor">
      <span className="hero-shape"></span>
      <div className="container overflow-hidden">
        <div className="row grid md:grid-cols-2 gap-3">
          {/* left div  */}
          <div className=" relative mt-20 h-96 overflow-hidden">
            <div className="">
              <div>
              <h4>Hello I'm</h4>
              <h2 className=" hero-title-shape hero-title">Indrajit Chandra Chanda</h2>
              <p>Web Developer </p>
              <button className="button"><a href="https://drive.google.com/file/d/1w0wst_y8sZ0BAQC6AfVT4pujEun5chak/view?usp=sharing" target="#" >Get Resume</a> <CiImport/></button>
              </div>
            </div>
          </div>
          {/* right div  */}
          <div className="z-50 ">
            <img className="h-full object-cover" src={image} alt="" />
          </div>
        </div>
      </div>
     
      
    </div>
  );
};

export default Home;
