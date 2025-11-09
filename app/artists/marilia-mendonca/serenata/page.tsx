import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/serenata/

const cifra = `Marília Mendonça - Serenata

[Intro] <b>D</b>  <b>G</b>

<span class="tablatura"><span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----------2-0-2/4----2/4--0------------------------|
A|--------------------5-------------------------------|
E|--2/5-5-5-------------------------------------------|</span></span>

[Primeira Parte]

        <b>D</b>
Foi chegando e chegou
       <b>A9</b>
Já entrando, olhando
     <b>Em7</b>
E mudando meus planos
    <b>G</b>                   <b>Gm6(9)</b>
O que é que tá rolando?

[Pré-Refrão]

                  <b>D</b>
Ele chegou na voadora
         <b>A9</b>                            <b>Em7</b>
E o coração, tadin, num golpe foi pra lona
<b>G</b>                        <b>D</b>
 Rancou de mim minhas bebidas e a farra
    <b>A9</b>                    <b>G</b>
Só consigo pensar em serenata

[Refrão]

                    <b>D</b>
Se amar assim for brega
             <b>A9</b>                        <b>Em7</b>
Me chama de Marília Mendonça ou de Falcão
           <b>G</b>
Meu show agora é só voz e violão
<b>D</b>                     <b>A</b>
 Assim, debaixo da janela
                 <b>Em7</b>
Jantar a luz de velas
             <b>G</b>                             <b>D</b>
Agora é momozin ou momozão, eu sei que é brega

             <b>A9</b>                        <b>Em7</b>
Me chama de Marília Mendonça ou de Falcão
           <b>G</b>
Meu show agora é só voz e violão
<b>D</b>                     <b>A</b>
 Assim, debaixo da janela
                 <b>Em7</b>
Jantar a luz de velas
             <b>G</b>                             <b>D</b>
Agora é momozin ou momozão, eu sei que é brega

[Solo] <b>D</b>  <b>A9</b>  <b>Em7</b>  <b>G</b>
       <b>D</b>  <b>A9</b>  <b>Em7</b>  <b>G</b>

[Pré-Refrão]

                  <b>D</b>
Ele chegou na voadora
         <b>A9</b>                            <b>Em7</b>
E o coração, tadin, num golpe foi pra lona
<b>G</b>                        <b>D</b>
 Rancou de mim minhas bebidas e a farra
    <b>A9</b>                    <b>G</b>
Só consigo pensar em serenata

[Refrão]

                    <b>D</b>
Se amar assim for brega
             <b>A9</b>                        <b>Em7</b>
Me chama de Marília Mendonça ou de Falcão
           <b>G</b>
Meu show agora é só voz e violão
<b>D</b>                     <b>A</b>
 Assim, debaixo da janela
                 <b>Em7</b>
Jantar a luz de velas
             <b>G</b>                             <b>D</b>
Agora é momozin ou momozão, eu sei que é brega

             <b>A9</b>                        <b>Em7</b>
Me chama de Marília Mendonça ou de Falcão
           <b>G</b>
Meu show agora é só voz e violão
<b>D</b>                     <b>A</b>
 Assim, debaixo da janela
                 <b>Em7</b>
Jantar a luz de velas
             <b>G</b>                             <b>D</b>
Agora é momozin ou momozão, eu sei que é brega

( <b>D</b>  <b>A9</b>  <b>Em7</b>  <b>G</b> )

[Refrão]

                    <b>D</b>
Se amar assim for brega
             <b>A9</b>                        <b>Em7</b>
Me chama de Marília Mendonça ou de Falcão
           <b>G</b>
Meu show agora é só voz e violão
<b>D</b>                     <b>A</b>
 Assim, debaixo da janela
                 <b>Em7</b>
Jantar a luz de velas
             <b>G</b>                             <b>D</b>
Agora é momozin ou momozão, eu sei que é brega

----------------- Acordes -----------------
Capotraste na 2ª casa
B*  = P4 4 4 4 - (*C# na forma de B)
B9*  = P4 6 4 4 - (*C#9 na forma de B9)
E*  = 2 1 0 2 - (*F# na forma de E)
F#m7*  = 4 P2 2 2 - (*G#m7 na forma de F#m7)
A*  = P2 2 2 2 - (*B na forma de A)
Am6(9)*  = 7 9 8 9 - (*Bm6(9) na forma de Am6(9))`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SerenataPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/serenata/"
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
