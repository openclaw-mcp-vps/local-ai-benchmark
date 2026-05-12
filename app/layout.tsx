import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local AI Benchmark — Test & Compare Local AI Models",
  description: "Benchmark local AI models for your specific use case. Upload test datasets, compare models, and get detailed performance reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="28b7f8a6-adf6-449b-9bda-c94f71de517e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
