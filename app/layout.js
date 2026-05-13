import { Playfair_Display, Onest } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Cachai Solutions",
  description: "Escalamos marcas de verdad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${onest.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}