/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Function to handle menu toggle
  const handleToggle = () => {
    setIsCollapse(!isCollapse);
  };

  // Function to close menu when a link is clicked
  const handleClose = () => {
    setIsCollapse(false);
  };

  return (
    <header className="header relative">
      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Brand Icon */}
        <BrandIcon />

        {/* Hamburger Menu Button */}
        <button
          className="block text-[#016a69] lg:hidden focus:outline-none z-50"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300 transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Hamburger Icon */}
            <path
              className={`${isCollapse ? 'hidden' : 'block'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            {/* Close Icon */}
            <path
              className={`${!isCollapse ? 'hidden' : 'block'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="hidden lg:flex text-[#01a6a5] tracking-widest items-center justify-center space-x-6 bg-white">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            className={`${path === '/aboutus' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/aboutus"
          >
            About Us
          </Button>
        </li>
        <li>
          <Button
            className={`${path === '/services' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/services"
          >
            Services
          </Button>
        </li>
        <li>
          <Button
            className={`${path === '/project' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            Careers
          </Button>
        </li>
        <li>
          <Button
            className="font-medium text-lg px-6 py-2 bg-[#01a6a5] text-white rounded-full border-2 border-[#016a69] hover:bg-[#016a69] transition duration-200"
            type="link"
            href="/discuss-project"
          >
            Contact Us
          </Button>
        </li>
      </ul>

      {/* Mobile Navigation Menu with Enhanced Transition */}
      <Transition
        show={isCollapse}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        {/* Directly wrap the <ul> with Transition without an extra <div> */}
        <ul className="z-40 flex flex-col text-theme-blue tracking-widest mt-2 absolute top-full left-0 w-full bg-white border-b-2 border-gray-300 lg:hidden">
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/' ? 'active-link' : ''} font-medium px-5 no-underline hover:underline`}
              type="link"
              href="/"
              onClick={handleClose}
            >
              Home
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/aboutus' ? 'active-link' : ''} font-medium px-5 no-underline hover:underline`}
              type="link"
              href="/aboutus"
              onClick={handleClose}
            >
              About Us
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/services' ? 'active-link' : ''} font-medium px-5 no-underline hover:underline`}
              type="link"
              href="/services"
              onClick={handleClose}
            >
              Services
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} font-medium px-5 no-underline hover:underline`}
              type="link"
              href="/project"
              onClick={handleClose}
            >
              Careers
            </Button>
          </li>
          <li className="mx-auto my-6 bg-white">
            <Button
              className="font-bold mx-auto px-5 py-2 bg-[#01a6a5] text-white rounded-full border-2 border-[#016a69] hover:bg-[#016a69] transition duration-200"
              type="link"
              href="/discuss-project"
              onClick={handleClose}
            >
              Contact Us
            </Button>
          </li>
        </ul>
      </Transition>
    </header>
  );
}
