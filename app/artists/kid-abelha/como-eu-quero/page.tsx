import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/kid-abelha/como-eu-quero/

const cifra = `Kid Abelha - Como Eu Quero 

[Intro] <b>Dm</b>  <b>F7M</b>  <b>C</b>  <b>G</b>
        <b>Dm</b>  <b>F7M</b>

[Primeira Parte]

 <b>C</b>
Diz pra eu ficar muda
     <b>G</b>
Faz cara de mistério
 <b>Am</b>
Tira essa bermuda
         <b>F7M</b>
Que eu quero você sério

  <b>C</b>
Tramas do sucesso
       <b>G</b>
Mundo particular
 <b>Am</b>
Solos de guitarra
     <b>F7M</b>
Não vão me conquistar

[Refrão]

<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero
<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero

[Segunda Parte]

    <b>C</b>
O que você precisa
           <b>G</b>
É de um retoque total
      <b>Am</b>
Vou transformar o seu rascunho
   <b>F7M</b>
Em arte final

  <b>C</b>
Agora não tem jeito
<b>G</b>
  Cê tá numa cilada
 <b>Am</b>
Cada um por si
          <b>F7M</b>
Você por mim e mais nada

[Refrão]

<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero
<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero

[Terceira Parte]

<b>Dm</b>           <b>F7M</b>
   Longe do meu domínio
<b>C</b>                   <b>G</b>
  Cê vai de mal a pior
<b>Dm</b>                  <b>F7M</b>
   Vem que eu te ensino

Como ser bem melhor

<b>Dm</b>           <b>F7M</b>
   Longe do meu domínio
<b>C</b>                   <b>G</b>
  Cê vai de mal a pior
<b>Dm</b>                  <b>F7M</b>
   Vem que eu te ensino

Como ser bem melhor

[Refrão]

<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero
<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero

<b>Am</b>       <b>Em</b>
Uh, eu quero você
          <b>F7M</b>
Como eu quero
<b>Am</b>  <b>Em</b>           <b>F7M</b>
Uh,    como eu quero

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F7M = X X 3 2 1 0
G = 3 2 0 0 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ComoEuQueroPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/kid-abelha/como-eu-quero/"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
