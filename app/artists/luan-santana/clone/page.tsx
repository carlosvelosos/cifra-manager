import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/luan-santana/clone/

const cifra = `Luan Santana - Clone

[Intro] <b>G</b>  <b>D/F#</b>  <b>Em7</b>  <b>C9</b>

<span class="tablatura">[Tab - Intro]
   <b>G</b>                   <b>D/F#</b>                <b>Em7</b>
<span class="cnt">E|----------------------------------------------------|
B|----------3-------------------3-------------------3-|
G|-------4-----2h4--2--------2-----0h2--0--------0----|
D|-5------------------------------------------2-------|
A|------------------------4---------------------------|
E|----3----------------2-------------------0----------|</span></span>

<span class="tablatura">                 <b>C9</b>          
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|--2/4--4\2--0--0------------------------------------|
D|---------------0h2----------------------------------|
A|--------------------2/3--2--0h2--0------------------|
E|------------------------------------3---------------|</span></span>

[Primeira Parte]

  <b>G</b>      <b>D/F#</b>
Pra começar
                     <b>Em7</b>       <b>C9</b>
Sua mãe vai se encantar comigo

 <b>G</b>             <b>D/F#</b>
Se eu contar piada pro seu pai
          <b>Em7</b>        <b>C9</b>
Ele vai cair no riso

[Pré-Refrão]

 <b>G</b>
Sua amiga mais chata
                <b>D/F#</b>
Vai falar que agora acertou
<b>Em7</b>
    Churrasquinho em família
               <b>C9</b>
Vai perder a graça se eu não for

  <b>Em7</b>
Agarra o amor

E não deixa escapar
     <b>D</b>
Só pra garantir

Vou passando aqui
<b>C9</b>               <b>D</b>
Até você me agarrar

[Refrão]

<b>G</b>          <b>D/F#</b>
Ahh ah-ah,      pensa nos fi' bonito
    <b>Em7</b> 
Que a   gente vai dar
<b>C9</b>
   Eu vou soltar foguete
 <b>G</b>
Se sair seu clone
<b>D/F#</b>
     Cê entra com a beleza
  <b>Em7</b>              <b>C9</b>
E eu com sobrenome

<b>G</b>          <b>D/F#</b>
Ahh ah-ah,      pensa nos fi' bonito
    <b>Em7</b> 
Que a   gente vai dar
<b>C9</b>
   Eu vou soltar foguete
 <b>G</b>
Se sair seu clone
<b>D/F#</b>
     Cê entra com a beleza
  <b>C</b>                    <b>G</b>
E eu entro com o sobrenome

( <b>G</b>  <b>D/F#</b> <b>Em7</b>  <b>C9</b> )

[Pré-Refrão]

 <b>G</b>
Sua amiga mais chata
                <b>D/F#</b>
Vai falar que agora acertou
<b>Em7</b>
    Churrasquinho em família
               <b>C9</b>
Vai perder a graça se eu não for

  <b>Em7</b>
Agarra o amor

E não deixa escapar
     <b>D</b>
Só pra garantir

Vou passando aqui
<b>C9</b>               <b>D</b>
Até você me agarrar

[Refrão]

<b>G</b>          <b>D/F#</b>
Ahh ah-ah,      pensa nos fi' bonito
    <b>Em7</b> 
Que a   gente vai dar
<b>C9</b>
   Eu vou soltar foguete
 <b>G</b>
Se sair seu clone
<b>D/F#</b>
     Cê entra com a beleza
  <b>Em7</b>              <b>C9</b>
E eu com sobrenome

<b>G</b>          <b>D/F#</b>
Ahh ah-ah,      pensa nos fi' bonito
    <b>Em7</b> 
Que a   gente vai dar
<b>C9</b>
   Eu vou soltar foguete
 <b>G</b>
Se sair seu clone
<b>D/F#</b>
     Cê entra com a beleza
  <b>C</b>                    <b>G</b>
E eu entro com o sobrenome

( <b>G</b>  <b>D/F#</b> <b>Em7</b>  <b>C</b> )

                       <b>G</b> 
Eu vou soltar foguete se sair seu clone
<b>D/F#</b>                         <b>C9</b>
     Cê entra com a beleza e eu
                  <b>G</b>
Entro com o sobrenome

----------------- Acordes -----------------
B*  = X 3 2 0 1 0 - (*A# na forma de B)
B9*  = X 3 5 5 3 3 - (*A#9 na forma de B9)
C#*  = X X 0 2 3 2 - (*C na forma de C#)
C#/F*  = 2 X 0 2 3 2 - (*C/E na forma de C#/F)
D#m7*  = 0 2 2 0 3 0 - (*Dm7 na forma de D#m7)
F#*  = 3 2 0 0 0 3 - (*F na forma de F#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ClonePage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
