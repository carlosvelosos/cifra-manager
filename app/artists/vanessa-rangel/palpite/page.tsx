import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/vanessa-rangel/palpite/

const cifra = `Vanessa Rangel - Palpite

<span class="tablatura">[Tab - Frase 1 - Violão]

                     <b>E</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-2h4-2------------------------------------|
E|--------4---2-4-2--0----------------------|</span></span>

[Intro] <b>E</b>  <b>F#/E</b>  <b>A2</b>
        <b>E</b>  <b>F#/E</b>  <b>A2</b>  <b>E</b> 

<span class="tablatura">[Tab - Intro - Violão]

<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-4-2-----------------------4----0---------|
E|-----4----2-4-2--2-------6---6------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|--2h4-2-----------------------------------|
A|--------4--2h4-2--------------------------|
E|------------------0-----------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-2h4-2------------------------------------|
E|-------4--2-4-2--0------------------------|</span></span>

<span class="tablatura">[Tab - Intro - Guitarra]

<span class="cnt">E|--7---------------------------------------|
B|----7b9r7-5~-----------5/7~---------------|
G|-------------b4r3p1/3---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--------4b5-4-----------------------------|
B|---------------5b7r5----------------------|
G|-4-4/6----------------4~------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>E</b>                                       
  Tô com saudade de você
                <b>F#/E</b>  
Debaixo do meu cobertor
<b>A2</b>                <b>Am6</b>      
   E te arrancar suspiros
      <b>E</b>   (Frase 1)
Fazer amor

Tô com saudade de você
      <b>F#/E</b>
Na varanda em noite quente
<b>A2</b>          <b>Am6</b>                <b>C#m7</b>           
   E o arrepio frio que dá na gente

[Pré-Refrão]

             <b>A2</b>
Truque do desejo
           <b>C#m7</b>            <b>A2</b>
Guardo na boca o gosto do beijo
<b>C7M</b>          <b>D2</b>            <b>C7M</b>     
    Eu sinto a falta de você
       <b>D2</b>
Me sinto só

[Refrão]

   <b>E</b>                 <b>F#/E</b>                
E aí, será que você volta?
              <b>A2</b>   <b>Am6</b>   
Tudo à minha volta
    <b>E</b>    (Frase 1)
É triste
                    <b>F#/E</b>        
E aí, o amor pode acontecer
          <b>A2</b>          <b>E</b>   (Frase 1)
De novo pra você, palpite

[Segunda Parte]

<b>E</b>                                
  Tô com saudade de você
          <b>F#/E</b>
Do nosso banho de chuva
 <b>A2</b>                <b>Am6</b>      
Do calor na minha pele
           <b>E</b>  (Frase 1)
Da língua tua

Tô com saudade de você
      <b>F#/E</b>
Censurando o meu vestido
<b>A2</b>               <b>Am6</b>                           
   As juras de amor
            <b>C#m7</b>
Ao pé do ouvido

[Pré-Refrão]

             <b>A2</b>
Truque do desejo
           <b>C#m7</b>            <b>A2</b>
Guardo na boca o gosto do beijo
<b>C7M</b>          <b>D2</b>            <b>C7M</b>     
    Eu sinto a falta de você
       <b>D2</b>
Me sinto só

[Refrão]

   <b>E</b>                 <b>F#/E</b>                
E aí, será que você volta?
              <b>A2</b>   <b>Am6</b>   
Tudo à minha volta
    <b>E</b>    (Frase 1)
É triste
                    <b>F#/E</b>        
E aí, o amor pode acontecer
          <b>A2</b>          <b>E</b>   (Frase 1)
De novo pra você, palpite

[Solo] <b>E</b>  <b>F#/E</b>  <b>A2</b>  <b>E</b>
       <b>E</b>  <b>F#/E</b>  <b>A2</b>  <b>E</b>

<span class="tablatura">[Tab - Solo - Guitarra]

<span class="cnt">E|-7----------------------------------------|
B|---7b9r7-5~-----------5/7~----------------|
G|------------b4r3p1/3----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--------4b5-4-----------------------------|
B|---------------5b7r5--5b7r5---------------|
G|-4-4/6-----------------------4~-----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-7----------------------------------------|
B|---7b9r7-5~-----------5/7~----------------|
G|------------b4r3p1/3----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--------4b5-4-----------------------------|
B|---------------5b7r5---------------/10~---|
G|-4-4/6----------------4~-----4\-----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Pré-Refrão]

<b>C7M</b>          <b>D2</b>            <b>C7M</b>     
    Eu sinto a falta de você
       <b>D2</b>
Me sinto só

[Refrão Final]

   <b>E</b>                 <b>F#/E</b>                
E aí, será que você volta?
              <b>A2</b>   <b>Am6</b>   
Tudo à minha volta
    <b>E</b>    (Frase 1)
É triste
                    <b>F#/E</b>        
E aí, o amor pode acontecer
          <b>A2</b>          <b>E</b>   (Frase 1)
De novo pra você, palpite

   <b>E</b>                 <b>F#/E</b>                
E aí, será que você volta?
              <b>A2</b>   <b>Am6</b>     <b>E</b>
Tudo à minha volta     é triste
                    <b>F#/E</b>        
E aí, o amor pode acontecer
          <b>A2</b>          <b>E</b>   (Frase 1)
De novo pra você, palpite

[Final] <b>E</b> (Frase 1) <b>E6</b>

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
Am6 = X 0 2 2 1 2
C#m7 = X 4 6 4 5 4
C7M = X 3 2 0 0 0
D2 = X X 0 2 3 0
E = 0 2 2 1 0 0
E6 = 0 2 2 1 2 0
F#/E = 0 4 4 3 2 0`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PalpitePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/vanessa-rangel/palpite/"
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
