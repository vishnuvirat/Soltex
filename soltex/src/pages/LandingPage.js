/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Portfolios,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero'; 
import Portfolio from 'parts/Portfolio';
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
        <Hero />
        <Portfolio data={Portfolios} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
