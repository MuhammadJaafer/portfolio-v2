import Navbar from "@/components/Navbar/Desktop/Navbar";
import Providers from "@/providers/Providers";
import { Quicksand } from "next/font/google";
import "../styles/GlobalStyles.scss";
import LinkStyles from "../styles/Layout/Links.module.scss";
import styles from "../styles/Layout/MainLayout.module.scss";
const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Portfolio Website" />
        <title>Muhammad Jaafar</title>
      </head>
      <body className={quicksand.className}>
        <main className={styles.layout}>
          <Providers>
            <Navbar />

            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
