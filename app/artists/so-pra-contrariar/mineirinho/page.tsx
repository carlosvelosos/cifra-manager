import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/so-pra-contrariar/mineirinho/#

const cifra = `So Pra Contrariar - Mineirinho

[Intro] <b>C</b>  <b>G</b>  <b>D</b>  <b>G</b>
 <b>C</b>  <b>G</b>  <b>D</b>  <b>G</b> 

[Primeira Parte]

              <b>C</b> 
Eu não tenho culpa
              <b>G</b>
De comer quietinho
           <b>D</b>
No meu cantinho
              <b>G</b>
Boto pra quebrar

              <b>C</b>
Levo a minha vida
               <b>G</b>
Bem do meu jeitinho
          <b>D</b>
Sou de fazer
              <b>G</b>
Não sou de falar

              <b>C</b> 
Eu não tenho culpa
              <b>G</b>
De comer quietinho
           <b>D</b>
No meu cantinho
              <b>G</b>
Boto pra quebrar

              <b>C</b>
Levo a minha vida
               <b>G</b>
Bem do meu jeitinho
          <b>D</b>
Sou de fazer
              <b>G</b>
Não sou de falar

[Pré-Refrão]

        <b>F</b>                       <b>G</b> 
Quer saber o que tenho pra lhe dar
       <b>F</b>            <b>G</b>
Vai fazer você delirar
       <b>C</b>                   <b>G</b> 
Tem sabor de queijo com docinho
        <b>D</b>                  <b>G</b> 
Meu benzinho, você vai gostar

[Refrão]

         <b>F</b>
É tão maneiro
        <b>C</b>
Uai, é bom demais
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar

          <b>F</b> 
O meu tempero
        <b>C</b>
Uai, mineiro, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

         <b>F</b>
É tão maneiro
        <b>C</b>
Uai, é bom demais
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar

          <b>F</b> 
O meu tempero
        <b>C</b>
Uai, mineiro, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

 ( <b>C</b>  <b>G</b>  <b>D</b>  <b>G</b> )
 ( <b>C</b>  <b>G</b>  <b>D</b>  <b>G</b> )

[Primeira Parte]

              <b>C</b> 
Eu não tenho culpa
              <b>G</b>
De comer quietinho
           <b>D</b>
No meu cantinho
              <b>G</b>
Boto pra quebrar

              <b>C</b>
Levo a minha vida
               <b>G</b>
Bem do meu jeitinho
          <b>D</b>
Sou de fazer
              <b>G</b>
Não sou de falar

              <b>C</b> 
Eu não tenho culpa
              <b>G</b>
De comer quietinho
           <b>D</b>
No meu cantinho
              <b>G</b>
Boto pra quebrar

              <b>C</b>
Levo a minha vida
               <b>G</b>
Bem do meu jeitinho
          <b>D</b>
Sou de fazer
              <b>G</b>
Não sou de falar

[Pré-Refrão]

        <b>F</b>                       <b>G</b> 
Quer saber o que tenho pra lhe dar
       <b>F</b>            <b>G</b>
Vai fazer você delirar
       <b>C</b>                   <b>G</b> 
Tem sabor de queijo com docinho
        <b>D</b>                  <b>G</b> 
Meu benzinho, você vai gostar

[Refrão]

         <b>F</b>
É tão maneiro
        <b>C</b>
Uai, é bom demais
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar

          <b>F</b> 
O meu tempero
        <b>C</b>
Uai, mineiro, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

         <b>F</b>
É tão maneiro
        <b>C</b>
Uai, é bom demais
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar

          <b>F</b> 
O meu tempero
        <b>C</b>
Uai, mineiro, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar

<b>F</b>   <b>C</b>
Ai, ai
 <b>D</b>
Não tem como
     <b>G</b>
Duvidar
 <b>F</b>    <b>C</b>
Faz, faz
  <b>D</b>
Quem provar
        <b>G</b>
Se amarrar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MineirinhoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/so-pra-contrariar/mineirinho/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
