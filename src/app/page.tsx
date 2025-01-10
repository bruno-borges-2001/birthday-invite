import me from "@/assets/me.jpg";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <Image
        src={me}
        alt="Euzinho"
        className="h-[200px] w-[200px] rounded-full object-cover mx-auto"
      />

      <CardTitle className="mx-auto text-center">
        Você está convidado para a festa dessa pessoinha aqui!
      </CardTitle>

      <CardDescription className="text-center">
        Se você está recebendo esse convite é por que você faz parte da minha
        família ou é tão especial que eu te considero como parte da minha.
        <br />
        <br />
        Por isso eu adoraria que você pudesse vir comemorar comigo em uma festa
        muito especial que eu estou preparando.
        <br />
        <br />
        Preparei esse convite com todas as informações que você precisa saber
        sobre a festa, use os botões abaixo para explorar esse site que eu fiz
        com muito carinho:
      </CardDescription>

      <div className="flex flex-1 flex-col gap-6 justify-between w-full pt-6">
        <Link href="/festa">
          <Button size="lg">A Festa</Button>
        </Link>
        <Link href="/aniversariante">
          <Button size="lg">O aniversariante</Button>
        </Link>
        <Link href="/localizacao">
          <Button size="lg">Localização</Button>
        </Link>
        <Link href="/rsvp">
          <Button size="lg">Confirme Sua Presença</Button>
        </Link>
      </div>
    </CardContent>
  );
}
