import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CopyAddressButton from "./copyAddressButton";

export default function Localizacao() {
  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <CardTitle>Localização</CardTitle>

      <CopyAddressButton />

      <Link href="https://maps.app.goo.gl/Fm1VerBk91cFDGdDA" target="_blank">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.013577147453!2d-48.56039982453669!3d-27.593108676248193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739a1706703b1%3A0xc80df472930f3ddc!2sTop%20Vision%20Residence!5e0!3m2!1spt-BR!2sbr!4v1736469088971!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          className="max-w-full pointer-events-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Link>

      <div className="flex flex-1 flex-col gap-6 justify-between w-full pt-6">
        <Link href="/aniversariante">
          <Button size="lg">O aniversariante</Button>
        </Link>
      </div>
    </CardContent>
  );
}
