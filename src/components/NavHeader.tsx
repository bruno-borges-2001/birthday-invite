"use client";

import Banner from "@/assets/banner.jpg";
import { cn } from "@/lib/utils";
import { CaretLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import _Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
      replace
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

        <div className="px-2 flex items-center grow gap-4 z-10">
          <div className="hidden md:flex items-center gap-4 text-primary-foreground">
            <Link href="/festa">A Festa</Link>
            <Link href="/localizacao">Localização</Link>
            <Link href="/aniversariante">O Aniversariante</Link>
            <Link href="/rsvp">Confirme a sua Presença</Link>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" className="ml-auto md:hidden">
                <HamburgerMenuIcon height={24} width={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="px-0 py-2">
              <div className="flex flex-col text-lg">
                <_Link className="hover:bg-muted px-3 py-1" href="/festa">
                  A Festa
                </_Link>
                <_Link className="hover:bg-muted px-3 py-1" href="/localizacao">
                  Localização
                </_Link>
                <_Link
                  className="hover:bg-muted px-3 py-1"
                  href="/aniversariante"
                >
                  O Aniversariante
                </_Link>
                <_Link className="hover:bg-muted px-3 py-1" href="/rsvp">
                  Confirme a sua Presença
                </_Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
