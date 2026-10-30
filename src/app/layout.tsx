import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Bhavesh Jadhav — AI Engineer & Builder", template: "%s · Bhavesh Jadhav" },
  description: "AI Engineer focused on connecting with people, understanding real-world problems, and engineering intelligent solutions with autonomous agents, RAG, and backend software.",
  openGraph: {
    title: "Bhavesh Jadhav — AI Engineer & Builder",
    description: "Connecting with builders, understanding real problems, and engineering intelligent solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
