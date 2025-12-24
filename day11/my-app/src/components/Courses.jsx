import React from "react";


import amazon from '../assets/images/amazon.png';
import azure from '../assets/images/azure.png';
import CCNA from '../assets/images/CCNA.png';
import fortinet from '../assets/images/fortinet.png';
import paloalto from '../assets/images/paloalto.png';
import softwaretesting from '../assets/images/software testing.png';
import fullstack from '../assets/images/fullstack.png';
import devops from '../assets/images/devops.png';
import googlecloud from '../assets/images/google cloud.png'

const courses = [
  {
    title: "AWS Cloud Practitioner",
    description: "Master the basics of AWS, cloud architecture, and core services with hands-on labs.",
    image: amazon,
  },
  {
    title: "Microsoft Azure Fundamentals",
    description: "Get started with Azure concepts, services, and security. Perfect for beginners.",
    image: azure,
  },
  {
    title: "Google Cloud Associate Engineer",
    description: "Deploy and manage GCP projects using Compute Engine, Cloud Storage, and more.",
    image: googlecloud,
  },
  {
    title: "Fullstack Web Development",
    description: "Build apps using HTML, CSS, JavaScript, React, Node.js, Express & MongoDB.",
    image: fullstack,
  },
  {
    title: "DevOps with AWS & Docker",
    description: "Automate deployment using CI/CD pipelines, Docker containers, and AWS services.",
    image: devops,
  },
  {
    title: "Software Testing (Manual + Automation)",
    description: "Master testing techniques including Selenium, TestNG, and agile QA practices.",
    image: softwaretesting,
  },
  {
    title: "CCNA (Cisco Certified Network Associate)",
    description: "Learn network fundamentals, IP services, routing & switching with real labs.",
    image: CCNA,
  },
  {
    title: "CCNP (Cisco Certified Network Professional)",
    description: "Advance your networking career with in-depth knowledge of Cisco technologies.",
    image: CCNA,
  },
  {
    title: "Palo Alto Firewall",
    description: "Configure and manage Palo Alto Networks firewalls for enterprise security.",
    image: paloalto,
  },
  {
    title: "Fortinet Firewall",
    description: "Learn to secure networks using FortiGate firewalls with hands-on labs.",
    image: fortinet,
  },
];

export default function Courses() {
  return (
    <div className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Explore Our Courses</h2>
        <p className="mt-4 text-lg text-gray-600">
          At Cloud Academy, we empower students with top-notch skills in cloud, networking, development, and cybersecurity.
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition"
          >
            <img src={course.image} alt={course.title} className="w-14 h-14 object-contain" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{course.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
