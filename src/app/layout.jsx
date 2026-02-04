import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Tinted Media",
  description: "The new wave of digital storytelling. High-end marketing, content, and branding for the next generation.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
