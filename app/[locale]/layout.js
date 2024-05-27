import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  // Get the language from the request headers
  const language = context.req.headers['accept-language'];
  context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
}

export const metadata = {
  title: "Onpower Group",
  description: "Onpower group website, Antalya",
};

export default function RootLayout({ children, language }) {
  if (!locales.includes(defaultLocale)) notFound();
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
