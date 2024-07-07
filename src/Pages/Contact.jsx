import React, { useState } from 'react';
import './CSS/Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    article: '',
    artisan: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
        <div className="contact"><h1>Contact artisans for any questions you have</h1>
        <p>We will send your message to the artisan for this product </p></div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First name
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="Jane" 
          />
        </label>
        <label>
          Last name
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Smitherton" 
          />
        </label>
        <label>
          Email address
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="email@janesfakedomain.net" 
          />
        </label>
      
        
        <label>
          Your Message
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Enter your question or message" 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
     
    </div>
  );
};

export default Contact;
