import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Importe o ThemeProvider que criamos
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Vinícius Brandão",
  description: "Desenvolvedor Web & Mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Adicione 'suppressHydrationWarning' no html para evitar erro de mismatch
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 3. Envolva o children com o ThemeProvider */}
        {/* attribute="class" é OBRIGATÓRIO para funcionar com Tailwind (dark:bg-...) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}