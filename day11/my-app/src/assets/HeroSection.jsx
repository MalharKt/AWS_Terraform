"use client";
import React, { useState } from "react";
import img from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import video from "./video/video.mp4";

import cloudacedmy from "../assets/images/cloudacedmy.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // ✅ LINK IMPORT

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/Courses" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/About" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white ">
      {/* NAVBAR */}
      <nav
        aria-label="Global"
        className="flex items-center justify-between  lg:px-8 font-bold "
      >
        <div className="flex lg:flex-1 items-center">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt="cloudacedmy"
              src={cloudacedmy}
              className="h-20 max-h-50 w-40"
              style={{ height: "90px" }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-14">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-extrabold text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Link */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/Register" className="text-sm font-extrabold text-blue-400">
            Register <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  alt="cloudacedmy"
                  src={cloudacedmy}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-bold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* HERO SECTION */}
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        {/* 🎬 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0" />

        {/* 🔤 Foreground Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl"> 
               THE CLOUD ACADEMY
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
              {/* Optional Subtext here */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/get-started"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
