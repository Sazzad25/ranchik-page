import React from "react";
import rman from "../images/rman.PNG";

const Form = () => {
  return (
    <div className="p-4">
      <div className="hero min-h-screen bg-light border border-indigo-600 flex justify-between">
        <div className="hero-content  lg:flex-row-reverse container">
          <div className=" lg:text-left">
          <img className="ml-14 pl-12" src={rman} alt="" />
          </div>
          <div className="card w-full max-w-sm border-r-4 pt-0">
            <div className="card-body">
              <h1 className="text-3xl font-semibold">Education <span className="text-red-500">*</span></h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year of passing <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="2024"
                  className="input input-bordered"
                />
                <label className="label justify-end">
                  <span className="label-text text-gray-400">0/100</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Region <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Jalandhar"
                  className="input input-bordered"
                />
                <label className="label justify-end">
                  <span className="label-text text-gray-400">0/100</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College Name<span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="NIT Jalandhar"
                  className="input input-bordered"
                />
                <label className="label justify-end">
                  <span className="label-text text-gray-400">0/100</span>
                </label>
              </div>
              <div className="form-control">
             <div className="flex justify-between ">
             <label className="label">
                  <span className="label-text">Describe college<span className="text-red-500">*</span></span>
              </label>
             <label className="label">
                  <span className="label-text text-primary">Need help ?</span>
              </label>
             </div>
              <input type="text" className="input input-bordered input-lg w-full max-w-xs h-20" placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." />
              <label className="label justify-end">
                  <span className="label-text text-gray-400">0/500</span>
              </label>
              </div>
              <div className="form-control mt-9">
                <button className="btn btn-primary w-20">Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
