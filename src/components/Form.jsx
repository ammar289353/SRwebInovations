import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.fullName) errors.fullName = 'Full name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    if (!formData.description) errors.description = 'Description is required';

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // No errors, submit form (for now, we'll just log the form data)
      console.log(formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='mt-12 w-[500px]'>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          name="description"
          placeholder="Enter Your Project Brief"
          value={formData.description}
          onChange={handleChange}
          style={textareaStyle}
        />
        {errors.description && <p style={errorStyle}>{errors.description}</p>}
      </div>
     
    </form>
     <div className='pl-80 '>
     <button className='flex font-bodyFont rounded-lg bg-[#5454D4] hover:bg-[#39547a] text-white px-12 py-2  ' type="submit">
     Send
   <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-1" />
   </button>
     </div>
   </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px 0',
  fontSize: '16px',
  border: 'none',
  borderBottom: '2px solid #C7C7C7',
  outline: 'none',
};

const textareaStyle = {
  width: '100%',
  padding: '10px 0',
  fontSize: '16px',
  border: 'none',
  borderBottom: '2px solid #C7C7C7',
  outline: 'none',
  resize: 'none',
  height: '100px',
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
  marginTop: '5px',
};

export default Form;
