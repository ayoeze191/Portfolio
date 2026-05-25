import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "EazyCode",
  description: "Eazy's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ThemeProvider attribute="class"> */}
        <Header />
        <div className="mt-[64px]">{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
