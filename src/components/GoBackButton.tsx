"use client";

import Banner from "@/assets/banner.jpg";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function GoBackButtonHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 px-4 pt-4 z-10">
      <Button
        size="icon"
        className="absolute top-6 left-6"
        onClick={() => router.back()}
      >
        <CaretLeftIcon height={24} width={24} />
      </Button>
      <Image
        src={Banner}
        alt="banner"
        className="rounded-t-md object-cover h-[50px]"
      />
    </div>
  );
}
