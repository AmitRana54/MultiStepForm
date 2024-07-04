import React, { useState } from 'react';

function AddressForm({ formData, setFormData, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
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
      <h2 className="text-2xl font-semibold mb-4">Step 2: Address</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AddressForm;
