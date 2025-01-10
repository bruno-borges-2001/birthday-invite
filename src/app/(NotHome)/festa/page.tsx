import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import Bingo from "@/assets/bingo.jpg";
import BoardGames from "@/assets/board-games.jpg";
import FocacciaDiMone from "@/assets/focaccia-di-mone.png";
import Pizza from "@/assets/pizza.jpg";
import VideoGames from "@/assets/video-games.jpg";
import { Button } from "@/components/ui/button";

export default function Festa() {
  return (
    <CardContent className="p-8 flex flex-col items-center space-y-4">
      <CardTitle>A Festa</CardTitle>

      <CardDescription className="text-center">
        <strong>Data:</strong> 05/02/2025 (Quarta Feira) de 19:00 às 00:00
        <br />
        <Link href="/localização" className="underline">
          <strong>Localização:</strong> Aqui em casa!!!
        </Link>
        <br />
        <br />
        Será uma noite muito especial com muita comida, música e muuuuuita
        diversão!!!
        <br />
        <br />
        <strong>Teremos muitas atividades:</strong>
        <div className="flex justify-center flex-wrap place-items-center mt-2 gap-4">
          <div>
            <Image
              className="h-[200px] w-[200px] object-cover rounded-lg"
              src={Bingo}
              alt="bingo"
            />
            <p>Bingo</p>
          </div>
          <div>
            <Image
              className="h-[200px] w-[200px] object-cover rounded-lg"
              src={VideoGames}
              alt="video game"
            />
            <p>Video Games</p>
          </div>
          <div>
            <Image
              className="h-[200px] w-[200px] object-cover rounded-lg"
              src={BoardGames}
              alt="jogos de tabuleiro"
            />
            <p>Jogos de Tabuleiro</p>
          </div>
        </div>
        <br />
        <strong>Comeremos comidas beeem gostosas:</strong>
        <div className="flex justify-center flex-wrap place-items-center mt-2 gap-4">
          <div>
            <Image
              className="h-[200px] w-[200px] object-cover rounded-lg"
              src={Pizza}
              alt="pizza"
            />
            <p>Pizza</p>
          </div>
          <Link
            href="https://www.instagram.com/focacciadimone?igsh=eDluNGt0c3NpZHl4"
            target="_blank"
          >
            <div>
              <Image
                className="h-[200px] w-[200px] object-cover rounded-lg"
                src={FocacciaDiMone}
                alt="video game"
              />
              <p>
                <span className="underline">Bolo di Mone</span>❤️
              </p>
            </div>
          </Link>
        </div>
      </CardDescription>

      <div className="flex flex-1 flex-col gap-6 justify-between w-full pt-6">
        <Link href="/localizacao">
          <Button size="lg">Localização</Button>
        </Link>
        <Link href="/aniversariante">
          <Button size="lg">O aniversariante</Button>
        </Link>
      </div>
    </CardContent>
  );
}
