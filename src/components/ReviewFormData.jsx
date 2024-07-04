import React from 'react';

function ReviewFormData({ formData, prevStep, submitForm }) {
  console.log(formData);
  return (
    <div className="max-w-md mx-auto p-6  shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Step 3: Review Your Details</h2>
      <div className="mb-6 space-y-4">
        <p className="text-lg"><span className="font-bold">First Name:</span> {formData.FirstName}</p>
        <p className="text-lg"><span className="font-bold">Last Name:</span> {formData.LastName}</p>
        <p className="text-lg"><span className="font-bold">Email:</span> {formData.email}</p>
        <p className="text-lg"><span className="font-bold">Phone:</span> {formData.phoneNumber}</p>
        <p className="text-lg"><span className="font-bold">Address:</span> {formData.address}</p>
        <p className="text-lg"><span className="font-bold">City:</span> {formData.city}</p>
        <p className="text-lg"><span className="font-bold">State:</span> {formData.state}</p>
        <p className="text-lg"><span className="font-bold">Zip Code:</span> {formData.zipCode}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-600 transition duration-200"
        >
          Back
        </button>
        <button
          onClick={submitForm}
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewFormData;
