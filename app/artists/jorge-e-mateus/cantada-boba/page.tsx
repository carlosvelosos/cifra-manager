import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/cantada-boba/

const cifra = `Jorge & Mateus - Cantada Boba

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|------------------------------------------|
B|-1/3--3--3--3--3--3--5p3--1-----3--1------|
G|-----------------------------2------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

   <b>F</b>                    <b>C</b> 
Falaram pra mim que eu sou 
            <b>Am7</b>
Seletivo demais
               <b>G</b>   
Que, pra pegar eu
                         <b>F</b>
Tem que ter uma lábia a mais
           <b>C</b>              <b>Am7</b>
Eu não discordo dessa conversa
                <b>G</b> 
Eu sou difícil mesmo
                    <b>F</b>
Mas pra quem não me interessa
      <b>C</b>                       <b>G</b>
Quem tem moral comigo não tá nessa festa

[Refrão]

                    <b>F</b>
Você me ganha numa cantada boba
                        <b>C</b>
Minha maior fraqueza é sua voz no ouvido
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>
E pra levantar da sua cama é um sacrifício

                    <b>F</b>
Você me ganha numa cantada boba
                        <b>C</b>
Minha maior fraqueza é sua voz no ouvido
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>
E pra levantar da sua cama é um sacrifício
                       <b>F</b>
Você me ganha numa cantada boba

[Primeira Parte]

   <b>F</b>                    <b>C</b> 
Falaram pra mim que eu sou 
            <b>Am7</b>
Seletivo demais
               <b>G</b>   
Que, pra pegar eu
                         <b>F</b>
Tem que ter uma lábia a mais
           <b>C</b>              <b>Am7</b>
Eu não discordo dessa conversa
                <b>G</b> 
Eu sou difícil mesmo
                    <b>F</b>
Mas pra quem não me interessa
      <b>C</b>                       <b>G</b>
Quem tem moral comigo não tá nessa festa

[Refrão]

                    <b>F</b>
Você me ganha numa cantada boba
                        <b>C</b>
Minha maior fraqueza é sua voz no ouvido
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>
E pra levantar da sua cama 

                    <b>F</b>
Você me ganha numa cantada boba
                        <b>C</b>
Minha maior fraqueza é sua voz no ouvido
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>                               
E pra levantar da sua cama é um sacrifício

[Riff]

<span class="tablatura">[Tab - Riff]

<span class="cnt">E|------------------------------------------|
B|-1/3--3--3--3--3--3--5p3--1-----3--1------|
G|-----------------------------2------------|
D|------------------------------------------| (2x)
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Refrão Final]

<b>F</b>             <b>C</b>
Um sacrifício
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>
E pra levantar da sua cama é um sacrifício

                    <b>F</b>
Você me ganha numa cantada boba
                        <b>C</b>
Minha maior fraqueza é sua voz no ouvido
                        <b>Am7</b>
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    <b>G</b>
E pra levantar da sua cama é um sacrifício

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m7*  = X 0 2 0 1 0 - (*Bm7 na forma de A#m7)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CantadaBobaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/cantada-boba/"
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
