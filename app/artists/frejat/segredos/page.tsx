import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/frejat/segredos/

const cifra = `Frejat - Segredos

[Intro]

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-7---------------------------------------------------|
B|---8-10--7-------------------------------------------|
G|-----------9-7---------------------------------------| (3x)
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

<b>G</b>                    <b>G/D</b>
  Eu procuro um amor
     <b>C9</b>
Que ainda não encontrei
<b>G</b>               <b>D9/F#</b>      <b>C9</b>
  Diferente de todos que amei

<b>G</b>                                <b>G/D</b>
  Nos seus olhos quero descobrir 
       <b>C9</b>
Uma razão para viver
        <b>G</b>                    <b>D9/F#</b>     <b>C9</b>
E as feridas dessa vida eu quero esquecer

[Pré-Refrão 1]

      <b>Em7</b>                  
Pode ser que eu a encontre 
      <b>D</b>
Numa fila de cinema
         <b>Em7</b>     <b>D</b>            <b>C9</b>
Numa esquina ou numa mesa de bar

[Refrão]

    <b>G</b>                <b>D9/F#</b>        <b>C9</b>
Procuro um amor que seja bom pra mim
      <b>G</b>          <b>D9/F#</b>     <b>C9</b>
Vou procurar eu vou até o fim
      <b>Em7</b>             
E eu vou tratá-la bem 
        <b>D</b>
Pra que ela não tenha medo
        <b>C9</b>             <b>G/B</b>            <b>Am7</b>
Quando começar a conhecer os meus segredos

[Segunda Parte]

<b>G</b>                    <b>G/D</b> 
  Eu procuro um amor     
       <b>C9</b>
Uma razão para viver
        <b>G</b>                    <b>D9/F#</b>     <b>C9</b>
E as feridas dessa vida eu quero esquecer

[Pré-Refrão 2]

      <b>Em7</b>               
Pode ser que eu gagueje
       <b>D</b>
Sem saber o que falar
           <b>Em7</b>         <b>D</b>               <b>C9</b>
Mas eu disfarço e não saio sem ela de lá

[Refrão]

    <b>G</b>                <b>D9/F#</b>        <b>C9</b>
Procuro um amor que seja bom pra mim
      <b>G</b>          <b>D9/F#</b>     <b>C9</b>
Vou procurar eu vou até o fim
      <b>Em7</b>             
E eu vou tratá-la bem 
        <b>D</b>
Pra que ela não tenha medo
        <b>C9</b>             <b>G/B</b>            <b>Am7</b>
Quando começar a conhecer os meus segredos

[Solo] <b>G</b>  <b>D9/F#</b>  <b>C9</b>  <b>C7</b>
       <b>G</b>  <b>D9/F#</b>  <b>C9</b>  <b>G/B</b>  <b>Am</b> 

<span class="tablatura">Parte 1 de 3             
<span class="cnt">E|------12\5-5-7-7\5-3---------------------------------|
B|-8/12--------------------8-8/10-8---8---8---11-10/8--|
G|---------------------7/9----------9---9---9----------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 3
<span class="cnt">E|---------12\5-5~-------------------------------------|
B|-----12~---------10h12p10-8-8---11p10p8---8---8-10-5~|
G|-(9)---------------------------9--------9---9--------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
<span class="cnt">E|-----15----15-15----15----19-17-15----15~------------|
B|-/17----17-------17----17----------17----------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Refrão Final]

     <b>G</b>                <b>D9/F#</b>        <b>C9</b>
Procuro um amor que seja bom pra mim
      <b>G</b>          <b>D9/F#</b>     <b>C9</b>
Vou procurar eu vou até o fim
       <b>G</b>                <b>D9/F#</b>        <b>C9</b>
Eu Procuro um amor que seja bom pra mim
      <b>G</b>          <b>D9/F#</b>     <b>C9</b>  <b>G</b>
Vou procurar eu vou até o fim

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
C7 = X 3 2 3 1 X
C9 = X 3 5 5 3 3
D = X X 0 2 3 2
D9/F# = 2 X 0 2 3 0
Em7 = 0 2 2 0 3 0
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
G/D = X 5 5 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SegredosPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/frejat/segredos/"
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
