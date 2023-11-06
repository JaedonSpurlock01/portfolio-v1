import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaedon Spurlock | Personal Portfolio",
  description: "Jaedon Spurlock's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={
          "${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        }
      >
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="bg-[#E3F4F4] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#a9b9b9]"
        ></div>
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="bg-[#FCF5ED] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#cec7c0]"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
