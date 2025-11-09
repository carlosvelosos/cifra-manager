import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/alo-porteiro/

const cifra = `Marília Mendonça - Alô Porteiro

[Primeira Parte]

<b>D9</b>                                <b>A9</b>
   Pegue suas coisas que estão aqui
<b>G</b>
  Nesse apartamento 
         <b>D9</b>         <b>A9</b>
Você não entra mais
<b>D9</b>                                  <b>A9</b>
   Olha o que me fez você foi me trair
<b>G</b>                                  <b>D9</b>
  Agora arrependido quer voltar atrás

[Segunda Parte]

    <b>G</b>
Já deu
                                 <b>Bm</b>
Cansei das suas mentiras mal contadas
                                       
Cresci 
                               <b>Em</b>
Não acredito mais em conto de fadas
       <b>G</b>                  <b>A9</b>
Não adianta vir com baixarias

 <b>D/F#</b>  <b>G</b>
Mor___reu
                                   <b>Bm</b>
A mulher carinhosa e fiel que te amava
                        <b>A9</b>     <b>G</b>
Pega o elevador, a sua mala e vaza
       <b>Em</b>               <b>A9</b>
To avisando lá na portaria
       <b>Em</b>         <b>A9</b>
Que aqui você não entra mais

[Refrão]

        <b>D9</b>
Alô porteiro
                      <b>A9</b>
Tô ligando pra te avisar
                                <b>Em</b>
Que a partir de agora eu tô solteira
                       <b>G</b>
Já me cansei da brincadeira
         <b>Em</b>                 <b>A9</b>  <b>G</b>
Chame o táxi que ele vai pagar

  <b>A9</b>    <b>D9</b>
Alô porteiro
                      <b>A9</b>
Tô ligando pra te avisar
                     <b>Em</b>
Esse homem que está aí
              <b>D/F#</b>   <b>G</b>
Ele não pode mais subir
        <b>A9</b>
Tá proibido de entrar

[Solo] <b>D9</b>  <b>A9</b>  <b>Em</b>  <b>D/F#</b>  <b>G</b>
 
<span class="tablatura"><span class="cnt">E|-------5---2-5-5/7-5\-2------------------------------|
B|-----3------------------3----------------------------|
G|---2-------------------------------------------------|
D|-0---------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>
  
<span class="tablatura"><span class="cnt">E|-------5---2-5---7\--5\--3\--2--3--------------------|
B|-----2-----------8\--7\--5\--3--5--------------------|
G|---2-------------------------------------------------|
D|-----------------------------------------------------|
A|-0---------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-3-5-5p3-2------------------------5/7----------------|
B|----------5-3--5h7p5--3-------3----------------------|
G|-------------------------2h4-------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Segunda Parte]

 <b>D/F#</b> <b>G</b>
Já   deu
                                 <b>Bm</b>
Cansei das suas mentiras mal contadas
                                       
Cresci 
                               <b>Em</b>
Não acredito mais em conto de fadas
       <b>G</b>                  <b>A9</b>
Não adianta vir com baixarias

 <b>D/F#</b>   <b>G</b>
Mor____reu
                                   <b>Bm</b>
A mulher carinhosa e fiel que te amava
                        <b>A9</b>     <b>G</b>
Pega o elevador, a sua mala e vaza
       <b>Em</b>               <b>A9</b>
To avisando lá na portaria
       <b>Em</b>         <b>A9</b>
Que aqui você não entra mais

[Refrão]

        <b>D9</b>
Alô porteiro
                      <b>A9</b>
Tô ligando pra te avisar
                                <b>Em</b>
Que a partir de agora eu tô solteira
                       <b>G</b>
Já me cansei da brincadeira
         <b>Em</b>                 <b>A9</b>  <b>G</b>
Chame o táxi que ele vai pagar

  <b>A9</b>    <b>D9</b>
Alô porteiro
                      <b>A9</b>
Tô ligando pra te avisar
                     <b>Em</b>
Esse homem que está aí
              <b>D/F#</b>   <b>G</b>
Ele não pode mais subir
        <b>A9</b>         <b>D5</b>
Tá proibido de entrar

[Final]

<span class="tablatura"><span class="cnt">E|-------5-------5/7-5---------------------------------|
B|-----3-----------------------------------------------|
G|---2-------------------------------------------------|
D|-0---------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

----------------- Acordes -----------------
A9 = P2 4 2 2
Bm = 4 4 3 4
D9 = 0 2 3 2
Em = 5 4 5 5
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AloPorteiroPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/alo-porteiro/"
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
