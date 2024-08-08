"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import navbarlogo from "@/public/assets/images/logo.png";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { usePathname } from "next/navigation";
import LangSwitcher from "../../../LangSwitcher";
import { useTranslations } from "next-intl";


const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

  const translation = useTranslations("Navbar");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleCertificates = () => {
    setIsCertificatesOpen(!isCertificatesOpen);
  };

  return (
    <nav className="flex fixed bg-transparent z-30 w-full text-white ">
      <div className="bg-black/20 absolute inset-0 z-[1]"></div>
      <div className="mx-auto min-w-full px-2 lg:px-6 z-10">
        {/* Desktop Navbar */}
        <div className="relative hidden lg:flex h-28 items-center justify-between xl:px-2 2xl:px-8 mx-4 text-black">
          <div className="w-15 sm:w-20 md:w-28 lg:w-36 xl:w-48 2xl:w-60 h-auto">
            <Image
              src={navbarlogo}
              alt="logo"
              width={navbarlogo.width}
              height={navbarlogo.height}
             
            />
          </div>
          <div className="flex gap-[18px] xl:gap-10 2xl:gap-18 justify-center items-end text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-white mx-2 z-99">
            <Link href={translation("linkhome")} className=" whitespace-nowrap rounded-md">
            {translation('homepage')}
            </Link>
            <div className="relative group">
              <button className="flex flex-row items-center">
              {translation('projects')} <FaCaretDown className="ml-1" />
              </button>
              <div className="absolute pt-2 text-lg xl:w-48 w-30 bg-black/20 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href={translation("linkproject")}
                  className="block py-3  px-4  hover:bg-black/40"
                >
                   {translation('solar')}
                </Link>
                <Link
                  href={translation("linkproject")}
                  className="block py-3 px-4  no-underline hover:bg-black/40"
                >
                   {translation('line')}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex flex-row items-center">
              {translation('products')} <FaCaretDown className="ml-1" />
              </button>
              <div className="absolute pt-2 w-48 text-lg bg-black/20 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href={translation("linkproduct")}
                  className="block py-5 px-4  hover:bg-black/40"
                >
                   {translation('generators')}
                </Link>
                <Link
                  href={translation("linkups")}
                  className="block py-3 px-4  no-underline hover:bg-black/40"
                >
                   {translation('ups')}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex flex-row items-center">
              {translation('certificate')} <FaCaretDown className="ml-1" />
              </button>
              <div className="absolute pt-2 w-48 text-lg bg-black/20 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href={translation("linkcertificate")}
                  className="block py-2 px-3 hover:bg-black/40"
                >
                   {translation('deal')}
                </Link>
                
              </div>
            </div>
            <Link href={translation("linkabout")}> {translation('about')}</Link>
            <Link href="/#contact"> {translation('contact')}</Link>
          </div>
          <div className=" justify-center items-center text-black text-base  lg:text-lg xl:text-xl text-center cursor-pointer ">
            <LangSwitcher />
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex justify-between items-center text-white px-6 h-28">
          <Image src={navbarlogo} width={200} height={200} alt="logo" />
          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-neutral-900 z-40 transition-transform duration-500 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-start p-4">
            <button
              onClick={toggleSidebar}
              className="focus:outline-none"
            >
              <RxCrossCircled className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col items-start px-6 py-12">
            <Link
              href="/"
              onClick={toggleSidebar}
              className=" px-3 py-2 rounded-md text-lg"
            >
              {translation('homepage')}
            </Link>
            <div className="relative group mt-4 w-full text-left">
              <button
                onClick={toggleProjects}
                className=" px-3 py-2 rounded-md text-lg flex items-center justify-between w-full"
              >
               {translation('projects')} <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href={translation("linkproject")}
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  {translation('solar')}
                </Link>
                <Link
                  href={translation("linkproject")}
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  {translation('line')}
                </Link>
              </div>
            </div>
            <div className="relative group mt-4 w-full text-left">
              <button
                onClick={toggleProducts}
                className=" px-3 py-2 rounded-md text-lg flex items-center justify-between w-full"
              >
                {translation('products')} <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  {translation('generators')}
                </Link>
                <Link
                  href={translation("linkproduct")}
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  {translation('ups')}
                </Link>
              </div>
            </div>
            <div className="relative group mt-4 w-full text-left">
              <button
                onClick={toggleCertificates}
                className="text-white px-3 py-2 rounded-md text-lg flex items-center justify-between w-full"
              >
                {translation('certificate')} <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href={translation("linkcertificate")}
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  {translation('deal')}
                </Link>
              </div>
            </div>
            <Link
              href="/#about"
              onClick={toggleSidebar}
              className=" px-3 py-2 rounded-md text-lg mt-4"
            >
              {translation('about')}
            </Link>

            <a
              href="/#contact"
              onClick={toggleSidebar}
              className=" px-3 py-2 rounded-md text-lg mt-4"
            >
              {translation('contact')}
            </a>
            <div className="justify-center items-center text-black text-center cursor-pointer">
            <LangSwitcher />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
