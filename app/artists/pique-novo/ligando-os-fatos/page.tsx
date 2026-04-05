import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pique-novo/ligando-os-fatos/#

const cifra = `Pique Novo - Ligando Os Fatos

<b>E7M</b>                      <b>C#m</b>
 Pode até falar que nada aconteceu
                          <b>A7M</b>
Mas o seu olhar não me engana
              <b>F#m7</b>
Te conheço bem melhor que qualquer um
<b>B7(4)</b>                       <b>C#m</b>
Demorou pra levantar da cama
                     <b>G#m7(11)</b>
Se arrumou depressa e nem me beijou
                        <b>A7M</b>
Disse um "eu te amo" que já decorou
<b>E/G#</b>     <b>F#m7</b>   <b>B4</b>
Me deixou perdido

<b>A7M</b>                         <b>B/A</b>
 Não me olhou nos olhos ao tomar café
                           <b>G#m7</b>
Me encarou por menos de um segundo
                     <b>C#7</b>
Um beijo gelado pra se despedir
                    <b>F#m7(11)</b>
Um silêncio que dizia tudo
                       <b>G#m7(11)</b>
Entrou no seu carro e ligou o som
                   <b>F#m7</b>             
"Se" do Djavan foi saindo do tom
<b>B4</b>          <b>A7M</b>  <b>E/G#</b> <b>Fm7</b> <b>B4</b> 
Ao te ver partir

<b>E7M</b>    
 Eu Sei que deve estar com ele agora
<b>F#/E</b>
Só de imaginar meu peito chora
<b>A7M</b>                 <b>E/G#</b>
Eu não vou te ligar, nem procurar saber
<b>F#m7</b>                        <b>B4</b>
Fique a vontade pra me esquecer
<b>C#m</b>                          
Eu vou te confessar perdi meu chão agora
<b>F#/Bb</b>
Difícil acreditar que você foi embora
<b>A7M</b>                         <b>E/G#</b>
Eu fui ligando os fatos até perceber

<b>C7M</b>               <b>B4</b>  
Vou tentar continuar a vida
       <b>E</b>   <b>B4</b>
Sem você`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function LigandoOsFatosPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pique-novo/ligando-os-fatos/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
