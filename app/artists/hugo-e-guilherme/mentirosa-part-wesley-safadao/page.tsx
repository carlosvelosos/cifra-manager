import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/hugo-guilherme/mentirosa-part-wesley-safadao/

const cifra = `Hugo & Guilherme - Mentirosa (part. Wesley Safadão)

[Intro] <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>Dm</b>  <b>F</b>  <b>G</b>

[Primeira Parte]

<b>C</b>           <b>G/B</b>          <b>Am</b>   <b>Am7/G</b>
  Sumiu de mim ontem na festa
    <b>F</b>                         <b>G</b>
Só de manhã foi dar o ar da graça
<b>C</b>          <b>G/B</b>                <b>Am</b>
  Onde cê tava? Que olheira é essa?
     <b>F</b>                           <b>G</b>
Que bom que cê já veio aqui pra casa

<b>C</b>              <b>G/B</b>           <b>Am</b>
  Porque eu já arrumei suas coisas
         <b>Em</b>                 <b>F</b>
Tá tudo dentro desse saco preto
                     <b>C/E</b>
Mas antes de ir embora
<b>Dm</b>                 <b>G</b>
   Me responde primeiro

[Refrão]

                                 <b>C</b>
Por que que cê é assim tão mentirosa?
   <b>G/B</b>                  <b>Am</b>
O povo lá em casa te detesta
                                <b>Dm</b>
Se eu chegar com essa notícia agora
         <b>F</b>                    <b>G</b>
Vai ser pelo menos 3 dias de festa

                                 <b>C</b>
Por que que cê é assim tão mentirosa?
   <b>G/B</b>                  <b>Am</b>
O povo lá em casa te detesta
                                <b>Dm</b>
Se eu chegar com essa notícia agora
         <b>F</b>                    <b>G</b>
Vai ser pelo menos 3 dias de festa

                                 <b>C</b>
Por que que cê é assim tão mentirosa?

( <b>G/B</b>  <b>Am</b>  <b>Dm</b>  <b>F</b>  <b>G</b> )

[Primeira Parte]

<b>C</b>          <b>G/B</b>                <b>Am</b>
  Onde cê tava? Que olheira é essa?
     <b>F</b>                           <b>G</b>
Que bom que cê já veio aqui pra casa

<b>C</b>              <b>G/B</b>           <b>Am</b>
  Porque eu já arrumei suas coisas
         <b>Em</b>                 <b>F</b>
Tá tudo dentro desse saco preto
                     <b>C/E</b>
Mas antes de ir embora
<b>Dm</b>                 <b>G</b>
   Me responde primeiro

[Refrão]

                                 <b>C</b>
Por que que cê é assim tão mentirosa?
   <b>G/B</b>                  <b>Am</b>
O povo lá em casa te detesta
                                <b>Dm</b>
Se eu chegar com essa notícia agora
         <b>F</b>                    <b>G</b>
Vai ser pelo menos 3 dias de festa

                                 <b>C</b>
Por que que cê é assim tão mentirosa?
   <b>G/B</b>                  <b>Am</b>
O povo lá em casa te detesta
                                <b>Dm</b>
Se eu chegar com essa notícia agora
         <b>F</b>                    <b>G</b>
Vai ser pelo menos 3 dias de festa

                                 <b>C</b>
Por que que cê é assim tão mentirosa?

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7/G = 3 0 2 0 1 0
C = X 3 2 0 1 0
C/E = 0 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MentirosaPartWesleySafadaoPage() {
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
