import localFont from "next/font/local";
import "./globals.css";

// Load the local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Modify the metadata object to use the custom title
export const metadata = {
  title: "HireFlow",  // Custom title here
  description: "The best platform for freelancers and recruiters", // Update description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags and other head elements */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children} {/* Renders the page content */}
      </body>
    </html>
  );
}
