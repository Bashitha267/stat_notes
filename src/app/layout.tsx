import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarBackground } from "@/components/StarBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuppiya48 - Statistics & Resources",
  description: "Statistics notes, ICAs and Passpapers for the 48th batch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StarBackground />
        <div className="app-container">


          <main className="main-content">
            {children}
          </main>

          <footer className="footer">
            <div className="footer-content">
              <p className="footer-disclaimer">
                This platform is dedicated strictly to educational purposes. Our mission is to provide students with seamless access to  study materials and resources.
              </p>
              <div className="footer-separator"></div>
              <p className="footer-credits">
                Developed by <span>Team Asgard 48th Batch</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
