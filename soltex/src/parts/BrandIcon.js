/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Logo from "../assets/images/Logo/SoltexLogo.svg";
import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <div className="w-32 ">
      <img src={Logo} alt="Soltex Logo" />
      </div>
    </Button>
  );
}
