import MainFooter from "@/src/components/common/MainFooter/MainFooter";
import MainHeader from "@/src/components/common/MainHeader/MainHeader";
import LoaderOverlay from "@/src/components/ui/LoaderOverlay";
import Providers from "@/src/providers/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fox Travel",
  description: "Powered by RTS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
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
        <Providers>
          <LoaderOverlay />

          <MainHeader />
          {children}
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
