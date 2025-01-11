import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageButton from "@/components/PageButton";
import Layout from "@/components/Layout";
import RelativeMenu from "@/components/footer/menu";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "../providers/reactQuery";
import NextTopLoader from "nextjs-toploader";
export const metadata: Metadata = {
  title: "Shopping",
  description: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon"  href="/logoMeta.png" type="image/x-icon" />
      </head>
      <body className="font-display ">
        <NextTopLoader
          color="#3b82f6"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          showAtBottom={false}
        />
        <ReactQueryProvider>
          <Layout>
            <ToastContainer />
            <Navbar />
            <PageButton />
            {children}
            <div className="lg:hidden ">
              {" "}
              <RelativeMenu />
            </div>
          </Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
