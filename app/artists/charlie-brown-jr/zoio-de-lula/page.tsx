import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Charlie Brown Jr. - Zóio de Lula

[Intro] Dm  D2  Dm  D2
        Dm  D2  Dm  D2 
        Dm  D2  Dm  D2 
        Dm  D2  Dm  D2 

[Primeira Parte]

         Dm
Tirou a roupa

Entrou no mar
             D2
Pensei: Meu Deus
                  Dm
Que bom que fosse
                         D2
Tu me apresenta essa mulher
                           Dm
Meu irmão, te dava até um doce
              D2
Sem roupa ela é demais
           Dm
Também por isso

Eu creio em Deus
              D2
Meu bom, meu Deus

Meu bom, me traz
       Dm
Ainda bem que eu trouxe
          D2
Até meu guarda-sol
 Dm
Tenho toda tarde
 D2
Tenho a vida inteira
       Dm                    D2
Já se foi aquele tempo da ladeira, irmão
           Dm                    D2
Já que se foi aquele tempo da ladeira, irmão

[Segunda Parte]

          D2
Meu escritório é na praia

Eu tô sempre na área

Mas eu não sou
                 C2
Da tua láia, não
          D2
Meu escritório é na praia

Eu tô sempre na área
            Dm
Mas eu não sou
        D4
Daquela    láia, não

[Refrão]

Então
 Dm           D2
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está
 Dm           D2 
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está

[Terceira Parte]

Meu Deus, me dê um motivo
Pois eu pago tanto mico
Ela me ignora
Na esperança eu ainda fico
Eu tô fritando aqui
Vou entregar, não aguento mais
Mas se eu não falar hoje
Talvez nunca a veja mais

[Quarta Parte]

O dia passa
Horas se estendem
As pessoas ao redor
Nunca me entendem
O dia passa
Horas se estendem
As pessoas ao redor
Nunca me entendem

[Refrão]

Então
 Dm           D2
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está
 Dm           D2 
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está

 Dm           D2
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está
 Dm           D2 
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está

[Solo]

[Quinta Parte]

O dia passa
Horas se estendem
As pessoas ao redor
Nunca me entendem

O dia passa
Horas se estendem
As pessoas ao redor
Nunca me entendem

[Sexta Parte]

         Dm
Tirou a roupa

Entrou no mar
             D2
Pensei: Meu Deus
                  Dm
Que bom que fosse
                         D2
Tu me apresenta essa mulher
                           Dm
Meu irmão, te dava até um doce
              D2
Sem roupa ela é demais
           Dm
Também por isso

Eu creio em Deus
              D2
Meu bom, meu Deus

Meu bom, me traz
       Dm
Ainda bem que eu trouxe
          D2
Até meu guarda-sol
 Dm
Tenho toda tarde
 D2
Tenho a vida inteira
       Dm                    D2
Já se foi aquele tempo da ladeira, irmão
           Dm                    D2
Já que se foi aquele tempo da ladeira, irmão

[Sétima Parte]

          D2
Meu escritório é na praia

Eu tô sempre na área

Mas eu não sou
                 C2
Da tua láia, não
          D2
Meu escritório é na praia

Eu tô sempre na área
            Dm
Mas eu não sou
        D4
Daquela    láia, não

[Refrão]

Então
 Dm           D2
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está
 Dm           D2 
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está

 Dm           D2
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está
 Dm           D2 
Deixe viver, deixe ficar
 Dm                 D2
Deixe estar como está

[Final] Dm  D2  Dm  D2
        Dm  D2  Dm  D2

E|----------------------------------------------------|

----------------- Acordes -----------------
B2*  = X 3 5 5 3 3 - (*A#2 na forma de B2)
C#2*  = X 5 7 7 5 5 - (*C2 na forma de C#2)
C#4*  = X X 0 2 3 3 - (*C4 na forma de C#4)
C#m*  = X 5 7 7 6 5 - (*Cm na forma de C#m)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ZoioDeLulaPage() {
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
