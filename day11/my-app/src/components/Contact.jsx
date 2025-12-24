import React from "react";

export default function Contact() {
  return (
    <div className="bg-white py-16 px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Ready to transform your tech career? At <strong>Cloud Academy</strong>, we help students master Multicloud & Fullstack Development through real-world training. Whether you're a learner, collaborator, or just curious — we’re here to talk.
          </p>
        </div>

        {/* Contact Boxes */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Collaborate Card */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">Collaborate</h3>
            <a
              href="mailto:collaborate@cloudacademy.com"
              className="text-sm text-indigo-600 font-medium block mt-2"
            >
              thecloudacademy406@gmail.com
            </a>
            <p className="text-sm text-gray-700 mt-1">+91 9958201323</p>
          </div>

          {/* Admissions & Queries Card */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">Admissions & Queries</h3>
            <a
              href="mailto:admissions@cloudacademy.com"
              className="text-sm text-indigo-600 font-medium block mt-2"
            >
              thecloudacademy406@gmail.com
            </a>
            <p className="text-sm text-gray-700 mt-1">+91 9958201323</p>
          </div>
        </div>
      </div>
    </div>
  );
}
