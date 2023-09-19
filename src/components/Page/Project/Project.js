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
    <div className="container lg:my-20">
      <div>
        <h2 className="text-center">My Complete Projects</h2>
      </div>
      {data?.map((data, i) => (
        <div className="lg:pt-16 overflow-hidden last:pb-16  lg:m-0 m-4">
          <div className=" flex lg:flex-row flex-col bg-base-100 lg:w-3/4 w-full lg:mx-auto rounded border border-spacing-3 overflow-hidden">
            <div className="lg:w-1/2 lg:m-5 h-80 overflow-hidden align-middle w-full cursor-pointer">
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
              <p className="text-xl font-light flex-grow-0 pb-5">
                {data?.description}
              </p>
              <div className="lg:flex items-center">
                <p className="text-xl">Feature: </p>
                {data?.feature?.map((feature) => (
                  <p className=" text-base">{feature}</p>
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
