'use client';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';

export function NewsLetter(){
    const [buttonText, setButtonText] = useState('Join Waitlist');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [buttonStyle, setButtonStyle] = useState("");
    
    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        setIsButtonDisabled(true);
    
        const serviceID = 'default_service';
        const templateID = 'template_sb6nc5m';
    
        emailjs.sendForm(serviceID, templateID, e.target, 'OdrLUlfYvOiq4AXLo')
          .then(() => {
            setButtonText('Joined Waitlist!');
            setButtonStyle("bg-green-500"); // Set text color to green
            // Optionally, you might want to reset the form or handle the state further here.
          }, (err) => {
            setButtonText('Join Waitlist');
            setIsButtonDisabled(false);
            setButtonStyle("");
            alert('Failed to join the waitlist: ' + JSON.stringify(err));
          });
      };
    
    return (
      <div className="bg-slate-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-xs tracking-tight text-gray-900 sm:text-xxl lg:col-span-7">
            <p className="inline sm:block lg:inline xl:block text-lg tracking-tight text-slate-700">We&apos;re flattered by the overwhelming interest! Initial spots are gone! Missed the first cut? Fear not – secure your spot on our waitlist today. We&apos;re continuously bringing in new members to our platform on a rolling basis.</p>
          </div>
          <form onSubmit={sendEmail} className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                required
                type="email"
                autoComplete="email"
                name="email_waitlist"
                id="email_waitlist"
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                disabled={isButtonDisabled}
              />
                <button 
                disabled={isButtonDisabled}
                type="submit"
                className={`flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${isButtonDisabled ? '' : 'hover:bg-indigo-500'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${buttonStyle}`}
                >
                {buttonText}
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  
