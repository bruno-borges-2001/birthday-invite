"use client";

import Banner from "@/assets/banner.jpg";
import { cn } from "@/lib/utils";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import _Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";

function Link({ href, children, ...rest }: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <_Link
      href={href}
      {...rest}
      className={cn(
        "hover:underline cursor-pointer font-semibold",
        active && "pointer-events-none underline"
      )}
    >
      {children}
    </_Link>
  );
}

export default function NavHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 px-4 pt-4 z-10">
      <Button
        size="icon"
        className="absolute top-6 left-6 z-20"
        onClick={() => router.back()}
      >
        <CaretLeftIcon height={24} width={24} />
      </Button>

      <div className="relative h-[50px] flex items-center pl-[3.25rem]">
        <Image
          src={Banner}
          alt="banner"
          className="absolute rounded-t-md object-cover h-[50px] inset-0"
        />

        <div className="px-2 flex gap-4 gap-y-0 flex-wrap z-10 text-primary-foreground">
          <Link href="/festa">A Festa</Link>
          <Link href="/localizacao">Localização</Link>
          <Link href="/aniversariante">O Aniversariante</Link>
          <Link href="/rsvp">Confirme a sua Presença</Link>
        </div>
      </div>
    </div>
  );
}
