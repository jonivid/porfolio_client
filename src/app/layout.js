import dynamic from "next/dynamic";
import styles from "./page.module.css";

// Dynamically import the Navbar component with no SSR
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can include meta tags, title, and other head elements here */}
        <title>Your App Title</title>
        <meta name="description" content="Your app description" />
      </head>
      <body className={styles.container}>
        {/* Dynamically loaded Navbar */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
