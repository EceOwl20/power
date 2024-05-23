"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navbarlogo from "@/public/assets/images/logo.png";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "projects", href: "/pages/projects" },
    { label: "products", href: "/pages/products" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex fixed bg-neutral-900 z-30 w-full ">
      <div className="mx-auto min-w-full px-2 lg:px-8">
        {/* Desktop Navbar */}
        <div className="relative hidden lg:flex h-28 items-center justify-between xl:px-10 2xl:px-18 mx-4">
          <div className="w-15 sm:w-20 md:w-28 lg:w-32 xl:w-48 2xl:w-60 h-auto">
            <Image
              src={navbarlogo}
              alt="logo"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="flex gap-[18px] xl:gap-14 2xl:gap-20 w-1/2 justify-center items-end text-base xl:text-xl 2xl:text-2xl text-slate-100">
            <Link href="/" className="text-white whitespace-nowrap rounded-md">
              Ana Sayfa
            </Link>
            <div className="relative group">
              <button className="">Projelerimiz</button>
              <div className="absolute pt-2 text-lg xl:w-48 w-30 bg-neutral-900 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href="/"
                  className="block py-3  px-4 text-white hover:bg-slate-600"
                >
                  Otel otomasyon sistemleri
                </Link>
                <Link
                  href="/"
                  className="block py-3 px-4 text-white no-underline hover:bg-slate-600"
                >
                  Güneş Enerji Santralleri
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="">Ürünlerimiz</button>
              <div className="absolute pt-2 w-48 text-lg bg-neutral-900 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href="/pages/products"
                  className="block py-5 px-4 text-white hover:bg-slate-600"
                >
                  Jeneratörler
                </Link>
                <Link
                  href="/"
                  className="block py-3 px-4 text-white no-underline hover:bg-slate-600"
                >
                  Ups Kesintisiz Güç Kaynakları
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="">Sertifikalarımız</button>
              <div className="absolute pt-2 w-48 text-lg bg-neutral-900 rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 hidden group-hover:block transition-all duration-300 ease-in-out">
                <Link
                  href="/"
                  className="block py-2 px-3 text-white hover:bg-slate-600"
                >
                  Paris iklim anlaşması
                </Link>
              </div>
            </div>
            <Link href="#about">Hakkımızda</Link>
            <Link href="/#contact">İletişim</Link>
          </div>
          <div className="text-center text-slate-100 xl:text-lg text-base ">
            Dil
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex justify-between items-center px-6 h-28">
          <Image src={navbarlogo} width={200} height={200} alt="logo" />
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
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
              className="text-white focus:outline-none"
            >
              <RxCrossCircled className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col items-start px-6 py-12">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="text-white px-3 py-2 rounded-md text-lg"
            >
              Ana Sayfa
            </Link>
            <div className="relative group mt-4 w-full text-left">
              <button className="text-white px-3 py-2 rounded-md text-lg flex items-center justify-between w-full">
                Projelerimiz <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  Otel otomasyon sistemleri
                </Link>
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  Güneş Enerji Santralleri
                </Link>
              </div>
            </div>
            <div className="relative group mt-4 w-full text-left">
              <button className="text-white px-3 py-2 rounded-md text-lg flex items-center justify-between w-full">
                Ürünlerimiz <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  Jeneratörler
                </Link>
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  Ups Kesintisiz Güç Kaynakları
                </Link>
              </div>
            </div>
            <div className="relative group mt-4 w-full text-left">
              <button className="text-white px-3 py-2 rounded-md text-lg flex items-center justify-between w-full">
                Sertifikalarımız <FaCaretDown className="ml-1" />
              </button>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out w-full bg-white rounded-md shadow-lg">
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="block py-3 px-4 text-black hover:bg-gray-300"
                >
                  Paris iklim anlaşması
                </Link>
              </div>
            </div>
            <Link
              href="#about"
              onClick={toggleSidebar}
              className="text-white px-3 py-2 rounded-md text-lg mt-4"
            >
              Hakkımızda
            </Link>

            <a
              href="#contact"
              onClick={toggleSidebar}
              className="text-white px-3 py-2 rounded-md text-lg mt-4"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
