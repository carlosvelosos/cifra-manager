import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Natiruts - Quero Ser Feliz Também

[Intro] Ebm7  Dbm7  Ebm7  Dbm7
        Ebm7  Dbm7  Ebm7  Dbm7

[Primeira Parte]

  Ebm7
Cresça
Dbm7                          Ebm7
     Independente do que aconteça
Dbm7                           Ebm7
     Eu não quero que você esqueça
Dbm7                          Ebm7  Dbm7
     Que eu gosto muito de você 

  Ebm7
Chego
Dbm7                         Ebm7 
     E sinto o gosto do teu beijo
Dbm7                        Ebm7 
     É muito mais do que desejo
Dbm7                     Ebm7      Dbm7
     Me dá vontade de ficar teu olhar
                        Ebm7       Dbm7
É forte como a água do mar vem me dar
                    Ebm7      Abm
Novo sentido pra viver, encantar a noite

[Refrão]

  Dbm7
Quero ser feliz também
     Abm
Navegar nas águas do teu mar
     Dbm7
Desejar para tudo que vem
         Abm
Flores brancas, paz e Iemanjá

[Ponte]

[Primeira Parte]

  Ebm7
Cresça
Dbm7                          Ebm7
     Independente do que aconteça
Dbm7                           Ebm7
     Eu não quero que você esqueça
Dbm7                          Ebm7  Dbm7
     Que eu gosto muito de você 

  Ebm7
Chego
Dbm7                         Ebm7 
     E sinto o gosto do teu beijo
Dbm7                        Ebm7 
     É muito mais do que desejo
Dbm7                     Ebm7      Dbm7
     Me dá vontade de ficar teu olhar
                        Ebm7       Dbm7
É forte como a água do mar vem me dar
                    Ebm7      Abm
Novo sentido pra viver, encantar a noite

[Refrão]

  Dbm7
Quero ser feliz também
     Abm
Navegar nas águas do teu mar
     Dbm7
Desejar para tudo que vem
         Abm
Flores brancas, paz e Iemanjá

  Dbm7
Quero ser feliz também
     Abm
Navegar nas águas do teu mar
     Dbm7
Desejar para tudo que vem
         Abm
Flores brancas, paz e Iemanjá

[Final] 

E|-------------------------------------------|

----------------- Acordes -----------------
Abm = 4 6 6 4 4 4
Dbm7 = X 4 6 4 5 4
Ebm7 = X 6 8 6 7 6
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function QueroSerFelizTambemPage() {
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
