import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <nav>
            <Link className="nav-link" href="/">
              Home
            </Link>
            <div>
              <Link className="nav-link" href="/register">
                Register
              </Link>
              <Link className="nav-link" href="/dashboard">
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
