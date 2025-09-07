import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltasamba - Gamei

    Cm7      F7(9)
Quando eu vi
        Bb7(9)  Bb7(9-)
Me amarrei
                Eb7M
No teu sorriso sonhei
Dm7(5-)            G7(13-)
Eu sonhava que o sol
 Cm7         Cm7/Bb
Namorava o luar
 Aº
Que as nuvens do céu

 Dm7(5-)             G7(13-)
Beijavam o azul do mar

 Cm7  F7(9)
Meu amor
         Bb7(9)  Bb7(9-)
Meu prazer
                Eb7M
Minha paixão é você
 Dm7(5-)          G7(13-)
Deusa linda do amor
 Cm7           Cm7/Bb
Toma conta de mim
Aº
O destino traçou
  Dm7(5-)           G7(13-)
Pra nunca mais ter fim

 Fm7(9)            Bb7(9)
Te amo e não tem jeito
 Fm7(9)        Bb7(9)
Você é minha sina
 Fm7(9)            Bb7(9)  Cm7  C7
Te amo meu amor, menina

 Fm7(9)            Bb7(9)
Te amo e não tem jeito
 Fm7(9)        Bb7(9)
Você me alucina
 Fm7(9)           Bb7(9)     Cm7  C7
Te amar é bom demais, menina

 F7M              F6
Gamei, no corpo bronzeado
 Bbm7
Ganhei, um beijo assanhado
 Am7            D7(9-)
Fiquei, todinho arrepiado
 Gm7            C7(9)
Parei, surpreso e acanhado
 F7M              F6
Dancei, de rostinho colado
Bbm7
Olhei, bumbum arrebitado
 Am7            D7(9-)
Gostei, perfume importado
Gm7               C7(9)
Amei, já sou teu namorado
 F7M  Dm7(5-)  G7(13-)  Cm7
Gamei

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Aº = 5 X 4 5 4 X
Bb7(9) = X 1 0 1 1 X
Bb7(9-) = 6 X 6 4 3 X
Bbm7 = X 1 3 1 2 1
C7 = X 3 2 3 1 X
C7(9) = X 3 2 3 3 X
Cm7 = X 3 5 3 4 3
Cm7/Bb = 6 3 5 3 4 3
D7(9-) = X 5 4 5 4 X
Dm7(5-) = X X 0 1 1 1
Eb7M = X X 1 3 3 3
F6 = 1 X 0 2 1 X
F7(9) = X X 3 2 4 3
F7M = 1 X 2 2 1 X
Fm7(9) = X X 3 1 4 3
G7(13-) = 3 X 3 4 4 3
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GameiPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
