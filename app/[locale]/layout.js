import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getServerSideProps as getServerSidePropsFunction } from "@/utils/getServerSideProps"; // Utility function

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  return getServerSidePropsFunction(context); // Util function to get language
}

export const metadata = {
  title: "Onpower Group",
  description: "Onpower group website, Antalya",
};

export default function RootLayout({ children, language }) {
  if (!locales.includes(language)) language = defaultLocale; // Fallback to default language
  const messages = useMessages();

  return (
    <html lang={language}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer />
        </NextIntlClientProvider>
        </body>
        
    </html>
  );
}
