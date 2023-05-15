"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        themes={["light", "dark"]}
        defaultTheme="dark"
        enableSystem={false}
        attribute="class"
        enableColorScheme={false}
      >
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
