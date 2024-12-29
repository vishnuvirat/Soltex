/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import Fade from "react-awesome-reveal";

import NotFound from "assets/images/NotFound.png";

import Button from "elements/Button";

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img
                src={NotFound}
                alt="Not Found"
                className="sm:w-3/4 xl:w-5/12 mt-5"
              />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Position Not Found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/project"
                type="link"
                className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button
          type="link"
          href="/project"
          className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline"
        >
          <svg
            className="w-5 h-5 text-gray-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Positions
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-8 justify-center">
          <Fade bottom triggerOnce>
            <h1 className="text-5xl text-theme-blue text-center font-bold">
              {item.title}
            </h1>

            <p className="font-light text-xl text-gray-400 text-center mb-10">
              {item.type}
            </p>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex justify-center xl:mb-6">
              <img
                src={item.imageUrl}
                alt="Project"
                className="flex w-4/5 sm:w-4/6"
              />
            </div>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-3">
                Position Detail
              </h1>

              <p className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-5">
                Position Responsibilities
              </h1>

              <div className="flex flex-col gap-2 sm:flex-row ml-1">
                {item.responsibility.map((responsibility) => (
                  <div className="p-2 sm:mr-4 sm:px-6 sm:py-3 text-sm text-theme-purple border border-theme-purple rounded-full shadow-lg">
                    {responsibility}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Fade direction="up" triggerOnce>
                  <section className="flex container mx-auto">
                    <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-theme-purple text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss">
                      <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
                        <h1 className="w-2/3 text-2xl sm:text-3xl leading-tight font-semibold">
                          To apply, email your CV & Cover Letter to
                        </h1>
                        <Fade direction="up" triggerOnce delay={500}>
                          <Button
                            href="/discuss-project"
                            type="link"
                            className="flex bg-white text-blue-800 text-sm sm:text-lg lg:text-xl xl:text-xl tracking-wider items-center justify-center w-40 sm:w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-dark-theme-purple shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105"
                          >
                            Contact Us
                          </Button>
                        </Fade>
                      </div>
                      <Fade delay={300} triggerOnce>
                        <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">
                          HR@soltexsystems.com
                        </p>
                      </Fade>
                    </div>
                  </section>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </section>
  );
}
