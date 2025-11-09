import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/natiruts/liberdade-pra-dentro-da-cabeca/

const cifra = `Natiruts - Liberdade Pra Dentro da Cabeça

[Intro] <b>Bm</b>  <b>Cm</b>  <b>C#m7</b>  <b>Cm</b>  <b>Bm</b>
        <b>Bm</b>  <b>Cm</b>  <b>C#m7</b>  <b>Cm</b>  <b>Bm</b>  <b>Dm7</b> 

[Refrão]
 
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça

[Primeira Parte] 

<b>C#m7</b>         <b>Bm7</b>
     Quando você for embora
<b>C#m7</b>         <b>Bm7</b>
     Não precisa me dizer
<b>C#m7</b>                <b>Bm7</b>
     O que eu não quero jogo fora
<b>C#m7</b>       <b>Bm7</b>
     Você pode entender
<b>C#m7</b>          <b>Bm7</b>
     Desigualdades e a luta
<b>C#m7</b>                <b>Bm7</b>
     Afim de encontrar
<b>C#m7</b>         <b>Bm7</b>
     A liberdade e a paz
<b>C#m7</b>            <b>Bm7</b>
     Que a alma
         <b>C#m7</b>
Precisa ter
<b>Bm7</b>          <b>C#m7</b>  <b>Bm7</b>
    Oh, Baby

[Segunda Parte] 

<b>C#m7</b>         
     Estar com você
<b>Bm7</b>                  <b>C#m7</b>
    Na virada do sol
              <b>Bm7</b>
É compreender    

Que o que há de melhor
       <b>C#m7</b>          <b>Bm7</b>
Tá na vida, na transformação
        <b>C#m7</b>         <b>Bm7</b>
Da natureza que me traz a noção
       <b>C#m7</b>        <b>Bm7</b>
Na verdade eu não vou chorar
      <b>C#m7</b>         <b>Bm7</b>
Hoje sei, o que o terra veio me ensinar
          <b>C#m7</b>              <b>Bm7</b>
Sobre as coisas que vêm do coração
            <b>C#m7</b>
Pra que eu possa trazer
      <b>Bm7</b>         <b>Dm7</b>
Para mim e pra você 

[Refrão] 

<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça

[Segunda Parte]

<b>C#m7</b>         
     Estar com você
<b>Bm7</b>                  <b>C#m7</b>
    Na virada do sol
              <b>Bm7</b>
É compreender    

Que o que há de melhor
       <b>C#m7</b>          <b>Bm7</b>
Tá na vida, na transformação
        <b>C#m7</b>         <b>Bm7</b>
Da natureza que me traz a noção
       <b>C#m7</b>        <b>Bm7</b>
Na verdade eu não vou chorar
      <b>C#m7</b>         <b>Bm7</b>
Hoje sei, o que o terra veio me ensinar
          <b>C#m7</b>              <b>Bm7</b>
Sobre as coisas que vêm do coração
            <b>C#m7</b>
Pra que eu possa trazer 
      <b>Bm7</b>         <b>Dm7</b>
Para mim e pra você 

[Refrão Final] 

<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>  <b>Dm7</b>
  Liberdade pra dentro da cabeça
<b>A</b>       <b>C#m7</b>                 <b>Bm7</b>
  Liberdade pra dentro da cabeça

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
Cm = X 3 5 5 4 3
Dm7 = X 5 7 5 6 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LiberdadePraDentroDaCabecaPage() {
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
