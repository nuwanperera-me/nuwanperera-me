import "@/styles/globals.css";

import React from "react";

import Providers from "@/app/providers";

import { cn } from "@/lib/utils";
import { geistSans } from "@/styles/fonts";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { SparklesCore } from "@/components/ui/sparkles";
import { NavigationDock } from "@/components/navigation-dock";
import { Footer } from "@/components/footer";

const title = "Nuwan Perera";
const creator = "@nuwanperera-me";
const description =
  "Hi! 👋 I'm Nuwan Perera, a Full Stack Engineer and Machine Learning Enthusiast studying at the University of Westminster.";
const image = "https://nuwanperera.me/og-image.png";

export const metadata: Metadata = {
  title: title,
  description: description,
  creator: creator,
  openGraph: {
    title: title,
    description: description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: creator,
  },
  metadataBase: new URL("https://nuwanperera.me/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans text-sm text-primary  antialiased",
          geistSans.variable,
        )}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <main className="relative flex flex-col items-center">
              <div className="fixed inset-0 -z-50 h-screen w-full">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.2}
                  maxSize={1.2}
                  speed={7}
                  particleDensity={30}
                  className="h-full w-full"
                  particleDarkColor="#a1a1aa"
                  particleLightColor="#18181b"
                />
              </div>
              {children}
              <NavigationDock />
              <Footer />
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
