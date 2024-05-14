'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function CallToAction() {
  // State hooks for button text, button style, and button disabled status
  const [buttonText, setButtonText] = useState('Send message');
  const [buttonStyle, setButtonStyle] = useState('bg-indigo-600 hover:bg-indigo-500');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setIsButtonDisabled(true);

    const serviceID = 'default_service';
    const templateID = 'template_scrjdur';
    // Ensure you replace 'YOUR_USER_ID' with your actual EmailJS user ID
    const userID = 'zJM2MCRnGPLT-47Kw';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then(() => {
        setButtonText('Message Sent!');
        setButtonStyle("bg-green-500 hover:bg-green-400"); // Optionally change button style on success
        // Here, you might want to clear the form or manage state further
      }, (err) => {
        setButtonText('Send message');
        setIsButtonDisabled(false);
        setButtonStyle("bg-indigo-600 hover:bg-indigo-500");
        alert('Failed to send message: ' + JSON.stringify(err));
      });
  };
  return (
    <div id="contact" className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let&apos;s work together</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Partner with the world&apos;s best AI industry leaders.
            </p>
            <form onSubmit={sendEmail} method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-gray-900">Expected budget</legend>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        defaultValue="under_25k"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-under-25k">5 - $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        defaultValue="25k-50k"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        defaultValue="50k-100k"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $200K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        defaultValue="over_100k"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-over-100k">$200K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  disabled={isButtonDisabled}
                  className={`${isButtonDisabled ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-500'} rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {buttonText}
                </button>


              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

