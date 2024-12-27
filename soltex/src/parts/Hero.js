/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/service1.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
            We are Providing Hassle <br />
            Free Service
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            We deliver expert developers using cutting-edge technologies to
            drive your business growth.
          </p>
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="/project"
              type="link"
              className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-[#01a6a5] rounded-lg shadow-2xl hover:bg-[#016a69] transition duration-200"
            >
              Join With Us
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Fade>
        </div>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}
