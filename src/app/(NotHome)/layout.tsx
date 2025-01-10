import GoBackButtonHeader from "@/components/GoBackButton";
import type { PropsWithChildren } from "react";

export default function NotHomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <GoBackButtonHeader />
      {children}
    </>
  );
}
