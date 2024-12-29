/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Advantages,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Advantage from 'parts/Advantage';
// import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Advantage data={Advantages} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
