import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/so-pra-contrariar/essa-tal-liberdade/

const cifra = `So Pra Contrariar - Essa Tal Liberdade

[Intro] <b>E</b>  <b>G#m7</b>  <b>A</b>  <b>A/B</b>
        <b>E</b>  <b>G#m7</b>  <b>A</b>  <b>A/B</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|------------------------------------------------|
B|-----------------9-10-9-------------------------|
G|---------4/6--9--9------9--4/6\\4----------------|
D|-6-7-7/9----------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>
          
<span class="tablatura"><span class="cnt">E|------------------------------------------------|
B|-----------------9-10-9-------------------------|
G|---------4/6--9--9------9--9/11\\9---------------|
D|-6-7-7/9----------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

[Primeira Parte]

<b>E</b>                     <b>G#m7</b>    
O que é que eu vou fazer 
                   <b>A</b>
Com essa tal liberdade
                 <b>B7</b>  
Se estou na solidão
               <b>E</b>
Pensando em você
               <b>G#m7</b>   
Eu nunca imaginei
                 <b>A</b>
Sentir tanta saudade

Meu coração não
 <b>B7</b>                   
Sabe como te esquecer

[Pré-Refrão]

<b>E</b>             <b>G#m7</b>    
  Eu andei errado
             <b>A</b>
Eu pisei na bola

Troquei quem mais
  <b>B7</b>                 <b>E</b>
Amava por uma ilusão
               <b>G#m7</b> 
Mas a gente aprende
                <b>A</b>
A vida é uma escola
                  <b>B7</b>                    
Não é assim que acaba
               <b>E</b>
Uma grande paixão

[Refrão]

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

[Segunda Parte]

                      <b>G#m7</b>  
O que é que eu vou fazer
                 <b>A</b>
Com esse fim de tarde

Pra onde quer que eu
<b>B7</b>                   <b>E</b>
Olhe lembro de você
                  <b>G#m7</b> 
Não sei se fico aqui
              <b>A</b>
Ou mudo de cidade
                <b>B7</b>  
Sinceramente, amor
                 
Não sei o que fazer

[Pré-Refrão]

<b>E</b>             <b>G#m7</b>    
  Eu andei errado, eu
          <b>A</b>
Pisei na bola
                  <b>B7</b> 
Achei que era melhor
                 <b>E</b>
Cantar outra canção
               <b>G#m7</b>  
Mas a gente aprende
                <b>A</b>
A vida é uma escola
                 <b>B7</b> 
Eu troco a liberdade
              <b>E</b>
Pelo teu perdão

[Refrão]

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

[Solo] <b>E</b>  <b>G#m7</b>  <b>A</b>  <b>A/B</b>
       <b>E</b>  <b>G#m7</b>  <b>A</b>  <b>A/B</b>

<span class="tablatura"><span class="cnt">E|------------------------------------------------|
B|-----------------9-10-9-------------------------|
G|---------4/6--9--9------9--4/6\\4----------------|
D|-6-7-7/9----------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>
          
<span class="tablatura"><span class="cnt">E|------------------------------------------------|
B|-----------------9-10-9-------------------------|
G|---------4/6--9--9------9--9/11\\9---------------|
D|-6-7-7/9----------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

[Primeira Parte]

<b>E</b>                     <b>G#m7</b>    
O que é que eu vou fazer com
               <b>A</b>
Essa tal liberdade
                 <b>B7</b>  
Se estou na solidão
               <b>E</b>
Pensando em você
               <b>G#m7</b>   
Eu nunca imaginei
                 <b>A</b>
Sentir tanta saudade

Meu coração não
 <b>B7</b>                   
Sabe como te esquecer

[Pré-Refrão]

<b>E</b>             <b>G#m7</b>    
  Eu andei errado, eu
          <b>A</b>
Pisei na bola

Troquei quem mais
  <b>B7</b>                 <b>E</b>
Amava por uma ilusão
               <b>G#m7</b> 
Mas a gente aprende
                <b>A</b>
A vida é uma escola
                  <b>B7</b>                    
Não é assim que acaba
               <b>E</b>
Uma grande paixão

[Refrão]

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria

              <b>G#m7</b>            <b>A</b>
Quero te abraçar quero te beijar
 <b>A/B</b>               <b>E</b>
Te desejo noite e dia
              <b>G#m7</b>          <b>A</b>
Quero me prender todo em você
   <b>A/B</b>                   <b>E</b>
Você é tudo o que eu queria`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EssaTalLiberdadePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/so-pra-contrariar/essa-tal-liberdade/"
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
