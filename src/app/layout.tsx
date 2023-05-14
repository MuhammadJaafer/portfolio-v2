import { Quicksand } from "next/font/google";
import "../styles/GlobalStyles.scss";
import styles from "../styles/Layout/MainLayout.module.scss";
const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Portfolio Website" />
        <title>Muhammad Jaafar</title>
      </head>
      <body className={quicksand.className}>
        <main className={styles.layout}> {children}</main>
      </body>
    </html>
  );
}
