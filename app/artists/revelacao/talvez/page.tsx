import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/talvez/
const cifra = `

[Intro] <b>E</b>  <b>A</b>  <b>Am6</b>  <b>A</b>  <b>C7M</b>  <b>F#m7</b>  <b>B7</b>

[Solo] <b>G#</b>  <b>B</b>  <b>F#</b>  <b>A</b>  <b>G#</b>
       <b>F#</b>  <b>E</b>  <b>G#</b>  <b>E</b>  <b>G#</b>
       <b>E</b>  <b>A</b>  <b>E</b>  <b>G</b>  <b>E</b>  <b>F#</b>  <b>B</b>

[Solo]

<span class="tablatura"><span class="cnt">E|--4----2---5--4--2-----4---2--4---2--5---2--3-------7--|
B|--5-----------------5--5-----------------------6/7--7--|
G|--4--4-----------------4----------------------------8--|
D|-------------------------------------------------------|
A|-------------------------------------------------------|
E|-------------------------------------------------------|</span></span>

            <b>E</b>                   <b>F#7</b>
Eu quis um dia te dar a luz pra iluminar
          <b>A</b>        <b>Am</b>  <b>E</b>   <b>B7</b>
O escuro da solidão  não deu
           <b>E</b>
Lutei pra te conquistar
         <b>F#7</b>
De tudo fiz pra mostrar
                <b>A</b>    <b>Am</b>  <b>E</b>
Foi grande a decepção    valeu
             <b>D#m7</b>       <b>G#7</b> <b>C#m7</b>
Quando a saudade apertar não vou chorar
               <b>D#m7</b>  <b>G#7</b>  <b>C#</b>
Mas se o meu pranto rolar deixa
              <b>F#m7</b>      <b>B7</b>
Quando a solidão chegar
              <b>G#m7</b>    <b>C#m7</b>
Querendo me acompanhar
              <b>Am6</b>   <b>G#7</b>
Eu não vou desanimar
            <b>C#m7</b>
Jamais vou me entregar
          <b>D#7</b>                      <b>D#m7</b>       <b>G#7</b>
Eu vou cantar vou compôr pra esquecer essa dor

[Refrão]

    <b>C#</b>                                <b>D#7</b>
Um dia eu vou encontrar minha felicidade
    <b>D#m</b>              <b>G#7</b>         <b>C#</b>
Eu já perdoei as maldades que você me fez
  <b>G#m7</b>                 <b>C#7</b>             <b>F#7</b>   <b>G°</b>
Adeus querida, até um dia, quem sabe até talvez
     <b>C#7</b>     <b>A#m7</b>    <b>D#m7</b> <b>G#7</b>  <b>C#7M</b>  <b>G#7</b>
Que pena o nosso amor  desfez
    <b>C#7</b>                               <b>D#7</b>
Um dia eu vou encontrar minha felicidade
    <b>D#m7</b>             <b>G#7</b>         <b>C#7</b>
Eu já perdoei as maldades que você me fez
  <b>G#m7</b>                 <b>C#7</b>           <b>F#7</b>   <b>G°</b>
Adeus querida, até um dia, quem sabe até talvez
     <b>C#</b>     <b>A#m</b>       <b>D#m7</b> <b>G#7</b> <b>E</b>
Que pena o nosso amor  desfez

            <b>E</b>                   <b>F#7</b>
Eu quis um dia te dar a luz pra iluminar
          <b>A</b>        <b>B7(4)</b>   <b>E</b>   <b>B7(4)</b>
O escuro da solidão  não deu
           <b>E</b>
Lutei pra te conquistar
         <b>F#7</b>
De tudo fiz pra mostrar
                <b>A</b>    <b>B7(4)</b>  <b>E</b>
Foi grande a decepção    valeu
             <b>D#m7(5-)</b>   <b>D7(9)</b> <b>C#m7</b>
Quando a saudade apertar não vou chorar
               <b>D#m7(5-)</b>  <b>G#7</b>  <b>C#7M</b>
Mas se o meu pranto rolar deixa
              <b>F#m7</b>      <b>B7(4)</b>
Quando a solidão chegar
              <b>G#m7</b>    <b>C#m7</b>
Querendo me acompanhar
              <b>Am6</b>   <b>G#7(5+)</b>
Eu não vou desanimar
            <b>C#m7</b>
Jamais vou me entregar
          <b>D#7</b>                      <b>D#m7</b>       <b>G#7</b>
Eu vou cantar vou compôr pra esquecer essa dor

[Refrão]

    <b>C#7M</b>                               <b>D#7</b>
Um dia eu vou encontrar minha felicidade
    <b>D#m7</b>             <b>G#7</b>         <b>C#7M</b>
Eu já perdoei as maldades que você me fez
  <b>G#m7</b>                 <b>C#7</b>             <b>F#7</b>   <b>G°</b>
Adeus querida, até um dia, quem sabe até talvez
     <b>C#7M</b>     <b>A#m7</b>    <b>D#m7</b> <b>G#7</b>  <b>C#7M</b>  <b>G#7</b>
Que pena o nosso amor  desfez
    <b>C#7M</b>                               <b>D#7</b>
Um dia eu vou encontrar minha felicidade
    <b>D#m7</b>             <b>G#7</b>         <b>C#7M</b>
Eu já perdoei as maldades que você me fez
  <b>G#m7</b>                 <b>C#7</b>           <b>F#7</b>   <b>G°</b>
Adeus querida, até um dia, quem sabe até talvez
     <b>C#7M</b>     <b>A#m7</b>        <b>D#m7</b> <b>G#7</b>   <b>A7M</b>   <b>B7(4)</b>
Que pena o nosso amor  desfez

                   <b>E9</b>
Eu quis um dia te dar

( <b>A</b>  <b>B</b>  <b>G#m</b>  <b>G</b>  <b>F#m</b>  <b>A/B</b> )

----------------- Acordes -----------------
A = P2 2 2 2
A#m = 3 3 2 3
A#m7 = 3 1 2 3
A/B = 11 14 12 14
A7M = 2 1 2 2
Am = 2 2 1 2
Am6 = 4 2 1 2
B = P4 4 4 4
B7 = 1 2 0 1
B7(4) = 2 2 0 4
C# = P6 6 6 6
C#7 = 3 4 2 3
C#7M = 3 1 1 3
C#m7 = 6 4 5 6
C7M = 2 0 0 2
D#7 = 5 3 2 5
D#m = 4 3 4 4
D#m7 = 1 3 2 4
D#m7(5-) = 1 2 2 4
D7(9) = 4 5 5 7
E = 2 1 0 2
E9 = 2 1 0 4
F# = 4 3 2 4
F#7 = 4 3 P2 2
F#m = 4 2 2 4
F#m7 = 4 P2 2 2
G = 5 4 3 5
G# = 6 5 4 6
G#7 = P4 5 4 6
G#7(5+) = 4 1 1 2
G#m = 6 4 4 6
G#m7 = 6 P4 4 4
G° = 5 3 P2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TalvezPage() {

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
