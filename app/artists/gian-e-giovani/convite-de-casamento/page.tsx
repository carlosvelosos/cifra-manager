import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/gian-e-giovanni/convite-de-casamento/

const cifra = `Gian e Giovani - Convite de Casamento

[Intro] <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b>
        <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b>

<span class="tablatura">[TAB - Intro]

Parte 1 de 3
   <b>C</b>         <b>G/B</b>       <b>Am</b>        <b>G/B</b>
<span class="cnt">E|--------3---------3---------3---------3--------------|
B|----0h1-------0h1-------0h1-------0h1----------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-3---------2---------0---------2---------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 3
   <b>C</b>             <b>G/B</b>
<span class="cnt">E|-3-----3-----3-------3-----3-------------------------|
B|----0h1---0h1-----0h1---0h1--------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-3-------------2-------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
   <b>Am</b>             <b>G/B</b>
<span class="cnt">E|--------3-----3--------3-----3-----------------------|
B|----0h1---0h1------0h1---0h1-------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-0--------------2------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

   <b>C9</b>                <b>Em</b>           <b>Am</b>
A gente morou e cresceu na mesma rua
         <b>C7</b>              <b>F</b>
Como se fosse o sol e a lua
     <b>F/E</b>        <b>Dm</b>    (Frase 1)
Dividindo o mesmo céu

<b>C9</b>               <b>Em</b>           <b>Am</b>
Eu a vi desabrochar, ser desejada
     <b>C7</b>       <b>F</b>                         
Uma jóia cobiçada, 
        <b>F</b>            <b>G</b>
O mais lindo dos troféus

    <b>F</b>
Eu fui seu guardião
                  <b>C9</b>
Eu fui seu anjo amigo
           <b>Am</b>        <b>D</b>
Mas não sabia que comigo
                    <b>G</b>        <b>G5+</b>
Por ela carregava uma paixão

<span class="tablatura">[TAB - Primeira Parte Estrofe 1 e 2]

Parte 1 de 8
   <b>C9</b>              <b>Em</b>      
<span class="cnt">E|--------3---------------0-----------------|
B|------1----1----------0----0--------------|
G|----0--------0------0--------0------------|
D|------------------------------------------|
A|-3----------------------------------------|
E|----------------0-------------------------|</span></span>

<span class="tablatura">Parte 2 de 8
   <b>Am</b>             <b>C7</b>
<span class="cnt">E|--------0--------------0------------------|
B|------1----1---------1----1---------------|
G|----2--------2-----3--------3-------------|
D|------------------------------------------|
A|-0--------------3-------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 8
   <b>F</b>              <b>F/E</b>
<span class="cnt">E|--------1--------------1------------------|
B|------1----1---------1----1---------------|
G|----2--------2-----2--------2-------------|
D|------------------------------------------|
A|------------------------------------------|
E|-1--------------0-------------------------|</span></span>

<span class="tablatura">Parte 4 de 8
   <b>Dm</b>               Frase 1
<span class="cnt">E|--------1------------------------1--------|
B|------3----3------0----1----3-------------|
G|----2--------2----------------------------|
D|-0-------------------------------0--------|
A|-----------------------0----2-------------|
E|------------------3-----------------------|</span></span>

<span class="tablatura">Parte 5 de 8
   <b>C9</b>              <b>Em</b>      
<span class="cnt">E|--------3---------------0-----------------|
B|------1----1----------0----0--------------|
G|----0--------0------0--------0------------|
D|------------------------------------------|
A|-3----------------------------------------|
E|----------------0-------------------------|</span></span>

<span class="tablatura">Parte 6 de 8
   <b>Am</b>             <b>C7</b>
<span class="cnt">E|--------0--------------0------------------|
B|------1----1---------1----1---------------|
G|----2--------2-----3--------3-------------|
D|------------------------------------------|
A|-0--------------3-------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 7 de 8
   <b>F</b>             
<span class="cnt">E|--------1--------------1------------------|
B|------1----1---------1----1---------------|
G|----2--------2-----2--------2-------------|
D|------------------------------------------|
A|------------------------------------------|
E|-1--------------1-------------------------|</span></span>

<span class="tablatura">Parte 8 de 8
   <b>G</b>
<span class="cnt">E|--------3--------------3------------------|
B|------0----0---------0----0---------------|
G|----0--------0-----0--------0-------------|
D|------------------------------------------|
A|------------------------------------------|
E|-3--------------3-------------------------|</span></span>

[Segunda Parte]

<b>C9</b>                 <b>Em</b>             <b>Am</b>
Eu a vi se aconchegar em outros braços
    <b>C7</b>             <b>F</b>
E saí contando os passos
       <b>F/E</b>      <b>Dm</b>         (Frase 1)
Me sentindo tão    sozinho

    <b>C9</b>             <b>Em</b>        <b>Am</b>
No corpo o sabor amargo do ciúme
          <b>C7</b>             <b>F</b>
A gente quando não se assume
                     <b>G</b>
Fica chorando sem carinho

<span class="tablatura">[TAB - Frase 1]

<span class="cnt">E|----------------1-------------------------|
B|-0----1----3------------------------------|
G|------------------------------------------|
D|----------------0-------------------------|
A|------0----2------------------------------|
E|-3----------------------------------------|</span></span>

[Refrão]

            <b>C</b>
O tempo passou e eu sofri calado
               <b>F</b>
Não deu pra tirar ela do pensamento
                                  <b>G</b>
Eu ia dizer que estava apaixonado
               <b>C</b>                    <b>G</b>
  Recebi o convite do seu casamento
               <b>C</b>                   <b>C7</b>
Com letras douradas num papel bonito
              <b>F</b>                    <b>Fm</b>
Chorei de emoção quando acabei de ler
        <b>C</b>
Num cantinho rabiscado no verso
     <b>G</b>
Ela disse: "Meu amor, eu confesso
         <b>F</b>                    <b>G</b>
Estou casando, mas o grande amor
                   <b>C</b>  <b>G</b>
Da minha vida é você"

( <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b> )
( <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b> )

<span class="tablatura">[TAB - Dedilhado refrão]

Parte 1 de 4
   <b>C</b>             <b>G/B</b>
<span class="cnt">E|-3-----3-----3-------3-----3-------------------------|
B|----0h1---0h1-----0h1---0h1--------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-3-------------2-------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Am</b>             <b>G/B</b>
<span class="cnt">E|--------3-----3--------3-----3-----------------------|
B|----0h1---0h1------0h1---0h1-------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-0--------------2------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>C</b>             <b>G/B</b>
<span class="cnt">E|-------3-----3-------3-----3-------------------------|
B|----0h1---0h1-----0h1---0h1--------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-3-------------2-------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>Am</b>             <b>G/B</b>
<span class="cnt">E|--------3-----3--------3-----3-----------------------|
B|----0h1---0h1------0h1---0h1-------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-0--------------2------------------------------------|
E|-----------------------------------------------------|</span></span>

[Segunda Parte]

<b>C9</b>                 <b>Em</b>             <b>Am</b>
Eu a vi se aconchegar em outros braços
    <b>C7</b>             <b>F</b>
E saí contando os passos
       <b>F/E</b>      <b>Dm</b>         (Frase 1)
Me sentindo tão    sozinho

    <b>C9</b>             <b>Em</b>        <b>Am</b>
No corpo o sabor amargo do ciúme
          <b>C7</b>             <b>F</b>
A gente quando não se assume
                     <b>G</b>
Fica chorando sem carinho

<span class="tablatura">[TAB - Frase 1]

<span class="cnt">E|----------------1-------------------------|
B|-0----1----3------------------------------|
G|------------------------------------------|
D|----------------0-------------------------|
A|------0----2------------------------------|
E|-3----------------------------------------|</span></span>

[Refrão]

            <b>C</b>
O tempo passou e eu sofri calado
               <b>F</b>
Não deu pra tirar ela do pensamento
                                  <b>G</b>
Eu ia dizer que estava apaixonado
               <b>C</b>                    <b>G</b>
  Recebi o convite do seu casamento
               <b>C</b>                   <b>C7</b>
Com letras douradas num papel bonito
              <b>F</b>                    <b>Fm</b>
Chorei de emoção quando acabei de ler
        <b>C</b>
Num cantinho rabiscado no verso
     <b>G</b>
Ela disse: "Meu amor, eu confesso
         <b>F</b>                    <b>G</b>
Estou casando, mas o grande amor
                   <b>C</b>  <b>G</b>
Da minha vida é você"

            <b>C</b>
O tempo passou e eu sofri calado
               <b>F</b>
Não deu pra tirar ela do pensamento
                                  <b>G</b>
Eu ia dizer que estava apaixonado
               <b>C</b>                    <b>G</b>
  Recebi o convite do seu casamento
               <b>C</b>                   <b>C7</b>
Com letras douradas num papel bonito
              <b>F</b>                    <b>Fm</b>
Chorei de emoção quando acabei de ler
        <b>C</b>
Num cantinho rabiscado no verso
     <b>G</b>
Ela disse: "Meu amor, eu confesso
         <b>F</b>                    <b>G</b>
Estou casando, mas o grande amor
                   <b>C</b>  <b>Am</b>
Da minha vida é você

         <b>F</b>                    <b>G</b>
Estou casando, mas o grande amor
                   <b>C</b>  <b>Am</b>
Da minha vida é você

         <b>F</b>                    <b>G</b>
Estou casando, mas o grande amor
                   <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b>  <b>C</b> 
Da minha vida é você"

<span class="tablatura">[TAB - Dedilhado refrão final]

Parte 1 de 2
   <b>C</b>             <b>G/B</b>
<span class="cnt">E|-3-----3-----3-------3-----3-------------------------|
B|----0h1---0h1-----0h1---0h1--------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-3-------------2-------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Am</b>             <b>G/B</b>
<span class="cnt">E|--------3-----3--------3-----3-----0-----------------|
B|----0h1---0h1------0h1---0h1-------1-----------------|
G|-----------------------------------0-----------------|
D|-----------------------------------2-----------------|
A|-0--------------2------------------3-----------------|
E|-----------------------------------------------------|
                                     ↓</span></span>

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
C7 = X 3 2 3 1 0
C9 = X 3 5 5 3 3
D = X X 0 2 3 2
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
F/E = 0 3 3 2 1 1
Fm = 1 3 3 1 1 1
G = 3 2 0 0 3 3
G/B = X 2 0 0 3 3
G5+ = 3 X 1 0 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ConviteDeCasamentoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/gian-e-giovanni/convite-de-casamento/"
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
