import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/trilha-do-amor/
const cifra = `

<b>F#m7(11)</b>
Foi lá na Bahia de São Salvador
            <b>Am6</b>
Peguei um Axé nos Encantos de lá
                <b>G#m7</b>
Voltei pro meu rio do meu redentor
              <b>G#m7(5-)</b>           <b>C#7</b>
Pra ver meu amor que é lá de Irajá
                <b>A7M</b>             <b>B7</b>
To cheio de saudade do nosso calor
                <b>G#m7</b>              <b>G#7(5+)</b>
E tudo que eu quero é chegar e poder
 <b>C#m7(9)</b>     <b>G#m7(5-)</b>   <b>C#7</b>
Te amar, te Abraçar
            <b>F#m7(11)</b>
Matar a vontade que tanto senti
             <b>Am6</b>
Sem o teu carinho não da pra ficar
              <b>G#m7</b>
Rezei para o Nosso senhor do Bonfim
              <b>G#m7(5-)</b>         <b>C#7</b>
E trouxe uma fita pra te abençoar
               <b>A7M</b>                <b>B7</b>
E tive a certeza que a gente é assim
            <b>G#m7</b>                <b>G#7(5+)</b>
Um longe do Outro não dá pra ficar
 <b>C#m7(9)</b>       <b>G#m7(5-)</b> <b>C#7</b>
Não dá pra separar

           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
               <b>Am6</b>
Enquanto essa paixão me guiar
           <b>G#m7</b>
Deixa o coração me levar
         <b>G#m7(5-)</b>          <b>C#7</b>
Deixa o coração me levar
           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
            <b>Am6</b>
Onde você quiser vou estar
              <b>G#m7</b>                      <b>G#m7(5-)</b> <b>C#7</b>
Sem você não da pra ficar sem você não da pra ficar
           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
               <b>Am6</b>
Enquanto essa paixão me guiar
           <b>G#m7</b>
Deixa o coração me levar
         <b>G#m7(5-)</b>          <b>C#7</b>
Deixa o coração me levar
           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
            <b>Am6</b>
Onde você quiser vou estar
              <b>G#m7</b>                      <b>G#m7(5-)</b> <b>C#7</b>
Sem você não da pra ficar sem você não da pra ficar

     <b>F#m7(11)</b>
Foi lá na Bahia de São Salvador
            <b>Am6</b>
Peguei um Axé nos Encantos de lá
                <b>G#m7</b>
Voltei pro meu rio do meu redentor
              <b>G#m7(5-)</b>           <b>C#7</b>
Pra ver meu amor que é lá de Irajá
                <b>A7M</b>             <b>B7</b>
To cheio de saudade do nosso calor
                <b>G#m7</b>              <b>G#7(5+)</b>
E tudo que eu quero é chegar e poder
 <b>C#m7(9)</b>     <b>G#m7(5-)</b>   <b>C#7</b>
Te amar, te Abraçar
            <b>F#m7(11)</b>
Matar a vontade que tanto senti
             <b>Am6</b>
Sem o teu carinho não da pra ficar
              <b>G#m7</b>
Rezei para o Nosso senhor do Bonfim
              <b>G#m7(5-)</b>         <b>C#7</b>
E trouxe uma fita pra te abençoar
               <b>A7M</b>                <b>B7</b>
E tive a certeza que a gente é assim
            <b>G#m7</b>                <b>G#7(5+)</b>
Um longe do Outro não dá pra ficar
 <b>C#m7(9)</b>       <b>G#m7(5-)</b> <b>C#7</b>
Não dá pra separar

           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
               <b>Am6</b>
Enquanto essa paixão me guiar
           <b>G#m7</b>
Deixa o coração me levar
         <b>G#m7(5-)</b>          <b>C#7</b>
Deixa o coração me levar
           <b>F#m7(9)</b>
Eu vou seguindo a trilha do amor
            <b>Am6</b>
Onde você quiser vou estar
              <b>G#m7</b>                      <b>G#m7(5-)</b> <b>C#7</b>
Sem você não da pra ficar sem você não da pra ficar
           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
               <b>Am6</b>
Enquanto essa paixão me guiar
           <b>G#m7</b>
Deixa o coração me levar
         <b>G#m7(5-)</b>          <b>C#7</b>
Deixa o coração me levar
           <b>F#m7(11)</b>
Eu vou seguindo a trilha do amor
            <b>Am6</b>
Onde você quiser vou estar
              <b>G#m7</b>                      <b>G#m7(5-)</b> <b>C#7</b>
Sem você não da pra ficar sem você não da pra ficar

----------------- Acordes -----------------
A7M = 2 1 2 2
Am6 = 4 2 1 2
B7 = 1 2 0 1
C#7 = 3 4 2 3
C#m7(9) = 1 4 2 2
F#m7(11) = 11 11 12 14
F#m7(9) = 6 9 7 7
G#7(5+) = 4 1 1 2
G#m7 = 6 P4 4 4
G#m7(5-) = 0 1 0 0`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TrilhaDoAmorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
