import type { Metadata } from "next";
import "./globals.css";

const title = "Northstack — Become AI-native before your competitors do";
const description =
  "We've built software for years and keep seeing the same inefficiencies. You're the expert in your field — we bring AI-native tools to amplify your team, on the premise that services are the new software.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://northstack.ai"),
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Northstack",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="%230c0e12"/><path d="M16 6l2.2 7.8L26 16l-7.8 2.2L16 26l-2.2-7.8L6 16l7.8-2.2z" fill="%23fff"/></svg>'
          ),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Mark JS as ready before paint so reveal animations only apply when
            JS can run them. No-JS visitors see all content immediately. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-ready')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
