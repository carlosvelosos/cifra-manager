import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/ela-so-vai-se-for-de-camarote/

const cifra = `Revelacao - Ela So Vai Se For De Camarote

[Intro]
         <b>Bb</b>                   <b>A7</b>            <b>Dm</b>            <b>F7</b>
13 13 10 13 13 10 10 13 13 10 21 - 32 21 10 13 12 11 10 - 17 13 15 10
         <b>Bb</b>                   <b>A7</b>            <b>Dm</b>
13 13 10 13 13 10 10 13 13 10 21 - 32 21 13 23


<b>F7</b>   <b>Bb</b>  <b>A7</b>  <b>Dm</b>  <b>Bb</b>  <b>F7</b>  <b>Bb</b>                  <b>A7</b>                 <b>Dm</b>
 Ei, ei, ei, ei, ei, ei, ei, ela é gata de elite só curte área VIP(2x)

<b>Dm</b>          <b>G7</b>                  <b>Dm</b>
Rainha da balada, adora uma batucada
                <b>F7/9</b>                <b>Bb7+</b> ^ <b>Bb6</b>
É sempre bem chegada em qualquer pagode
                <b>Em7/5b</b>              <b>A7</b>                    <b>Dm</b>
Bem em cima da média, um tremendo filé, e só chega quem pode
                <b>G7</b>                 <b>Dm</b>               <b>F7/9</b>                <b>Bb7+</b> ^ <b>Bb6</b>
Tá sempre perfumada, de roupa importada, vagabundo azarando e ela nem ai
                 <b>Em7/5b</b>                <b>A7</b>                   <b>Dm</b>           <b>F7</b>
Se liga ai segurança trás a pulseirinha que ela quer subir.  (Ela só vai)

       <b>Bb7+</b>                     <b>A7</b>                <b>Dm</b> <b>F7/9</b>
Ela só vai, ela só vai, ela só vai se for de camarote
   <b>Bb7+</b>                     <b>A7</b>                <b>Dm</b> <b>F7/9</b>
Ela só vai, ela só vai, ela só vai se for de camarote
   <b>Bb7+</b>                     <b>A7</b>                <b>Dm</b> <b>F7/9</b>
Ela só vai, ela só vai, ela só vai se for de camarote
   <b>Bb7+</b>                     <b>A7</b>
Ela só vai, ela só vai, ela só vai se for de camarote

  <b>Dm</b>        <b>F7/9</b>         <b>Bb7+</b>                 <b>A7</b>                <b>Dm</b>
Ela rouba a cena, ela é turbinada, ela é saliente, toda marombada
          <b>F7/9</b>           <b>Bb7+</b>                  <b>A7</b>                   <b>Dm</b>
Ela é atraente toda desenhada, ela é gata de elite e só curte área vip`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ElaSoVaiSeForDeCamarotePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/ela-so-vai-se-for-de-camarote/"
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
