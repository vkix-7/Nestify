import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Nestify",
  description: "Nestify- only storage solution you need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
