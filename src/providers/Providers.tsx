"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { RecoilRoot } from "recoil";
type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider
          themes={["light", "dark"]}
          defaultTheme="dark"
          enableSystem={false}
          attribute="class"
          enableColorScheme={false}
        >
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};
export default Providers;
