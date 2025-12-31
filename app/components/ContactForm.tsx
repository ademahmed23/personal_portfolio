"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!, // Add the public key here
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Adem Ahmed Bekar",
          to_email: "ademahmedbekr@gmail.com", // The recipient email
          phone: form.phone,
          message: form.message,
        },
        emailjsConfig.userId
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out. Your message has been sent!");
          setForm({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="bg-secondary text-white px-4 py-8 md:p-12 lg:py-[60px] rounded-2xl shadow-lg">
      {/* Grid Layout for GET IN TOUCH and Form Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GET IN TOUCH Section */}
        <div className="flex flex-col justify-center items-left h-full space-y-3 lg:px-5">
          <h2 className="font-bold text-primary">GET IN TOUCH</h2>
          <p className="text-gray-300 font-bold text-xl lg:text-3xl">
            Build scalable, high-performance apps with Adem Ahmed Bekar
          </p>
          <p className="w-full text-gray-400">
            A passionate Full-Stack Developer specializing in Next.js, Node.js,
            and Docker. Let&apos;s collaborate to bring your digital ideas to
            life.
          </p>
        </div>

        {/* Form Section */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Layout for Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-5 py-4 bg-color_gray border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-5 py-4 bg-color_gray border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-5 py-4 bg-color_gray border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message (Expands across 2 columns) */}
            <div className="lg:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-5 py-4 bg-color_gray border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-4 bg-primary text-white font-semibold rounded-[50px] hover:bg-blue-400 transition-colors duration-300"
              >
                {loading ? "Sending..." : "Send Mail"}
                <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
