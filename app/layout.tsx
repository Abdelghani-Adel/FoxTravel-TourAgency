import LoaderOverlay from "@/components/layout/LoaderOverlay";
import MainFooter from "@/components/layout/MainFooter/MainFooter";
import MainHeader from "@/components/layout/MainHeader/MainHeader";
import "@/tailwind.css";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import Header from "@/components/Header";
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: "Fox Travel",
  description: "Powered by RTS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <LoaderOverlay />

          {/* <Header /> */}
          <MainHeader />
          <main>{children}</main>
          <MainFooter />

          <div id="foxPortal"></div>
        </body>
      </html>
    </Providers>
  );
}
