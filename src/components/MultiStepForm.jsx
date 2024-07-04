import React,{useState } from 'react'
import PersonalDetsForm from './PersonalDetsForm';
import AddressForm from './AddressForm';
import ReviewFormData from './ReviewFormData';

function MultiStepForm() {
  
    const [step, setStep] = useState(1);
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
      FirstName: '',
      LastName: '',
      email: '',
      phoneNumber:"",
      address: '',
      city: '',
      state: '',
      zipCode: '',
    });
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };
  
    const submitForm = (e) => {
      e.preventDefault();
      localStorage.setItem("useInfo" , formData)
      alert("Form Submitted Successfully!")
setIsSubmitted(true)

    
    };
    if (isSubmitted) {
        return (
            <div className=" flex justify-center items-center">
      <svg
        className="w-6 h-6 mr-2 text-green-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2-2 4 4-2 2-4-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v8a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2V7m-7.5 3v-3" />
      </svg>
      <p className="font-medium text-xl text-green-600"> 'Your form has been submitted successfully!'</p>
    </div>
        )
        
    }
  
    switch (step) {
      case 1:
        return <PersonalDetsForm formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <AddressForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
     case 3: return <ReviewFormData formData={formData} submitForm={submitForm}  prevStep={prevStep}/>;
      default:
        return <PersonalDetsForm formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
  };
  
    
  


export default MultiStepForm