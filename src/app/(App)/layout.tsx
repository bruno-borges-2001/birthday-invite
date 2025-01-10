import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Jersey_10, Poppins } from "next/font/google";
import "../globals.css";

const jersey = Jersey_10({ weight: "400", subsets: ["latin", "latin-ext"] });

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Aniversário do Bruno",
  description: "Convite do meu aniversário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          jersey.className,
          poppins.className,
          "antialiased flex flex-col"
        )}
      >
        <div className="px-4 py-20 sm:px-20 grow flex">
          <Card className="grow w-full h-full max-h-[calc(100dvh-10rem)] max-w-screen-md overflow-auto">
            {children}
          </Card>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
