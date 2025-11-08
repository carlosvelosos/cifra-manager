import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/gilsons/varias-queixas/

const cifra = `Gilsons - Várias Queixas

[Primeira Parte]

        <b>Am7(9)</b>  
Pode fazer o que quiser
        <b>Em7</b>
Até me machucar
            <b>Am7(9)</b>              <b>Em7</b>
Transborda no meu coração, só amor!
           <b>Am7(9)</b>
Desde o momento que eu te vi
            <b>Em7</b>
Não pude acreditar
               <b>Am7(9)</b>             <b>Em7</b>
Mas se eu não conseguir, vem me amar

[Refrão]

               <b>G7M</b>
Várias queixas
                     <b>Am7(9)</b>
Várias queixas de você
<b>C7</b>                     <b>G7M(13)</b>
   Por que fez isso comigo
                      <b>Am7(9)</b>
Estamos junto e misturado
     <b>C7</b>                    <b>G7M(13)</b>  
Meu bem quero ser seu namorado
               <b>G7M</b>
Várias queixas
                     <b>Am7(9)</b>
Várias queixas de você
<b>C7</b>                     <b>G7M(13)</b>
   Por que fez isso comigo
                      <b>Am7(9)</b>
Estamos junto e misturado
     <b>C7</b>                    <b>G7M(13)</b>
Meu bem quero ser seu namorado

[Segunda Parte]
 
               <b>G7M(13)</b>
O meu corpo balança 
                           <b>Am7(9)</b>
Querendo encontrar o seu amor
                        <b>C7</b>  
O swingue do Olodum me leva
             <b>G7M(13)</b>
Com você eu vou 

O meu corpo balança 
                           <b>Am7(9)</b>
Querendo encontrar o seu amor
                        <b>C7</b>  
O swingue do Olodum me leva
             <b>G7M(13)</b> 
Com você eu vou 

Me leva  amor
     <b>Am7(9)</b>
Meu bem querer
    <b>C7</b>                 
Me leva que assim
                     <b>G7M(13)</b>
Eu fico louco com você
      
Me leva  amor
     <b>Am7(9)</b>
Meu bem querer
    <b>C7</b>                 
Me leva que assim
                     <b>G7M(13)</b>
Eu fico louco com você

[Refrão]

               <b>G7M</b>
Várias queixas
                     <b>Am7(9)</b>
Várias queixas de você
<b>C7</b>                     <b>G7M(13)</b>
   Por que fez isso comigo
                      <b>Am7(9)</b>
Estamos junto e misturado
     <b>C7</b>                    <b>G7M(13)</b> 
Meu bem quero ser seu namorado
            
Várias queixas
                     <b>Am7(9)</b>
Várias queixas de você
<b>C7</b>                     <b>G7M(13)</b>
   Por que fez isso comigo
                      <b>Am7(9)</b>
Estamos junto e misturado
     <b>C7</b>                    <b>G7M(13)</b>
Meu bem quero ser seu namorado
     <b>Am7(9)</b>                 <b>G7M(13)</b>
Meu bem  quero ser seu namorado
     <b>Am7(9)</b>                 <b>G7M(13)</b>
Meu bem  quero ser seu namorado
     <b>C7M</b>        <b>Cm7</b>          
Meu bem  quero ser seu namorado
<b>G7M</b>
    Várias queixas

----------------- Acordes -----------------
Am7(9) = X 0 5 5 0 0
C7 = X 3 5 3 5 3
C7M = X 3 5 4 5 3
Cm7 = X 3 5 3 4 3
Em7 = 0 X 5 7 0 0
G7M = 3 X 4 4 3 X
G7M(13) = 3 X 4 4 5 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VariasQueixasPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/gilsons/varias-queixas/"
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
