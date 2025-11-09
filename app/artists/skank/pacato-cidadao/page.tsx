import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/skank/pacato-cidadao/

const cifra = `Skank - Pacato Cidadão

[Intro] <b>C</b>

[Primeira Parte]

              <b>C</b>
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  <b>F</b>
C'est fini la utopia

Mas a guerra
       <b>G</b>
Todo dia
           <b>C</b>
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol

[Refrão]

           <b>C</b>
Pacato cidadão
O pacato da civilização
Pacato cidadão
O pacato da civilização

[Primeira Parte]

              <b>C</b>
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  <b>F</b>
C'est fini la utopia

Mas a guerra
       <b>G</b>
Todo dia
           <b>C</b>
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol

[Ponte]
         <b>F</b>
Pra que tanta tevê
              <b>C</b>
Tanto tempo pra peder
               <b>F</b>
Qualquer coisa que se queira
          <b>C</b>
Saber querer
             <b>F</b>
Tudo bem dissipação
           <b>C</b>
De vez em quando é bão
             <b>F</b>
Misturar o brasileiro
<b>G</b>          <b>C</b>
 Com o alemão

[Primeira Parte]

              <b>C</b>
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  <b>F</b>
C'est fini la utopia

Mas a guerra
       <b>G</b>
Todo dia
           <b>C</b>
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol


              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol

              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol

[Ponte]

           <b>F</b>
Pra que tanta sujeira
         <b>C</b>
Nas ruas e nos rios
                <b>F</b>
Qualquer coisa que se suje
            <b>C</b>
Tem que limpar
             <b>F</b>
Se você não gosta dele
          <b>C</b>
Diga logo a verdade
                <b>F</b>
Sem perder a cabeça
<b>G</b>                 <b>C</b>
 Sem perder a amizade
            <b>C</b>
Pacato cidadão

( <b>C</b> )

O pacato da
Civilização
Pacato cidadão
O pacato da
Civilização

[Primeira Parte]

              <b>C</b>
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  <b>F</b>
C'est fini la utopia

Mas a guerra
       <b>G</b>
Todo dia
           <b>C</b>
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol
              <b>F</b>
Apoiado em poesia
              <b>G</b>
E em tecnologia
                <b>C</b>
Agora a luz do sol

[Final]

             <b>F</b>
Consertar o rádio
         <b>C</b>
E o casamento
           <b>F</b>
Corre a felicidade
               <b>C</b>
No asfalto cinzento
                 <b>F</b>
Abolir a escravidão
                 <b>C</b>
Do caboclo brasileiro
             <b>F</b>
Duma mão educação
<b>G</b>             <b>C</b>
 Na outra dinheiro
            <b>C</b>
Pacato cidadão
Ô pacato da
Civilização

----------------- Acordes -----------------
C = X 3 2 0 1 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PacatoCidadaoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/skank/pacato-cidadao/"
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
