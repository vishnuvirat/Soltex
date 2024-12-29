/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const {
    data,
    resetForm,
  } = actions;

  const submitEmail = async () => {
    const {
      name,
      company,
      email,
      phone,
      projectIdea,
    } = data;

    // Validate that all fields are filled
    if (
      name.trim() === ''
      || company.trim() === ''
      || email.trim() === ''
      || phone.trim() === ''
      || projectIdea.trim() === ''
    ) {
      toast.error('Please fill out all the fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, company, email, phone, projectIdea,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Success! We'll get back to you soon. Thank you!");
        resetForm();
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Contact Us</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Please fill out the form below to discuss and we will get back to you shortly.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className="mr-0 sm:mr-2 mb-4 sm:mb-0"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className="ml-0 sm:ml-2"
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto mt-4">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className="mr-0 sm:mr-2 mb-4 sm:mb-0"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              className="ml-0 sm:ml-2"
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto mt-4">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Send Message"
              className="w-full"
              onChange={actions.onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-[#01a6a5] text-white rounded-full border-2 border-[#016a69] hover:bg-[#016a69] transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};
