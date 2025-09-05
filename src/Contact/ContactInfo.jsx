import React from 'react';

function ContactInfo() {
  return (
    <div className="py-16 px-6 ">
      <div className="text-center mb-12">
        <p className="uppercase text-sm text-gray-500">contact info</p>
        <h1 className="text-3xl font-bold text-gray-800">Our Contact Information</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Location Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/images/icons/gps.png"
            alt="Location Icon"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Location</h2>
          <p className="text-gray-600">
            121 King Street, Melbourne Victoria 3000 Australia
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/images/icons/telephone.png"
            alt="Phone Icon"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Phone Number</h2>
          <p className="text-gray-600">(+61 3 8376 6284)</p>
          <p className="text-gray-600">(+800 2345 6789)</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/images/icons/email.png"
            alt="Email Icon"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Email us at</h2>
          <p className="text-gray-600">info@contrive.com</p>
          <p className="text-gray-600">contrive@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
