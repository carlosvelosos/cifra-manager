import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/matogrosso-e-mathias/tentei-te-esquecer/

const cifra = `Matogrosso & Mathias - Tentei Te Esquecer

[Intro] <b>B</b>  <b>E</b>  <b>F#</b>  <b>B</b>  <b>E</b>  <b>F#</b>

<span class="tablatura">[Tab - Intro]

           <b>B</b>     <b>E</b>          <b>F#</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|---4-6-6/8~----8h9p8----------------------|
D|-4-------------------9--4/6--4------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">               <b>B</b>         <b>E</b>       <b>F#</b>       
<span class="cnt">E|------------------------------------------|
B|-------4-5-5/7~--7p5-4-5-7-7/9------------|
G|---4-6-------------------------6~---------|
D|-4----------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

           <b>B</b>             <b>E</b>       <b>F#</b>
Ah, como quero te encontrar novamente
          <b>B</b>         <b>E</b>       <b>F#</b>
Estou sozinho procurando você
           <b>B</b>           <b>E</b>        <b>F#</b>
Ah, como quero te abraçar loucamente
       <b>C#m</b>            <b>A</b>         
Olhar dentro dos teus olhos
     <b>F#</b>                  <b>B</b>  <b>E</b>  <b>F#</b>
E dizer: não vivo sem você

[Pré-Refrão]

         <b>B</b>            <b>E</b>         <b>F#</b>
O tempo passa, cai a noite e o dia vem
          <b>B</b>                <b>E</b>       <b>F#</b>
Tento fingir, mas não dá pra esconder
           <b>B</b>              <b>E</b>         <b>F#</b>
Ah, eu sonhei nas noites vagas com teu amor
            <b>G#m</b>                 <b>F#</b>
Provei teu beijo, magoei minha dor

[Refrão]

                <b>B</b>   <b>E</b>      <b>F#</b>
Tentei te esquecer,   não deu
            <b>B</b>             <b>E</b>            <b>F#</b>
Pensei que fosse mais forte que esse amor
            <b>B</b>   <b>E</b>      <b>F#</b>
Ó minha paixão,   sou teu
                  <b>B</b>           <b>E</b>          <b>F#</b>
Por mais que eu queira disfarçar como estou
         <b>Gº</b>  <b>G#m</b>               <b>E</b>  <b>B/D#</b> 
O meu cora__ção se nega a aceitar
         <b>C#m</b>             <b>F#</b>          <b>B</b>
Passa o tempo eu não esqueço de te amar

[Solo] <b>E</b>  <b>F#</b>  <b>B</b>  <b>E</b>  <b>F#</b>

<span class="tablatura">[Tab - Solo]

<span class="cnt">  H.A.        P.M. . .  H.A
B|------------------------------------------|
G|------------------------------------------|
D|-6b8r6--------------4-6b8-6~\-----3h4/6---|
A|-------4~-------4-6---------------------4-|
E|------------6-7---------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">  P.M. .
B|------------------------------------------|
G|-------4-5-5/7~\-----------7--7/9--7~\----|
D|---4-6--------------6-8-9-----------------|
A|-4----------------------------------------|
E|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-3h4/6------------------------------------|
D|-------4~---------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Pré-Refrão]

         <b>B</b>            <b>E</b>         <b>F#</b>
O tempo passa, cai a noite e o dia vem
          <b>B</b>                <b>E</b>       <b>F#</b>
Tento fingir, mas não dá pra esconder
           <b>B</b>              <b>E</b>         <b>F#</b>
Ah, eu sonhei nas noites vagas com teu amor
            <b>G#m</b>                 <b>F#</b>
Provei teu beijo, magoei minha dor

[Refrão]

                <b>B</b>   <b>E</b>      <b>F#</b>
Tentei te esquecer,   não deu
            <b>B</b>             <b>E</b>            <b>F#</b>
Pensei que fosse mais forte que esse amor
            <b>B</b>   <b>E</b>      <b>F#</b>
Ó minha paixão,   sou teu
                  <b>B</b>           <b>E</b>          <b>F#</b>
Por mais que eu queira disfarçar como estou
         <b>Gº</b>  <b>G#m</b>               <b>E</b>  <b>B/D#</b> 
O meu cora__ção se nega a aceitar
         <b>C#m</b>             <b>F#</b>          <b>B</b>
Passa o tempo eu não esqueço de te amar

                <b>B</b>   <b>E</b>      <b>F#</b>
Tentei te esquecer,   não deu
            <b>B</b>             <b>E</b>            <b>F#</b>
Pensei que fosse mais forte que esse amor
            <b>B</b>   <b>E</b>      <b>F#</b>
Ó minha paixão,   sou teu
                  <b>B</b>           <b>E</b>          <b>F#</b>
Por mais que eu queira disfarçar como estou
         <b>Gº</b>  <b>G#m</b>               <b>E</b>  <b>B/D#</b> 
O meu cora__ção se nega a aceitar
         <b>C#m</b>             <b>F#</b>          <b>B</b>
Passa o tempo eu não esqueço de te amar

( <b>F#/A#</b>  <b>G#m</b>  <b>F#</b> )

         <b>E</b>               <b>F#4</b>         <b>B</b>
Passa o tempo eu não esqueço de te amar

<span class="tablatura">[Tab - Final]

                <b>B</b>
<span class="cnt">E|--------------2----------------------------|
B|--------------4----------------------------|
G|---4-6--6/8~--4----------------------------|
D|-4------------4----------------------------|
A|--------------2----------------------------|</span></span>
E|-------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
B/D# = X 6 4 4 4 X
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
F# = 2 4 4 3 2 2
F#/A# = 6 X 4 6 7 X
F#4 = 2 4 4 4 2 2
G#m = 4 6 6 4 4 4
Gº = 3 X 2 3 2 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TenteiTeEsquecerPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/matogrosso-e-mathias/tentei-te-esquecer/"
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
