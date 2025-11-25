"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// Importamos os tipos para o TypeScript não reclamar
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}