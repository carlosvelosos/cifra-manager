import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Insegurança

[Intro] Bb7M  F4(7/9)  Bb7M  Ab7M 
        Db7M  Cm7  Cm7(b5)

[Primeira Parte]

Bb7M                            F/A               Gm7
     Essa noite eu notei que você demorou pra dormir
                      Bb7           Eb7M
Caminhou pela casa ligou a tv eu ouvi
            Dm7               Cm7                  F4(7/9)
Você sussurrando chorando baixinho pra não me acordar
Bb7M                          F/A            Gm7
     Se tiver precisando de amigo pra desabafar
                       Bb4(7/9)   Bb7   Eb7M
Se for alguma coisa comigo vamos conversar
                         Dm7                    Cm7  
Eu não quero correr o perigo de um dia você me deixar

[Pré-Refrão]

           Eb7M
Escolhi você pra ser minha mulher
            Gm7
E sou tão fiel a nossa relação
       Ab7M                 F4(7/9)               Bb7M   F4(7/9)
Pelo amor de deus se for insegurança tira do teu coração

[Refrão]

      Bb7M               Bb7
Já é tarde vamos nos deitar
                 Eb7M             Dm7
Se quiser conversar na nossa cama
        Cm7               Gm7
Porque sei que tudo isso passa
           Gb7M             F4(7/9)
Você me abraça e a gente se ama
        Bb7M                 Bb7
Eu não vou te trair com ninguém
               Eb7M             Dm7
Meu amor você tem minha palavra
        Cm7                  F4(7/9)
Porque tudo que um homem precisa

Eu tenho em casa

( Eb7M  Dm7  Cm7  F4(7/9) )

[Primeira Parte]

Bb7M                            F/A               Gm7
     Essa noite eu notei que você demorou pra dormir
                      Bb7           Eb7M
Caminhou pela casa ligou a tv eu ouvi
            Dm7               Cm7                  F4(7/9)
Você sussurrando chorando baixinho pra não me acordar
Bb7M                          F/A            Gm7
     Se tiver precisando de amigo pra desabafar
                       Bb4(7/9)   Bb7   Eb7M
Se for alguma coisa comigo vamos conversar
                         Dm7                    Cm7  
Eu não quero correr o perigo de um dia você me deixar

[Pré-Refrão]

           Eb7M
Escolhi você pra ser minha mulher
            Gm7
E sou tão fiel a nossa relação
       Ab7M                 F4(7/9)               Bb7M   F4(7/9)
Pelo amor de Deus se for insegurança tira do teu coração

[Refrão]

      Bb7M               Bb7
Já é tarde vamos nos deitar
                 Eb7M             Dm7
Se quiser conversar na nossa cama
        Cm7               Gm7
Porque sei que tudo isso passa
           Gb7M             F4(7/9)
Você me abraça e a gente se ama
        Bb7M                 Bb7
Eu não vou te trair com ninguém
               Eb7M             Dm7
Meu amor você tem minha palavra
        Cm7                  F4(7/9)
Porque tudo que um homem precisa
             Bb7M  F4(7/9)
Eu tenho em casa

      Bb7M               Bb7
Já é tarde vamos nos deitar
                 Eb7M             Dm7
Se quiser conversar na nossa cama
        Cm7               Gm7
Porque sei que tudo isso passa
           Gb7M             F4(7/9)
Você me abraça e a gente se ama
        Bb7M                 Bb7
Eu não vou te trair com ninguém
               Eb7M             Dm7
Meu amor você tem minha palavra
        Cm7                  F4(7/9)
Porque tudo que um homem precisa
             Bb7M  F4(7/9)  Bb7M
Eu tenho em casa

----------------- Acordes -----------------
Ab7M = 1 0 1 1
Bb7 = 3 1 3 3
Bb7M = 3 2 3 3
Cm7 = 5 3 4 5
Cm7(b5) = 4 3 P1 1
Db7M = 3 1 1 3
Dm7 = 0 2 1 3
Eb7M = 1 3 3 5
Gb7M = 4 3 2 3
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function InsegurancaPage() {
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
