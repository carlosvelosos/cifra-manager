import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Rastapé - Colo de menina

[Intro] D  A  Bm
        G  A  D  A
        Bm  G  A  D

  D            A                 Bm   (G A)
 A lua quando brilha eu falo de amor
 D                A               Bm   (G A)
No gingado desse xote sinto teu calor
 D          A               Bm      (G A)
A noite acordado sonho com você  Iê iê Iê
        D               A                 Bm   (G A)
O som ligado e fico perturbado sem ter o que fazer

D              A           Bm           G       A    D
  E tento sair dessa rotina não quero não colo de mamãe
           A            Bm
  Só quero colo de menina
                    G                 A   D
  E pouco a pouco conquistar o teu coração  (2x)

   F#7                 Bm
Um outro dia a gente se vê
          G                 A       D
Vou "prum" lugar que lembre do sertão
 F#7                         Bm
E canto um xote pra te convencer
        G                 A    D
Vou te ensinar como viver é bom

        A          Bm
E amar até,e amar até
   G         A       D
 Até quando Deus quiser 

( D  A  Bm )
( G  A  D  A )
( Bm  G  A  D )

  D               A
A lua quando brilha eu falo de amor
   Bm                  (G A)
No gingado desse xote sinto teu calor
  D        A               Bm       G A
A noite acordado sonho com você  Iê iê Iê
      D                   A                Bm    G A
O som ligado e fico perturbado sem ter o que fazer

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
F#7 = 2 4 2 3 2 2
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ColoDeMeninaPage() {
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
