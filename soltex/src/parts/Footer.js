/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 px-5 flex-col mb-4">
            <BrandIcon />
          </div>
          <div className="w-full px-5 sm:w-1/3 mt-0 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-2xl text-theme-blue font-semibold mb-4">
              Office
            </h1>
            <div className="flex items-center mb-3">
              <MailIcon className="w-6 h-6 text-theme-blue mr-3" />
              <p className="text-lg text-gray-400 font-light">
                HR@soltexsystems.com
              </p>
            </div>
            <div className="flex items-center mb-3">
              <PhoneIcon className="w-6 h-6 text-theme-blue mr-3" />
              <p className="text-lg text-gray-400 font-light">(978) 703-0808</p>
            </div>
            <div className="flex items-center mb-3">
              <LocationMarkerIcon className="w-6 h-6 text-theme-blue mr-3" />
              <p className="text-md text-gray-400 font-light">
                1501 Main Street, STE 16, Tewksbury, Massachusetts 01876
              </p>
            </div>
          </div>
          <div className="w-1/3 px-5 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href=""
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href=""
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
            <Button
              href=""
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Github
            </Button>
          </div>
        </div>
        {/* <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - Racxstudio
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Racmat Hafidz Fadli
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
