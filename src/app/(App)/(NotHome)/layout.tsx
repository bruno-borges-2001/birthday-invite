import NavHeader from "@/components/NavHeader";
import type { PropsWithChildren } from "react";

export default function NotHomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavHeader />
      {children}
    </>
  );
}
