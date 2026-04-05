import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/uniao-da-ilha-rj/e-hoje-dia/#

const cifra = `Uniao Da Ilha Rj - E Hoje Dia

[Intro] <b>A</b>  <b>Bm</b>  <b>E7</b>
        <b>A</b>  <b>Bm</b>  <b>E7</b>

<span class="tablatura"><span class="cnt">E|----9-12-9-10--------------9-10-10--------|
B|-10-----------12--12-12-12----------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-12-12-10-9-------------------------------|
B|------------12-10-------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>A</b>
  A minha alegria atravessou o mar
       <b>F#7</b>         <b>Bm</b>  <b>F#7</b>
E ancorou na passarela
 <b>Bm</b>          <b>F#7</b>         <b>Bm</b>
Fez um desembarque fascinante
    <b>E7</b>     <b>A</b>      <b>E7</b>
No maior show da Terra
   <b>A</b>     <b>A5+</b>         <b>A6</b>         <b>Bm</b>
Será que eu serei o dono dessa festa

Um rei
    <b>E7</b>                      <b>A</b>    <b>E7</b>
No meio de uma gente tão modesta
    <b>A</b>      <b>F#7</b>     <b>Bm</b>
Eu vim descendo a serra
  <b>E7</b>              <b>A</b>         <b>E7</b>
Cheio de euforia para desfilar
   <b>A</b>       <b>F#7</b>     <b>Bm</b>
O mundo inteiro espera
        <b>E7</b>             <b>A</b>   <b>E7</b>
Hoje é dia do riso chorar

[Refrão]

             <b>A</b>                <b>F#7</b>     <b>Bm</b>
Levei o meu samba pra mãe de santo rezar
                <b>E7</b>                     <b>A</b>  <b>E7</b>
Contra o mal olhado eu carrego meu patuá
             <b>A</b>                <b>F#7</b>     <b>Bm</b>
Levei o meu samba pra mãe de santo rezar
                <b>E7</b>                     <b>A</b>  
Contra o mal olhado eu carrego meu patuá

[Segunda Parte]

     <b>E7</b>
Acredito
<b>A</b>         <b>F#7</b>          <b>Bm</b>                     <b>E7</b>         <b>A</b>
Acredito ser o mais valente nessa luta do rochedo com o mar
<b>E7</b>         <b>A</b>
   E com o ar!
   <b>F#7</b>    <b>Bm</b>  <b>E7</b>         <b>A</b>
É hoje o dia     da alegria
         <b>Bm</b>        <b>E7</b>                <b>A</b>
E a tristeza, nem pode pensar em chegar
              <b>E7</b>
Diga espelho meu!

[Refrão]

 <b>A</b>      <b>F#7</b>   <b>Bm</b>
Diga espelho meu
             <b>E7</b>                        <b>A</b>  <b>E7</b>
Se há na avenida alguém mais feliz que eu
 <b>A</b>      <b>F#7</b>   <b>Bm</b>
Diga espelho meu
             <b>E7</b>                        <b>A</b>  
Se há na avenida alguém mais feliz que eu
<b>E7</b>
A minha alegria

[Primeira Parte]

<b>A</b>
  A minha alegria atravessou o mar
       <b>F#7</b>         <b>Bm</b>  <b>F#7</b>
E ancorou na passarela
 <b>Bm</b>          <b>F#7</b>         <b>Bm</b>
Fez um desembarque fascinante
    <b>E7</b>     <b>A</b>      <b>E7</b>
No maior show da Terra
   <b>A</b>     <b>A5+</b>         <b>A6</b>         <b>Bm</b>
Será que eu serei o dono dessa festa

Um rei
    <b>E7</b>                      <b>A</b>    <b>E7</b>
No meio de uma gente tão modesta
    <b>A</b>      <b>F#7</b>     <b>Bm</b>
Eu vim descendo a serra
  <b>E7</b>              <b>A</b>         <b>E7</b>
Cheio de euforia para desfilar
   <b>A</b>       <b>F#7</b>     <b>Bm</b>
O mundo inteiro espera
        <b>E7</b>             <b>A</b>   <b>E7</b>
Hoje é dia do riso chorar

[Refrão]

             <b>A</b>                <b>F#7</b>     <b>Bm</b>
Levei o meu samba pra mãe de santo rezar
                <b>E7</b>                     <b>A</b>  <b>E7</b>
Contra o mal olhado eu carrego meu patuá
             <b>A</b>                <b>F#7</b>     <b>Bm</b>
Levei o meu samba pra mãe de santo rezar
                <b>E7</b>                     <b>A</b>  
Contra o mal olhado eu carrego meu patuá

[Segunda Parte]

     <b>E7</b>
Acredito
<b>A</b>         <b>F#7</b>          <b>Bm</b>                     <b>E7</b>         <b>A</b>
Acredito ser o mais valente nessa luta do rochedo com o mar
<b>E7</b>         <b>A</b>
   E com o ar!
   <b>F#7</b>    <b>Bm</b>  <b>E7</b>         <b>A</b>
É hoje o dia     da alegria
         <b>Bm</b>        <b>E7</b>                <b>A</b>
E a tristeza, nem pode pensar em chegar
              <b>E7</b>
Diga espelho meu!

[Refrão]

 <b>A</b>      <b>F#7</b>   <b>Bm</b>
Diga espelho meu
             <b>E7</b>                        <b>A</b>  <b>E7</b>
Se há na avenida alguém mais feliz que eu
 <b>A</b>      <b>F#7</b>   <b>Bm</b>
Diga espelho meu
             <b>E7</b>                        <b>A</b>  
Se há na avenida alguém mais feliz que eu
<b>E7</b>
A minha alegria`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function EHojeDiaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/uniao-da-ilha-rj/e-hoje-dia/#"
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
