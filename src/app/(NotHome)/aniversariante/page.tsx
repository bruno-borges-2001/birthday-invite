import Me from "@/assets/me.jpg";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Aniversariante() {
  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <CardTitle>O Aniversariante</CardTitle>

      <Image src={Me} alt="eu" className="h-[200px] w-auto rounded-2xl" />

      <CardDescription>
        Caso você ainda não me conheça, Oi! Eu sou o <strong>Bruno</strong>.{" "}
        <span className="text-xs line-through">
          (caso você me conheça, eu ainda sou o Bruno)
        </span>
        .
        <br />
        <br />
        Há exatos 24 anos, exatamente no dia 5 de fevereiro de 2001, nascia um
        pequeno menininho. Esse menininho cresceu e hoje está organizando sua
        primeira festa de aniversário.
        <br />
        <br />
        Se você está lendo isso é por que você tem uma importância muito grande
        na minha vida, e é uma pessoa muito especial pra mim (mesmo se eu não
        for muito bom em demonstrar isso, saiba que é verdade). Eu adoraria que
        você pudesse comparecer na minha festa e compartilhar este dia especial
        comigo.
        <br />
        <br />
        Aí você deve estar se perguntando:{" "}
        <q>
          Nossa, essa festa parece que vai ser muito divertida, com certeza eu
          vou participar, mas o que devo dar de presente para esse homem lindo?
        </q>
        . E eu respondo:{" "}
        <strong>
          <q>
            Nada! Eu não preciso de nada, a sua presença já é o suficiente para
            mim.
          </q>
        </strong>
        <br />
        <br />
        Mas para aqueles que mesmo assim ainda insistem em dar alguma coisa
        (direcionando isso para algumas pessoas específicas que insistem nisso -
        você que está lendo sabe que é você), compartilho aqui uma lista com
        algumas ideias: (de novo,{" "}
        <strong>não se sinta obrigado a me dar nada!</strong>)
        <div className="pt-4">
          <Link href="/aniversariante/presente">
            <Button size="lg">Ideias de Presentes</Button>
          </Link>
        </div>
      </CardDescription>
    </CardContent>
  );
}
