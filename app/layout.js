import "./globals.css";
import Header from "./Header";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "EazyCode",
  description: "Eazy's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="mt-[64px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
