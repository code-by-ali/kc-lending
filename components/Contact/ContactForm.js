"use client";
import React, { useState } from "react";
import CommonImage from "../common/CommonImage";
import ContactFormImg from "@/public/assets/contact-form-img.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-full">
              <CommonImage
                src={ContactFormImg.src || ContactFormImg}
                alt="Happy family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base font-medium text-[#344054] mb-2"
                >
                  Full name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Carter"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-[#344054] mb-2"
                >
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                  className="block text-base font-medium text-[#344054] mb-2"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 657-488"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                  className="block text-base font-medium text-[#344054] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Buying house"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-[#344054] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write here..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-primary-blue text-white font-medium text-base py-3 px-6 rounded-lg outline-none"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
