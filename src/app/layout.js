import localFont from "next/font/local";
import "./globals.css";

const alienor = localFont({
  src: "./fonts/Alienor.woff",
  variable: "--font-alienor",
  weight: "100 900",
});
const cocomat = localFont({
  src: "./fonts/Cocomat.ttf",
  variable: "--font-cocomat",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

/*        */
export const metadata = {
  title: "Les Gamins Marais",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${alienor.variable}  ${inter.variable} ${cocomat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
