import React from 'react';
import Button from '../Components/button/Button';
function SendMessage() {
  return (
    <div className="bg-[#F2F9FF] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="uppercase text-[#FA7150] text-sm font-semibold">get in touch</p>
          <h1 className="text-3xl font-bold text-gray-800">Send us a Message</h1>
        </div>

        {/* Form Starts */}
        <form className="space-y-6 text-center">
          {/* Row of 3 Inputs: Name, Email, Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-2 bg-white resize-none rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-white resize-none rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-2 bg-white resize-none rounded-md focus:outline-none"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full bg-white resize-none px-4 py-2 rounded-md focus:outline-none"
          ></textarea>

        <Button title='send now' />
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
