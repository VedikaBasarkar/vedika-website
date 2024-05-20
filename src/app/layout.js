// "use client";
import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const metadata = {
  title: "Vedika",
  description: "Vedika Basarkar is UI UX Designer and developer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
          {children}
        <Footer />
        </body>
    </html>
  );
}
