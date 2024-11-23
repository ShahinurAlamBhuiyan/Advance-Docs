import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



export const metadata: Metadata = {
  title: "Task Arranger with AI Integrated",
  description: "Created by Shahinur Alam Bhuiyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>

          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
