// layout.js
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Import the ThemeProvider

const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
        <meta name="description" content="Yehonatan" />
      </head>
      <body className={styles.container}>
        <ThemeProvider attribute="class">
          {/* Dynamically loaded Navbar */}
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
