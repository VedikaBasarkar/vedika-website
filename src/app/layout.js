// "use client";
import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "@/components/backToTop";

export const metadata = {
  title: "Vedika",
  description: "Vedika Basarkar is UI UX Designer and developer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <BackToTop />
        <Navigation />
          {children}
        <Footer />
        </body>
    </html>
  );
}
