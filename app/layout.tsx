import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import { Footer } from "../components/footer";

const RethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inclusivio | The Next Generation in Web Accessibility,",
  description:
    "Transform your website with code-level accessibility solutions that provide both compliance protection and " +
    "business growth.",
  keywords:
    "web accessibility, ADA compliance, WCAG, accessibility platform, pdf accessibility, digital inclusion",
  authors: [{ name: "Inclusivio" }],
  applicationName: "Inclusivio",
  metadataBase: new URL("https://www.thea11ylabs.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Web Accessibility Compliance Made Effortless",
    description:
      "AI-powered accessibility platform that fixes code-level issues for true compliance and business growth",
    siteName: "Inclusivio",
    url: new URL("https://www.thea11ylabs.com"),
    images: [
      {
        url: "/images/issuesPreview.png", // Save your image with this name
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
    images: ["images/issuesPreview.png"], // Create and add this image (1200x675px recommended)
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
        <Footer />
      </body>
    </html>
  );
}
