import React, { useState } from 'react';

function PersonalDetsForm({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.FirstName) newErrors.FirstName = "First name is required";
    if (!formData.LastName) newErrors.LastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Personal Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="FirstName">First Name</label>
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          placeholder="Enter your first name"
          value={formData.FirstName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.FirstName ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.FirstName && <p className="text-red-500 text-sm">{errors.FirstName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="LastName">Last Name</label>
        <input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Enter your last name"
          value={formData.LastName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.LastName ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.LastName && <p className="text-red-500 text-sm">{errors.LastName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>
      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Next
      </button>
    </div>
  );
}

export default PersonalDetsForm;
