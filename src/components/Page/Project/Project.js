import React, { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState();
  console.log(data);
  const url = "projectData.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container lg:mt-20 ">
      <div>
        <h4 className="text-center mb-8">My Complete Projects</h4>
      </div>
      {data?.map((data, i) => (
        <div className="projects">
          <div className="project-single bg-bgProject">
            <div className="project-image">
              <figure>
                <img
                  className="w-full h-full object-cover object-top"
                  src={data?.picture}
                  alt="Album"
                />
              </figure>
            </div>
            <div className="card-body lg:w-1/2">
              <h2 className="card-title pb-5">{data?.name}</h2>
              <p className=" md:font-light flex-grow-0 pb-5">
                {data?.description}
              </p>
              <div className="lg:flex items-center">
                <p>Feature:</p>
                {data?.feature?.map((feature) => (
                  <p className=" md:text-base">{feature}</p>
                ))}
              </div>

              <div className="card-actions lg:justify-end mx-auto mt-5">
                <a
                  className="btn text-white"
                  href={data?.live_site}
                  target="blank"
                >
                  Live Site
                </a>
                <a
                  className="btn text-white"
                  href={data?.GitHub_link}
                  target="blank"
                >
                  GitHub_link
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
