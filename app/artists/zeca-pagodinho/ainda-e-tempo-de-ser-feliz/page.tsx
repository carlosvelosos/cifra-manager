import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/ainda-tempo-de-ser-feliz/
const cifra = `Zeca Pagodinho - Ainda é tempo de ser feliz

[Intro] <b>C7M</b>  <b>D/C</b>  <b>Bm9</b>  <b>E7(9-)</b>
        <b>Am7</b>  <b>D4(9)</b>  <b>G7M</b>  <b>Db7</b>

[Solo]

<span class="tablatura"><span class="cnt">E|-----------------------------------------|
B|------------------------1-5-5-3-3-2-3----|
G|-------4-4--2-2-0-2---2------------------|
D|-2--5------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|---5--9-9-7-7-5-5----------7-5-----------|
B|-5----------------7-7-5-7------7-6-5-6-5-|
G|-----------------------------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<b>C7M</b>                   <b>Cm6</b>        <b>Bm7</b>    <b>Dm6/F</b>     <b>E7(4)</b>   <b>E7</b>
  Me cansei de ficar mudo sem tentar,       sem falar
<b>C7M</b>                    <b>Cm6</b>      <b>B7(13)</b>   <b>B7(13-)</b>   <b>E7(9-)</b>   <b>E7</b>
Mas não posso deixar tudo como está  Como está você?
                <b>C7M</b>                    <b>Cm6</b>
Tô vivendo por viver, tô cansada de chorar
                <b>Bm7</b>               <b>E7(4)</b>          <b>E7</b>
Não sei mais o que fazer, você tem que me ajudar
        <b>C7M</b>            <b>Bm7</b>    <b>C7M</b>     <b>B7(13-)</b>   <b>Em7(9)</b>
Tá difícil esquecer, impossível não lembrar vocêêê
    <b>Dm7</b>           <b>G7(13)</b>
E você como está?
               <b>C#m7(5-)</b>                   <b>D/F#</b>
Com o fim do nosso amor, eu também tô por aí
               <b>Bm7</b>              <b>Bm7(5-)</b>        <b>E9-</b>
Eu não sei pra onde vou, tantas noites sem dormir
     <b>Am7</b>      <b>Bm7</b>      <b>C7M</b>        <b>D7(13)</b>      <b>G7M</b>
Alivia minha dor, e me faça por favor   sorrir

[Refrão]

<b>Dm7</b>           <b>G13</b>      <b>C7M</b>    <b>D/C</b>            <b>G7M</b>  <b>G9</b>
Vem pros meus braços meu amor, meu acalanto
            <b>C7M</b>        <b>D/C</b>          <b>Bm7(5-)</b>  <b>G7(9)</b>
Leva esse pranto pra bem longe de nós dois
           <b>C7M</b>        <b>D/C</b>        <b>Bm7(5-)</b>       <b>E7</b>
Não deixe nada pra depois, é a saudade que me diz
            <b>Am7</b>       <b>D7(9)</b>     <b>G7M</b>       <b>D9-</b>
Que ainda é tempo pra viver feliz

----------------- Acordes -----------------
Am7 = 7 P5 5 5
B7(13) = 7 11 9 9
B7(13-) = 7 4 4 5
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
Bm9 = 4 4 2 0
C#m7(5-) = 5 4 P2 2
C7M = 2 0 0 2
Cm6 = P2 2 4 5
D7(13) = 10 14 12 12
D7(9) = 4 5 5 7
Db7 = 3 4 2 3
Dm6/F = 0 2 0 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
E7(4) = 7 7 5 6
E7(9-) = 2 1 3 3
Em7(9) = 0 0 5 4
G13 = 5 4 3 2
G7(13) = 3 7 5 5
G7(9) = 5 2 0 3
G7M = 5 4 3 4
G9 = 0 2 0 0`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

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
