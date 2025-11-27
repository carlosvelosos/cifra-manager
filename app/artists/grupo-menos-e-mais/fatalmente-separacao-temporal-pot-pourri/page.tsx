import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/grupo-menos-e-mais/fatalmente-separacao-temporal-pot-pourri

const cifra = `Grupo Menos E Mais - Fatalmente Separacao Temporal Pot Pourri

[Intro] <b>G7(4/9)</b>  <b>G7(9+)</b>  <b>G7(9)</b>
        <b>C7M</b>  <b>Am7(11)</b>  <b>F7M</b>  <b>G7(4/9)</b>
        <b>C7M</b>  <b>Am7(11)</b>  <b>F7M</b>  <b>G7(4/9)</b>

[Primeira Parte]

<b>C7M</b>           <b>Ab7M</b>          <b>Fm</b>           <b>G7(4/9)</b>    <b>C7M</b>
    Passei a vida inteira procurando alguém como você
        <b>Ab7M</b>           <b>Fm</b>           <b>G7(4/9)</b>   <b>C7M</b>
Nunca imaginei que um dia eu fosse me arrepender
          <b>Ab7M</b>        <b>Fm</b>                <b>G7(4/9)</b>    <b>C7M</b>
Você tão linda assim não passava essa imagem para mim
           <b>Ab7M</b>           <b>Fm</b>           <b>G7(4/9)</b>
Achei que nossa história nunca pudesse 
           <b>C7M</b>
Chegar ao fim

[Pré-Refrão]

        <b>Dm7</b>     <b>Em7</b>         <b>C7</b>        <b>F7M</b>
Mas chegou, acabou, é hora de dizer adeus
               <b>Fm6</b>                     <b>C7M</b>
Vacilou, terminou, e o culpado não foi eu
        <b>Dm7</b>     <b>Em7</b>         <b>C7</b>        <b>F7M</b>
Mas chegou, acabou, é hora de dizer adeus
               <b>Ab2</b>         <b>G7(4/9)</b>     <b>C7M</b>
Vacilou, terminou, e o culpado não foi eu

[Refrão]

                 <b>C7(9)</b>           <b>F/A</b>    
Me entreguei de corpo inteiro e mesmo assim 
   <b>Fm7/Ab</b>           <b>C7M</b>
Você quis outro alguém
             <b>C7(9)</b>     <b>F7M</b>       <b>Bb7</b>      
O que aconteceu comigo eu não desejo 
              <b>C7M</b>
Pra mais ninguém
               <b>C7(9)</b>    <b>F/A</b>       
Eu sei que um dia você vai chegar 
   <b>Fm7/Ab</b>       <b>C7M</b>
Pedindo pra voltar
               <b>C7(9)</b>       <b>F7M</b> 
Sinto muito é tarde, fatalmente 
     <b>Bb7</b>             <b>C7M</b>
Terá outra em seu lugar

                 <b>C7(9)</b>           <b>F/A</b>    
Me entreguei de corpo inteiro e mesmo assim 
   <b>Fm7/Ab</b>           <b>C7M</b>
Você quis outro alguém
             <b>C7(9)</b>     <b>F7M</b>       <b>Bb7</b>      
O que aconteceu comigo eu não desejo 
              <b>C7M</b>
Pra mais ninguém
               <b>C7(9)</b>    <b>F/A</b>       
Eu sei que um dia você vai chegar 
   <b>Fm7/Ab</b>       <b>C7M</b>
Pedindo pra voltar
               <b>C7(9)</b>       <b>F7M</b> 
Sinto muito é tarde, fatalmente 
     <b>Bb7</b>             <b>C7M</b>
Terá outra em seu lugar

[Pré-Refrão]

        <b>Dm7</b>     <b>Em7</b>         <b>C7</b>        <b>F7M</b>
Mas chegou, acabou, é hora de dizer adeus
             <b>Fm6</b>                      <b>C7M</b>
Vacilou terminou, e o culpado não foi eu
        <b>Dm7</b>     <b>Em7</b>         <b>C7</b>        <b>F7M</b>
Mas chegou, acabou, é hora de dizer adeus
              <b>Ab2</b>         <b>G7(4/9)</b>     <b>C7M</b>
Vacilou terminou, e o culpado não foi eu

[Refrão]

                 <b>C7(9)</b>           <b>F/A</b>    
Me entreguei de corpo inteiro e mesmo assim 
   <b>Fm7/Ab</b>           <b>C7M</b>
Você quis outro alguém
             <b>C7(9)</b>     <b>F7M</b>       <b>Bb7</b>      
O que aconteceu comigo eu não desejo 
              <b>C7M</b>
Pra mais ninguém
               <b>C7(9)</b>    <b>F/A</b>       
Eu sei que um dia você vai chegar 
   <b>Fm7/Ab</b>       <b>C7M</b>
Pedindo pra voltar
               <b>C7(9)</b>       <b>F7M</b> 
Sinto muito é tarde, fatalmente 
     <b>Bb7</b>             <b>C7M</b>
Terá outra em seu lugar

                 <b>C7(9)</b>           <b>F/A</b>    
Me entreguei de corpo inteiro e mesmo assim 
   <b>Fm7/Ab</b>           <b>C7M</b>
Você quis outro alguém
             <b>C7(9)</b>     <b>F7M</b>       <b>Bb7</b>      
O que aconteceu comigo eu não desejo 
              <b>C7M</b>
Pra mais ninguém
               <b>C7(9)</b>    <b>F/A</b>       
Eu sei que um dia você vai chegar 
   <b>Fm7/Ab</b>       <b>C7M</b>
Pedindo pra voltar
               <b>C7(9)</b>       <b>F7M</b> 
Sinto muito é tarde, fatalmente 
     <b>Bb7</b>             <b>C7M</b>
Terá outra em seu lugar

( <b>G/B</b>  <b>F/Bb</b>  <b>A7(4/9)</b>  <b>A7(9)</b> )

[Segunda Parte]

    <b>Dm7</b>
Melhor assim
   <b>G7(4/9)</b>              <b>G7(9)</b>     <b>Em7(9)</b>
A gente já não se entendia muito bem
        <b>Am7(11)</b>                    <b>Dm7M</b>  <b>Dm7</b>
E a discussão já era a coisa mais comum
         <b>G7(4/9)</b>  <b>G7(9)</b>
E havia tanta 
                      <b>C7M</b>        <b>Em7(5-)/Bb</b>  <b>A7(4/9)</b>  <b>A7(13-)</b>
Indiferença em seu olhar, seu olhar

    <b>Dm7</b>
Melhor assim
         <b>G7(4/9)</b>        <b>G7(9)</b>       <b>Em7</b>
Pra que fingir se você já não tem amor
           <b>Am7</b>                      <b>Dm7M</b>  <b>Dm7</b>
Se teus desejos já não me procuram mais
          <b>G7(9/13)</b>    <b>G7(13)</b> 
Se na verdade pra você 
            <b>C7M</b>  <b>G/B</b>      <b>A7(13-)</b>  <b>A7(4/9)</b>  <b>A7(13-)</b>
Eu já não sou        ninguém 

[Pré-Refrão]
 
    <b>Dm7</b>
De coração
<b>G7(4/9)</b>             <b>G7(9)</b>  <b>Em7(9)</b>
Eu só queria que você fos_se feliz
              <b>Am7(11)</b>                    <b>Dm7M</b>  <b>Dm7</b>
Que outro consiga te fazer o que eu não fiz
          <b>G7(4/9)</b>      <b>G7(9)</b>       <b>C7M</b>  <b>Am7</b>  <b>C7</b>  <b>C</b>
Que você tenha tudo aquilo que sonhou

[Refrão]

     <b>F7M</b>                <b>F#º</b>             <b>Fm6</b>
Mas vá embora antes que a dor machuque mais
         <b>Em7</b>
Meu coração
   <b>Em7(5-)</b>          <b>A7(4)</b>            <b>Dm7</b>  
Antes que eu morra me humilhando de paixão
        <b>G7(4/9)</b>     <b>G7(9)</b>         <b>C7M</b>   <b>Em7(5-)/Bb</b>  <b>A7</b>
E me ajoelhe te implorando pra ficar comigo

     <b>F7M</b>
Não diz mais nada
         <b>F#º</b>      <b>G7(4)</b>            <b>Em7</b>    
A dor é minha eu me aguento pode crer
    <b>Em7(5-)</b>              <b>A7(4)</b>
Mesmo que eu tenha que chorar
          <b>D7(9)</b>         <b>G7</b>    <b>C7M</b>
Pra aprender como esquecer você
        <b>A7</b>
Mas vai embora, vai embora

     <b>F7M</b>                <b>F#º</b>       <b>Fm6</b>
Mas vá embora antes que a dor machuque mais
         <b>Em7</b>
Meu coração
   <b>Em7(5-)</b>          <b>A7(4)</b>            <b>Dm7</b>   <b>Dm7/C</b>
Antes que eu morra me humilhando de paixão
        <b>G7(4/9)</b>  <b>G7(9)</b>             <b>C7M</b>  <b>Am7</b>
E me ajoelhe te  implorando pra ficar   
   <b>Gm6</b>  <b>C7</b>
Comigo

     <b>F7M</b>
Não diz mais nada
         <b>F#º</b>      <b>G7(4)</b>            <b>Em7</b>    
A dor é minha eu me aguento pode crer
    <b>Em7(5-)</b>              <b>A7(4)</b>
Mesmo que eu tenha que chorar
          <b>D7(9)</b>         <b>G7(4/9)</b>  <b>G7(9)</b>    
Pra aprender como esquecer        
   <b>Ab7M</b>
Você

( <b>Eb7M</b>  <b>Ab7M</b>  <b>D7(4)</b>  <b>D7(9-)</b> )

[Terceira Parte] 

     <b>Gm7</b>                                  <b>Cm7</b>
Faz tempo que a gente não é aquele mesmo par
     <b>F</b>                     <b>F7</b>
Faz tempo que o tempo não passa
             <b>Eb</b>  <b>D7(9-)</b>    <b>Gm7</b>
É só você estar,        aqui 
                      <b>Cm7</b>
Até parece que adormeceu
<b>F</b>            <b>F7</b>             <b>Bb7M</b>  <b>D7(9-)</b>  <b>Gm</b>
  O que era noite já amanheceu

[Pré-Refrão] 

   <b>G7</b>               <b>Cm7</b>
Cadê aquele nosso amor
    <b>F7</b>              <b>Bb7M</b>
Naquela noite de verão
  <b>Gm7</b>                 <b>Cm7</b>
Agora a chuva é temporal
   <b>Cm7/Bb</b>           <b>Am7(11)</b>  <b>D7</b>
E todo céu vai desabar

[Refrão Final] 

<b>G7(4)</b>     <b>G7</b>                  <b>Cm7</b> 
É, até parece que o amor não deu
<b>F7</b>                            <b>Bb7M</b>  <b>D7(9-)</b>  <b>Gm</b>
   Até parece que não soube amar
         <b>G7</b>             <b>Cm7</b> 
Você reclama do meu apogeu
<b>F7</b>                     <b>Bb7M</b>  <b>D7(9-)</b>  <b>Gm</b> 
   E todo céu vai desabar

( <b>D7(9-)</b>  <b>Gm</b>  <b>A7</b> ) 

     <b>D7(4/9-)</b>  <b>D7/C</b>  
Desabou me iludi

<b>G7</b>                        <b>Cm7</b>    
É, até parece que o amor não deu
<b>F7</b>                     <b>Bb7M</b>      <b>D7</b>  <b>Gm</b>
   Até parece que não soube amar
         <b>G7</b>             <b>Cm7</b> 
Você reclama do meu apogeu
<b>F7</b>                     <b>Bb7M</b>  <b>D7</b>  <b>Gm</b>  
   E todo céu vai desabar

[Final] <b>D7</b>  <b>Gm</b>  <b>A7</b>  <b>D7(4/9-)</b>  <b>D7/C</b>  <b>Gm9</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FatalmenteSeparacaoTemporalPotPourriPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/grupo-menos-e-mais/fatalmente-separacao-temporal-pot-pourri"
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
