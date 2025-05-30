import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { sleep } from "@/lib/utils";
import Sidebar from "@/components/Sidebar"
import PlayerWrapper from "@/components/player/PlayerWrapper"
import TrackerWrapper from "./TrackerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TrackerWrapper>
            <Sidebar>
              {children}
            </Sidebar>
          </TrackerWrapper>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
