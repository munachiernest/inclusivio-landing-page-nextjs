import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";

const RethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inclusivio | AI-Powered Web Accessibility Platform",
  description:
    "Transform your website with code-level accessibility solutions that provide both compliance protection and business growth. Inclusivio delivers real-time detection with AI-powered remediation.",
  keywords:
    "web accessibility, ADA compliance, WCAG, accessibility platform, AI accessibility, digital inclusion",
  authors: [{ name: "Inclusivio" }],
  applicationName: "Inclusivio",
  metadataBase: new URL("https://inclusivio.com"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Inclusivio | Transform Web Accessibility",
    description:
      "AI-powered accessibility platform that fixes code-level issues for true compliance and business growth",
    siteName: "Inclusivio",
    images: [
      {
        url: "/images/inclusivio-og.jpg", // Save your image with this name
        width: 1200,
        height: 630,
        alt: "Inclusivio - Web accessibility made effortless with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inclusivio | AI-Powered Web Accessibility",
    description:
      "Transform your website with code-level accessibility solutions",
    images: ["/images/inclusivio-og.jpg"], // Create and add this image (1200x675px recommended)
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#9BC53D", // Using your accent color
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={RethinkSans.className}>
        {children}
      </body>
    </html>
  );
}
