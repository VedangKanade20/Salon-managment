import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>

      {/* Contact Form */}
      <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Have a question? Drop us a message, and we’ll get back to you soon!
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="border p-3 rounded-lg w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg w-full h-32"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Location Details */}
      <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us</h2>
        <p className="text-gray-600 mb-4">
          123 Main Street, Your City, Country - 12345
        </p>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12647.354083759254!2d-74.0060152!3d40.7127766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17d1502e81%3A0xada657c2e7a98e03!2sNew%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1615031884734!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Phone and Email */}
      <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          📞 Call us at:{" "}
          <a href="tel:+1234567890" className="text-blue-500 hover:underline">
            +1 234 567 890
          </a>
        </p>
        <p className="text-gray-600">
          📧 Email:{" "}
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline"
          >
            info@example.com
          </a>
        </p>
      </section>

      {/* Business Hours */}
      <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Business Hours
        </h2>
        <p className="text-gray-600">Monday - Saturday: 9 AM - 7 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </section>
    </div>
  );
};

export default Contact;
