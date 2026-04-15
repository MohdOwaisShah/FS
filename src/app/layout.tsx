import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Final Solution | Best Doorstep Laptop Repair in Mumbai & Thane",
  description: "Elite doorstep laptop repair service in Mumbai and Thane. 24-hour turnaround, genuine parts, and expert technicians. We pick up, repair, and deliver.",
  keywords: "laptop repair mumbai, doorstep laptop repair thane, macbook repair mumbai, laptop service center mumbai",
  openGraph: {
    title: "Final Solution | Aesthetic Laptop Repair",
    description: "Mumbai's most professional doorstep laptop repair service.",
    type: "website",
    locale: "en_IN",
    url: "https://final-solution.in",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Final Solution",
    "image": "https://final-solution.in/logo.png",
    "@id": "https://final-solution.in",
    "url": "https://final-solution.in",
    "telephone": "9136837381",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thane West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2183,
      "longitude": 72.9781
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/finalsolution",
      "https://www.instagram.com/finalsolution"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${sora.variable} antialiased bg-slate-950 text-white selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
