 "use client"
import React, { useState } from 'react';
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(`${t("popupMessage")}`);
    } else {
      alert(`${t("popupError")}`);
    }
  };

  const t = useTranslations("Form");

  return (
   <div className="flex items-center justify-center w-full">
     <div className="flex flex-col bg-slate-800 rounded-lg py-8 text-white items-center justify-center w-full sm:w-3/5 lg:w-11/12">
     <h3 className="text-[25px] font-semibold text-white">{t("header")}</h3>
     <form onSubmit={handleSubmit}  className="flex flex-col p-10 gap-4 w-11/12 sm:w-4/5 text-start items-center">
      <div className="flex flex-col w-full">
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="surname">{t("surname")}</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="phone">{t("phone")}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="message">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        />
      </div>
      <button className="px-4 py-2 w-[200px] text-white bg-blue-500 rounded mt-5">
        {t("submit")}
      </button>
    </form>
     </div>
   </div>
  );
}
