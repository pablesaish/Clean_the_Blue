import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // <-- Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Step 3: Implement the updated Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    emailjs.sendForm('service_mzfczlz', 'template_g7oumhn', e.target, 'IUo8yDTPalsNOllKr')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Thank you for your message! We will get back to you soon.');
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-cyan-700 text-white p-6 shadow h-90px">
        <div className="mt-13 container mx-auto text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We're here to help!</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            {/* The form tag itself doesn't need to change */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // This MUST match the variable in your EmailJS template
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email" // This MUST match the variable in your EmailJS template
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // This MUST match the variable in your EmailJS template
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message" // This MUST match the variable in your EmailJS template
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-2"><strong>Address:</strong> rait </p>
          <p className="mb-2"><strong>Contact No.:</strong> XXXXXXXX00</p>
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:cleantheblue@gmail.com" className="text-green-400">cleantheblue@gmail.com</a>
          </p>
          <p className="mt-4">© 2025 Clean The Blue. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;