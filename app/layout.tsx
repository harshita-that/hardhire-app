import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/provider";
import "./globals.css";
import { inter } from "./fonts";
import { ds } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "HardHire — Contractor Safety Intelligence",
  description:
    "Know a contractor's safety history before you hire. HardHire analyzes OSHA violations and generates contractor safety grades from A to F.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={ds.layout.body}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
