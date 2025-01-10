import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import Codashop from "@/assets/codashop.png";
import Image from "next/image";

export default function Presente() {
  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <CardTitle>Ideias de Presentes</CardTitle>

      <CardDescription>
        <strong>
          Antes de qualquer coisa, já aviso de novo: eu não preciso de nada, não
          se sinta obrigado a comprar nada para mim, sua presença já será um
          presente muito especial pra mim
        </strong>
        <br />
        <br />
        Então você insiste em me dar algo? Tudo bem, aqui vão algumas ideias:
        <ul className="list-disc list-inside">
          <li>
            A primeira é a mais padrão de todas: uma roupinha. Para não
            perdermos o elemento surpresa esses são os meus tamanhos:
            <br />
            <strong>- Camiseta:</strong> P
            <br />
            <strong>- Calça:</strong> 38
            <br />
            <strong>- Calçado:</strong> 39/40
          </li>
          <br />
          <li>
            A segunda ideia é um pouco mais abstrata: algo que te faça lembrar
            de mim. O que? ai já é pedir demais, minha criatividade é bem
            limitada, mas se você achar algo que te faça lembrar de mim, eu vou
            ficar muito feliz.
          </li>
          <br />
          <li>
            A terceira ideia é a mais legal para mim mas que provavelmente não
            fará nenhum sentido para você: créditos no joguinho que eu jogo.
            Atualmente estou adorando jogar Honkai Start Rail, e esse jogo
            possui uma moeda paga que é usada para comprar alguns items dentro
            dele. Se você quiser me dar isso é possível através desse link:
            <br />
            <Link
              href="https://www.codashop.com/pt-br/honkai-star-rail"
              target="_blank"
              className="font-bold underline"
            >
              codashop.com/pt-br/honkai-star-rail
            </Link>
            <br />
            Basta colocar o meu UID{" "}
            <strong>
              <q>614975938</q>
            </strong>
            , selecionar o servidor{" "}
            <strong>
              <q>America</q>
            </strong>{" "}
            e selecionar qualquer valor que você preferir
            <br />
            <br />
            <Image src={Codashop} alt="codashop screenshot" />
          </li>
        </ul>
        <br />E é isso, eu adoraria se você pudesse vir na minha festa, mas se
        não for possível, está tudo bem também, sua presença na minha vida já é
        um grande presente
      </CardDescription>
    </CardContent>
  );
}
