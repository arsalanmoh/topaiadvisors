'use client';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { Container } from '@/components/Container'

export function NewsLetterFooter(){
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
            
        <div className="max-w-xl text-3xl font-bold tracking-tight text-[#4F45E4] sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Join our waitlist today and watch for your invitation!</h2>
        </div>


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
    <footer className="bg-slate-50">
      <Container>
        <div className="py-5">
        </div>
      <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Modalica. All rights
            reserved.
      </p>
      </Container>
    </footer>
      </div>
    )
  }
  
  
