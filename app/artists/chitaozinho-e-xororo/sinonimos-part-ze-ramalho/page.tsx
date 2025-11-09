import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chitaozinho-e-xororo/sinonimos/

const cifra = `Chitãozinho & Xororó - Sinônimos (part. Zé Ramalho)

[Intro] <b>C</b>  <b>G/B</b>  <b>Dm7</b>  <b>F</b>  
        <b>C</b>  <b>G/B</b>  <b>Dm7</b>  <b>F</b>

<span class="tablatura">[Tab - Intro - Violão 2]

            <b>C</b>    <b>G/B</b>  <b>Dm7</b>                    
<span class="cnt">E|----------0----3----1---------------------|
B|----------1----3----1---------------------|
G|----------0----0----2---------------------|
D|----------2----0----0---0-2-2h3-2-0-------|
A|-----3h5--3----2--------------------------|
E|-3h5---------------------------------3h5--|</span></span>

<span class="tablatura">       <b>C</b>    <b>G/B</b>  <b>Dm7</b>                     <b>C</b>      
<span class="cnt">E|-----0----3----1-----------------------0--|
B|-----1----3----1-----------------------1--|
G|-----0----0----2-----------------------0--|
D|-----2----0----0---0-2-2h3-2-0---------2--|
A|-3-5-3----2------------------------3-5-3--|
E|-------------------------------3-5--------|</span></span>

<span class="tablatura">[Tab - Intro - Violão 3]

           <b>C</b>              <b>G/B</b>
<span class="cnt">E|------------8-7-5-7-5---5-----------------|
B|----------------------8---8-6-8-6---------|
G|-----5h7-5--------------------------------|
D|-5h7--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">                 <b>Dm7</b>           <b>F</b>
<span class="cnt">E|------------------------------------------|
B|-5-6-5---5---------------5-5h6-5----------|
G|-------7---7-5-7-5...--7---------7--------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">           <b>C</b>              <b>G/B</b>
<span class="cnt">E|------------8-7-5-7-5---5-----------------|
B|----------------------8---8-6-8-6-5-6-5---|
G|-----5-7-5------------------------------7-|
D|-5h7--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">         <b>Dm7</b>           <b>F</b>              <b>C</b>
<span class="cnt">E|------------------------------------------|
B|-5---------------5-5h6-5------------------|
G|---7-5-7-5...--7---------7------5-7-5...--|
D|----------------------------5-7-----------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">[Tab - Frase 1 - Violão 2]

          <b>F</b>                <b>C</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-0-2--2h3--2--0---------------------------|
A|---------------------3h5-3----------------|
E|-----------------3h5----------------------|</span></span>

<span class="tablatura">[Tab - Frase 1 - Violão 3]

         <b>F</b>               <b>C</b>
<span class="cnt">E|------------------------------------------|
B|---5-5h6-5--------------------------------|
G|-7---------7-------5h7-5------------------|
D|---------------5h7------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Frase 2 - Violão 2]

                    <b>G</b>       <b>F</b>          <b>G</b>                        
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-0-2-2h3--3/5-3-2-0-----------------------|
A|--------------------3-2---0-------5-------|
E|------------------------3---3-1-0----3----|</span></span>

<b>C</b>                     <b>G/B</b>        
  Quanto tempo o coração
       <b>Dm7</b>   (Frase 1)  <b>F</b>
Leva pra saber
<b>C</b>                     <b>G/B</b>       
  Que o sinônimo de amar
      <b>Dm7</b> (Frase 1) <b>F</b>
É sofrer
<b>C</b>                <b>G/B</b>                
  Num aroma de amores
           <b>Dm7</b>  (Frase 1) <b>F</b>
Pode haver espinhos
<b>C</b>                     <b>G/B</b>                
  É como ter mulheres em milhões
       <b>Dm7</b>    (Frase 2) <b>F</b> 
E ser sozinho

[Pré-Refrão 1]

<span class="tablatura">[Tab - Frase 3 - Violão 3]

               <b>F</b>                   <b>G</b>    
<span class="cnt">E|-8-7-5-7-5---5----------------------------|
B|-----------8---8-6-8-6-5-6/8-6-5----------|
G|---------------------------------7--------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Frase 4 - Violão 2]

         <b>F</b>           <b>C</b>
<span class="cnt">E|-------------------0----------------------|
B|-------------------1----------------------|
G|-------------------0----------------------|
D|-0-2-2h3-----------2----------------------|
A|---------------3h5-3----------------------|
E|-----------3h5----------------------------|</span></span>

<b>G</b>                <b>F</b>           
  Na solidão de casa
       <b>G</b>  (Frase 3) <b>F</b> 
Descansar
<b>G</b>               <b>Dm7</b>         <b>C</b>
  O sentido da vida, encontrar
      <b>G/B</b>                     
Quem pode dizer onde
         <b>Dm7</b>        <b>F</b> (Frase 4)
A felicidade, está?

[Refrão]

<b>C</b>                       <b>G/B</b>                  
  O amor é feito de paixões
                    <b>Dm7</b>
E quando perde a razão
     <b>F</b>         <b>G</b>        <b>C</b>
Não sabe quem vai machucar
                      <b>G/B</b>                     
Quem ama nunca sente medo
                    <b>Dm7</b>
De contar o seu segredo
   <b>F</b>          <b>G</b>      <b>C</b>  
Sinônimo de amor é amar

( Frase 5  <b>D</b> )

<span class="tablatura">[Tab - Frase 5 - Violão 2]

         <b>D</b>                 <b>G</b>  
<span class="cnt">E|-------2----3-2-0-------------------------|
B|-------3----------3-1---------------------|
G|-------2--------------2--0----------------|
D|-0-0h2-0----------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Frase 5 - Violão 3]

   <b>D</b>             <b>G</b>
<span class="cnt">E|---7-5------------------------------------|
B|-------8-7-5-7-8...-----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Segunda Parte]

<span class="tablatura">[Tab - Frase 6 - Violão 2]

         <b>C</b>              <b>G</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------0h2-0-------------------|
D|--------------0h2-------------------------|
A|-0-2-2h3-2-0------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Frase 6 - Violão 3]

         <b>C</b>              <b>G</b>
<span class="cnt">E|------------------3h5-3-------------------|
B|--------------3h5-------------------------|
G|-2-4-4h5-4-2------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Frase 7 - Violão 2]

         <b>C</b>          <b>D</b>           <b>Am</b>         <b>D</b> 
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-2-4-4/5--5h7-5-4-2--0--------------------|
D|------------------------4--0--2--0--------|
A|-----------------------------------3-2---5|
E|---------------------------------------3--|</span></span>

<span class="tablatura">[Tab - Frase 7 - Violão 3]

            <b>D</b>        <b>Am</b>          <b>D</b> 
<span class="cnt">E|-8h10-8-7---------------------------------|
B|----------10-8-7--------------------------|
G|-----------------7-9-7--------------------|
D|-----------------------10-9----12---------|
A|----------------------------10------------|
E|------------------------------------------|</span></span>

<b>G</b>                     <b>D/F#</b>       
  Quem revelará o mistério
     <b>Am</b>      (Frase 6) <b>C</b>
Que tenha fé
<b>G</b>                      <b>D/F#</b>                   
  E quantos segredos traz
                     <b>Am</b> (Frase 6) <b>C</b>
O coração de uma mulher
<b>G</b>                      <b>D/F#</b>                   
  Como é triste a tristeza
                  <b>Am</b>  (Frase 6)  <b>C</b>
Mendigando um sorriso
<b>G</b>                       <b>D/F#</b>                   
  Um cego procurando a luz
                    <b>Am</b>  (Frase 7) <b>C</b>
Na imensidão do paraíso

[Pré-Refrão 2]

<span class="tablatura">[Tab - Frase 8 - Violão 3]
                     <b>C</b> 
<span class="cnt">E|-17-15-14-15-14----14---------------------|
B|----------------17----17-15-17-15---------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">                   <b>D</b>
<span class="cnt">E|------------------------------------------|
B|-13-13h15-13-12-10------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<b>D</b>                   <b>Am</b>        
  Quem tem amor na vida
     <b>D</b>    (Frase 8) <b>C</b>
Tem sorte
<b>D</b>                   <b>Am</b>                
  Quem na fraqueza sabe
              <b>G</b>
Ser bem mais forte
 <b>D/F#</b>                          
Ninguém sabe dizer
              <b>Am</b>        (Frase 6) <b>C</b>
Onde a felicidade, está

[Refrão]

<b>G</b>                       <b>D/F#</b>                   
  O amor é feito de paixões
                    <b>C</b>
E quando perde a razão
               <b>D</b>        <b>G</b>
Não sabe quem vai machucar
                      <b>D/F#</b>                   
Quem ama nunca sente medo
                    <b>Am</b>
De contar o seu segredo
   <b>C</b>          <b>D</b>      <b>G</b>
Sinônimo de amor é amar

                      <b>D/F#</b>                    
O amor é feito de paixões
                    <b>Am</b>
E quando perde a razão
     <b>C</b>         <b>D</b>        <b>G</b>
Não sabe quem vai machucar
                      <b>D/F#</b>                    
Quem ama nunca sente medo
                    <b>Am</b>
De contar o seu segredo
   <b>C</b>          <b>D</b>      <b>G</b>
Sinônimo de amor é amar

[Solo] <b>D/F#</b>  <b>Am</b>  <b>C</b> (Frase 6)
       <b>G</b>  <b>Dm7</b>  <b>F</b>  <b>G</b>

<span class="tablatura">[Tab - Solo]

<span class="cnt">E|-10-10-10------10-----10-----10-----10----|
B|-----------7-8----7-8----7-8----7-8-------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----10-----10-----10-----8-7-7-----------|
B|-7-8----7-8----7-8----7-8-------10-10-8-8-|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------7-----------|
B|-----------10-10-10-8-10-8-10---10-8-8----|
G|-9-9--------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|----------7-8-7---7-----------------------|
B|-----8-10-------8---8-10------------------|
G|---7---------------------10-10\9-9-7-7----|
D|-9----------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|----------------------------------8-7-5---|
B|--------------------------------6---------|
G|------------------------------5-----------|
D|-7\5--------------------3-5/7-------------|
A|----8p7--7-8p7-7-8----3-------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-8p6-5-6p5-------6------------------------|
G|-----------7-5-4---4/5--------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Terceira Parte]

<b>C</b>                     <b>G</b>          
  Quem revelará o mistério
     <b>Dm7</b>     (Frase 1)  <b>F</b>
Que tenha fé
<b>C</b>                      <b>G</b>                      
  E quantos segredos traz
                     <b>Dm7</b>  (Frase 1) <b>F</b>
O coração de uma mulher
<b>C</b>                      <b>G</b>                     
  Como é triste a tristeza
                  <b>Dm7</b>  (Frase 1) <b>F</b>
Mendigando um sorriso
<b>C</b>                       <b>G</b>                       
  Um cego procurando a luz
                    <b>Dm7</b>  (Frase 1) <b>F</b>
Na imensidão do paraíso

[Refrão Final]

<b>C</b>                       <b>G/B</b>                  
  O amor é feito de paixões
                    <b>Dm7</b>
E quando perde a razão
     <b>F</b>         <b>G</b>        <b>C</b>
Não sabe quem vai machucar
                      <b>G/B</b>                     
Quem ama nunca sente medo
                    <b>Dm7</b>
De contar o seu segredo
   <b>F</b>          <b>G</b>      <b>C</b>  
Sinônimo de amor é amar

                      <b>G/B</b>                  
O amor é feito de paixões
                    <b>Dm7</b>
E quando perde a razão
     <b>F</b>         <b>G</b>        <b>C</b>
Não sabe quem vai machucar
                      <b>G/B</b>                     
Quem ama nunca sente medo
                    <b>Dm7</b>
De contar o seu segredo
   <b>F</b>          <b>G</b>      <b>C</b>  
Sinônimo de amor é amar

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
D = X X 0 2 3 2
D/F# = 2 X 0 2 3 2
Dm7 = X X 0 2 1 1
F = 1 3 3 2 1 1
G = 3 2 0 0 3 3
G/B = X 2 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SinonimosPartZeRamalhoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chitaozinho-e-xororo/sinonimos/"
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
