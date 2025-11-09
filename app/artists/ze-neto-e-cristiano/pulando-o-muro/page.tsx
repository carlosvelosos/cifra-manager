import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/ze-neto-cristiano/pulando-o-muro/

const cifra = `Zé Neto e Cristiano - Pulando o Muro

[Intro] <b>G</b>  <b>B7</b>  <b>Em</b>  <b>C</b>

<b>G</b>                    <b>B7</b>
Tô na porta da casa dela
     <b>Em</b>
Quem nunca fez loucura de amor
      <b>C</b>
Que atire a primeira pedra

<b>G</b>                                 <b>B7</b>
Toquei a campanha ela não me atendeu
                            <b>Em</b>
Mandei mensagem ela me bloqueou
                            <b>C</b>
Olhei pro lado e pensei comigo
                             <b>Cm</b>
Será que eu faço, será que eu vou

<b>G</b>                         <b>B7</b>
Lá vai o louco pulando o muro
                     <b>Em</b>
Com buquê de flor na mão

Cachorro latindo
             <b>C</b>
A polícia chegando

A vizinha gritando
        <b>G</b>
Pega ladrão
                          <b>B7</b>
Lá vai o louco pulando o muro
                     <b>Em</b>
Com buquê de flor na mão

Cachorro latindo
             <b>C</b>
A polícia chegando

A vizinha gritando
        <b>G</b>
Pega ladrão

<b>G</b>                             <b>B7</b>
Oh seu polícia quem roubou foi ela
                          <b>Em</b>
Se tem uma criminosa aqui ela
<b>Em</b>                           <b>C</b>
Sem faca, sem roupa ela me roubou
                            <b>G</b>
Meu coração tá lá na cama dela
<b>G</b>                              <b>B7</b>
Oh seu polícia quem roubou foi ela
                          <b>Em</b>
Se tem uma criminosa aqui ela
<b>Em</b>                           <b>C</b>
Sem faca, sem roupa ela me roubou
                            <b>G</b>
Meu coração tá lá na cama dela

 <b>B7</b>  <b>Em</b>  <b>C</b>

<b>G</b>                                 <b>B7</b>
Toquei a campanha ela não me atendeu
                            <b>Em</b>
Mandei mensagem ela me bloqueou
                            <b>C</b>
Olhei pro lado e pensei comigo
                             <b>Cm</b>
Será que eu faço, será que eu vou


<b>G</b>                         <b>B7</b>
Lá vai o louco pulando o muro
                     <b>Em</b>
Com buquê de flor na mão

Cachorro latindo
             <b>C</b>
A polícia chegando

A vizinha gritando
        <b>G</b>
Pega ladrão
                          <b>B7</b>
Lá vai o louco pulando o muro
                     <b>Em</b>
Com buquê de flor na mão

Cachorro latindo
             <b>C</b>
A polícia chegando

A vizinha gritando
        <b>G</b>
Pega ladrão

<b>G</b>                              <b>B7</b>
Oh seu polícia quem roubou foi ela
                          <b>Em</b>
Se tem uma criminosa aqui ela
<b>Em</b>                           <b>C</b>
Sem faca, sem roupa ela me roubou
                            <b>G</b>
Meu coração tá lá na cama dela

<b>G</b>                              <b>B7</b>
Oh seu polícia quem roubou foi ela
                          <b>Em</b>
Se tem uma criminosa aqui ela
<b>Em</b>                           <b>C</b>
Sem faca, sem roupa ela me roubou
                            <b>G</b>
Meu coração tá lá na cama dela

 <b>B7</b>  <b>Em</b>  <b>C</b>

----------------- Acordes -----------------
B7 = X 2 1 2 0 2
C = X 3 2 0 1 0
Cm = X 3 5 5 4 3
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PulandoOMuroPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ze-neto-cristiano/pulando-o-muro/"
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
