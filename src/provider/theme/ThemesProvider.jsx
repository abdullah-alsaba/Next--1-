"use client";

import React from "react";

import { ThemeProvider } from "next-themes";

const ThemesProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemesProvider;
