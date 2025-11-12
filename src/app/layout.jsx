import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../fonts/Poppins-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../fonts/Poppins-Light.ttf",
      weight: "200",
      style: "light",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
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
