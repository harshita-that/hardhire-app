import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/provider";
import "./globals.css";
import { inter } from "./fonts";
import { AppShell } from "@/components/layout/app-shell";
import { ds } from "@/lib/design-system";

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={ds.layout.body}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
