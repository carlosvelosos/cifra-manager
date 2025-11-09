import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/infiel/

const cifra = `Marília Mendonça - Infiel

[Intro] <b>Am</b>  <b>Em</b>  <b>D</b>  <b>A</b> 

<span class="tablatura">[Tab - Intro]

Parte 1 de 2
<span class="cnt">E|------------------------------------------|
B|-7h8\\5-----7/8-8-7-8-8h10-8-5-------------|
G|-------5~---------------------------------|
D|-----------8/9-9-7-9-9h10-9-5-------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|------------------------------------------|
B|-7/8-8-7-8-10\\7-7--3----------------------|
G|---------------------2h4--4/6--6\\4p2-4----|
D|-8/9-9-7-9-10\\7-7-------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte] 

<b>Em</b>                    <b>C</b>
   Isso não é uma disputa
         <b>D</b>            <b>Em</b>
Eu não quero te provocar

Descobri faz um ano 
                     <b>C</b>
E to te procurando pra dizer
        <b>D</b>            <b>Em</b> 
Hoje a farsa vai acabar

                           <b>C</b>
Hoje não tem hora de ir embora
      <b>D</b>          <b>Em</b>
Hoje, ele vai ficar

No momento deve estar feliz
            <b>C</b>
E achando que ganhou
           <b>D</b>                     <b>Am</b>
Não perdi nada, acabei de me livrar

[Pré-Refrão] 

Com certeza ele vai atrás
        <b>Em</b>
Mas com outra intenção
     
Tá sem casa, sem rumo
                    <b>G</b>
E você é a única opção

E agora será que aguenta
           <b>D</b>
A barra sozinha
     
Se sabia de tudo
                       <b>Am</b>
Se vira a culpa não é minha

O seu premio que não vale nada
         <b>Em</b>
Estou te entregando
     
Pus as malas lá fora 
                     <b>G</b>
E ele ainda saiu chorando

Essa competição por amor 
                  <b>D</b>
Só serviu pra me machucar
                                 <b>Am</b>
Tá na sua mão você agora vai cuidar

De um traidor
        <b>C</b>
Me faça esse favor

[Refrão] 

 <b>Am</b>
Iêêê, infiel
                <b>Em</b>
Eu quero ver você morar num motel
               <b>D</b>
Estou te expulsando do meu coração
                 <b>A</b>
Assuma as consequências dessa traição

     <b>Am</b>
Iêiêiê, infiel
           <b>Em</b>
Agora ela vai fazer o meu papel
                <b>D</b>
Daqui um tempo você vai se acostumar
             <b>A</b>                
Ai vai ser a ela a quem vai enganar
                <b>Am</b> 
Você não vai mudar

[Solo] <b>Am</b>  <b>Em</b>  <b>D</b>  <b>A</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 2
<span class="cnt">E|------------------------------------------|
B|-7h8\\5-----7/8-8-7-8-8h10-8-5-------------|
G|-------5~---------------------------------|
D|-----------8/9-9-7-9-9h10-9-5-------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|------------------------------------------|
B|-7/8-8-7-8-10\\7-7--3----------------------|
G|---------------------2h4--4/6-------------|
D|-8/9-9-7-9-10\\7-7-------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Pré-Refrão] 

<b>Am</b>
   O seu premio que não vale nada
         <b>Em</b>
Estou te    entregando
       
Pus as malas lá fora 
                     <b>G</b>
E ele ainda saiu chorando

Essa competição por amor 
                  <b>D</b>
Só serviu pra me machucar
                                 <b>Am</b>
Tá na sua mão você agora vai cuidar

De um traidor
        <b>C</b>
Me faça esse favor

[Refrão] 

 <b>Am</b>
Iêêê, infiel
                <b>Em</b>
Eu quero ver você morar num motel
               <b>D</b>
Estou te expulsando do meu coração
                 <b>A</b>
Assuma as consequências dessa traição

     <b>Am</b>
Iêiêiê, infiel
           <b>Em</b>
Agora ela vai fazer o meu papel
                <b>D</b>
Daqui um tempo você vai se acostumar
               <b>A</b>
E ai vai ser a ela a quem vai enganar

Você não vai mudar

 <b>Am</b>
Iêêê, infiel
           <b>Em</b>
Agora ela vai fazer o meu papel
                <b>D</b>
Daqui um tempo você vai se acostumar
               <b>A</b>             
E ai vai ser a ela a quem vai enganar

Você não vai mudar
 <b>Am</b>          <b>Em</b>
Iêêê, infiel

[Solo Final]

<span class="tablatura">[Tab - Solo Final]

<span class="cnt">E|------------------------------------------|
B|-7h8\\5-----7/8-8-7-8-8h10-8-5-------------|
G|-------5~---------------------------------|
D|-----------8/9-9-7-9-9h10-9-5-------------|
A|------------------------------------------|</span></span>
E|------------------------------------------|

----------------- Acordes -----------------
A = P2 2 2 2
Am = 2 2 1 2
C = 2 0 1 2
D = 4 2 3 4
Em = 5 4 5 5
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function InfielPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/infiel/"
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
