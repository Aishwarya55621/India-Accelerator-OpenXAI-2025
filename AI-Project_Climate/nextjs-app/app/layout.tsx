import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // ✅ Import Poppins from Google Fonts
import "./globals.css";

// ✅ Load Poppins with selected weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dead-Earth Project - Climate Change Simulation",
  description:
    "Interactive 3D globe simulation showing the devastating effects of pollution and climate change on our planet.",
  keywords:
    "climate change, environment, pollution, simulation, 3D globe, education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        <div className="min-h-screen font-sans">{children}</div>
      </body>
    </html>
  );
}
