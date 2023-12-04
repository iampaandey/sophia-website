import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Session Musician SD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} text-harmonyPalette-slate-800 container mx-auto p-4`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="flex justify-between py-8 ">
      <ul>
        <li>
          <Link href={"/"}>
            <h1>Sophia Dignam</h1>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"/latest-work"}>Latest work</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <hr />
      <address className="py-8">
        <p>
          <strong>Sophia Dignam</strong>
        </p>
        <ul>
          <li>
            <a href="mailto:contact@sophiadignam.co.uk">
              contact@sophiadignam.co.uk
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sophiayadig/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </address>
      <hr />
      <nav className="py-8">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/latest-work"}>Latest Work</Link>
          </li>
        </ul>
      </nav>
      <p>
        <small>I hope you enjoyed my website! Built by Tom ❤️</small>
      </p>
      <p>
        <small>© Copyright 2023</small>
      </p>
    </footer>
  );
}
