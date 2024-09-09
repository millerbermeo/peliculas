import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Movies",
};

export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
