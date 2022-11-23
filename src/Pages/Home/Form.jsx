import React from "react";
import appointment from "../../assets/images/appointment.png";

const form = () => {
  return (
    <section className="mb-24" style={{ background: `url(${appointment})` }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
            <h3 className="text-primary font-bold">Contact Us</h3>
            <h1 className="text-5xl mt-0 leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
              Stay connected with us
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Your Massage"
                ></textarea>
              </div>
              <button className="btn btn-primary text-white sm:btn-sm md:btn-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default form;
