import {
  AcademicCapIcon,
  CloudIcon,
  ChartBarIcon,
} from '@heroicons/react/20/solid'
import secation from '../assets/images/secation.png';
import React from "react";

const features = [
  {
    name: 'Industry Certifications',
    description:
      'Prepare for AWS, Azure, DevOps, and more with our expert-led certification programs recognized globally.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Cloud Labs & Projects',
    description: 'Practice with real-world labs and hands-on cloud projects to gain practical experience.',
    icon: CloudIcon,
  },
  {
    name: 'Career-Ready Skills',
    description: 'Master tools and technologies needed for roles like Cloud Engineer, Data Analyst, and Full Stack Developer.',
    icon: ChartBarIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">The Cloud Academy</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Learn Cloud. Launch Your Career.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                The Cloud Academy offers in-demand courses and certifications to help you master cloud technologies. Whether you're starting out or leveling up, we've got you covered.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="secation"
            src={secation}
            width={2439}
            height={1442}
            className="w-full h-auto object-contain rounded-xl shadow-xl ring-1 ring-gray-400/10" />
        </div>
      </div>
    </div>
  );
}
