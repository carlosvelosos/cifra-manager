import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/henrique-e-juliano/recaidas/

const cifra = `Henrique e Juliano - Recaídas

[Intro] <b>G</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|----------------------------------------------------|
B|-6/8--7-8~------------------------------------------|
G|-----------------5----------------------------------|
D|---------------5---7/9~-----------------------------|
A|-----------5h7--------------------------------------|
E|----------------------------------------------------|</span></span>

[Primeira Parte]

      <b>G</b>
Você pode, ficar com quem você quiser
                <b>Em7</b>
Não tem nada a ver
                   <b>C9</b>
Eu não mando em você
            <b>Am</b>
Mas ainda choro
                                     <b>D</b>
E quando alguém comenta não quero saber

        <b>G</b>
Me preocupo
   
E apesar dos pesares 
                    <b>Em7</b> 
Eu sempre quero te ver bem
         <b>C9</b>
E ainda vou além
          <b>Am</b>
Em uma relação 

Sei que não vai ser fácil
               <b>D</b>
Amar outro alguém

[Segunda Parte]

   <b>G</b>
E hoje, mesmo separados sinto
                       <b>D</b>
Que seu corpo ainda é meu

Às vezes me escondo e faço de tudo 
               <b>Am</b>
Pra ninguém notar que eu
        <b>C9</b>
Vivo e morro por ti
     <b>Am</b>     
Tem semanas que as vezes 
              <b>D</b>
Sofro vem as recaídas

    <b>G</b>
Às vezes eu queria ter o poder
                         <b>D</b>
De poder te apagar da memória

E nessa fraqueza ter força pra fazer
              <b>Am</b>                  <b>C9</b>
Com que essa nossa história, não passe
              <b>D</b>                  <b>G</b>   <b>D</b>
De passado e fique da porta pra fora

[Refrão]

         <b>G</b>                        <b>D</b>
Se eu pudesse te apagar da minha mente
           <b>Am</b>  <b>C9</b>
Apagaria agora
          <b>G</b>  
Mas toda vez 
                         <b>D</b>
Que eu me lembro de nós dois
                 <b>Am</b>     
Meu coração sempre chora
<b>C9</b>                  <b>G</b>        <b>D</b>     
   E é sempre a mesma história   
  <b>Am</b>     <b>C9</b>
Aaa  aaa

[Solo] <b>G</b>  <b>Em7</b>  <b>C9</b>  <b>Am</b>  <b>D</b>

<span class="tablatura">Parte 1 de 5
<span class="cnt">E|-------------------------------------------------|
B|-------------------------------------------------|
G|---------------7/9~------------------------------|
D|--------7-9-10-----------------------------------|
A|-7-9-10------------------------------------------|
E|-------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 5
<span class="cnt">E|-------------------------------------------------|
B|-6/8-7-8~---12-12\10-10-10\8--8-8--7-7--7h8--8~--|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 5
<span class="cnt">E|-------------------------------------------------|
B|-10/12-12\10--10-10\8--8-8--7-7--7-8-------------|
G|--------------------------------------7/9~-------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 5
<span class="cnt">E|-8-8-8--7-7-7------------------------------------|
B|--------------10-10-10--8-8--8h10--10~-----------|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|</span></span>

<span class="tablatura">Parte 5 de 5
<span class="cnt">E|-------------------------------------------------|
B|-7-8p7-------7-8-10-10/12~-----------------------|
G|-------9-7-9-------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|</span></span>

[Segunda Parte]

   <b>G</b>
E hoje, mesmo separados sinto
                       <b>D</b>
Que seu corpo ainda é meu

Às vezes me escondo
                              <b>Am</b>
E faço de tudo pra ninguém notar que eu
        <b>C9</b>
Vivo e morro por ti
     <b>Am</b>                                
Tem semanas que as vezes 
                <b>D</b>
Sofro vem as recaídas

    <b>G</b>
Às vezes eu queria ter o poder
                         <b>D</b>
De poder te apagar da memória

E nessa fraqueza ter força pra fazer
              <b>Am</b>                  <b>C9</b>
Com que essa nossa história, não passe
              <b>D</b>                  <b>G</b>   <b>D</b>
De passado e fique da porta pra fora

[Repete o Refrão]

         <b>G</b>                        <b>D</b>
Se eu pudesse te apagar da minha mente
           <b>Am</b>  <b>C9</b>
Apagaria agora
          <b>G</b>    
Mas toda vez 
                         <b>D</b>
Que eu me lembro de nós dois
                 <b>Am</b>     
Meu coração sempre chora
<b>C9</b>                  <b>G</b>        <b>D</b>     
   E é sempre a mesma história   
  <b>Am</b>     <b>C9</b>  <b>G</b>
Aaa  aaa

[Solo Final] 

<span class="tablatura">Parte 1 de 2
<span class="cnt">E|-------------------------------------------------|
B|-------------------------------------------------|
G|---------------7/9~------------------------------|
D|--------7-9-10-----------------------------------|
A|-7-9-10------------------------------------------|
E|-------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|-------------------------------------------------|
B|-6/8--7-8~---------------------------------------|
G|-----------------5-------------------------------|
D|---------------5---7/9~--------------------------|
A|-----------5h7-----------------------------------|</span></span>
E|-------------------------------------------------|

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C9 = X 3 2 0 3 3
D = X X 0 2 3 2
Em7 = 0 2 2 0 3 3
G = 3 2 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RecaidasPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
