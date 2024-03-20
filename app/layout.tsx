import MainFooter from "@/app/_components/layout/MainFooter/MainFooter";
import MainHeader from "@/app/_components/layout/MainHeader/MainHeader";
import LoaderOverlay from "@/app/_components/layout/LoaderOverlay";
import type { Metadata } from "next";
import Providers from "@/app/_providers/Providers";

export const metadata: Metadata = {
  title: "Fox Travel",
  description: "Powered by RTS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <LoaderOverlay />
          <MainHeader />
          {children}
          <MainFooter />

          <div id="foxPortal"></div>
        </body>
      </html>
    </Providers>
  );
}
