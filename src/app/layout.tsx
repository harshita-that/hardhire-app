import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/provider";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "HardHire",
  description: "Contractor Safety Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body
        className="
          bg-white text-zinc-900
          antialiased
          min-h-screen
        "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}