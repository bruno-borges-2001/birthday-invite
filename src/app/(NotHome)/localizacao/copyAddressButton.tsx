"use client";

import { CardDescription } from "@/components/ui/card";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <CardDescription
      className="text-center cursor-pointer underline"
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(
          "R. Felipe Schmidt, 869 - Centro, Florianópolis - SC 88010-001"
        );
      }}
    >
      <div>
        <strong>Endereço:</strong> R. Felipe Schmidt, 869 - Centro,
        Florianópolis - SC{" "}
        {copied ? (
          <CheckIcon height={20} width={20} className="inline" />
        ) : (
          <CopyIcon height={20} width={20} className="inline" />
        )}
      </div>
      <div>
        <strong>CEP:</strong> 88010-001
      </div>
    </CardDescription>
  );
}
