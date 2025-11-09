import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/seu-balance/
const cifra = `

[Intro] <b>D</b>  <b>Bm7</b>  <b>F#m</b>
        <b>Em</b>  <b>A7</b>

<b>D</b>          <b>A7</b>         <b>D</b>
  Quando o canto da sereia
    <b>A7</b>            <b>D</b>
Reluziu no seu olhar
                 <b>B7</b>
Acertou na minha veia
     <b>B7(13-)</b>        <b>Em</b>
Conseguiu me enfeitiçar
      <b>B7</b>            <b>Em</b>
Tem veneno o seu perfume
       <b>B7/F#</b>        <b>Em</b>
Que me faz o seu refém
                   <b>A7</b>
Seu sorriso tem um lume
                    <b>D</b>
Que nenhuma estrela tem
<b>A7</b>                <b>D</b>
Tô com medo desse doce
<b>A7</b>                <b>D</b>
Tô comendo em sua mão
                   <b>D7</b>
Nunca imaginei que fosse
      <b>D7/F#</b>        <b>G</b>
Mergulhar na tentação

Essa boca que me beija
<b>A7</b>                  <b>D</b>
Me enlouquece de paixão
<b>Bm7</b>                  <b>Em</b>
Te entreguei numa bandeja
        <b>A7</b>         <b>D</b>   <b>A7</b>
A chave do meu coração

[Refrão]

       <b>D</b>               <b>B°</b>                  <b>Em</b>
Seu tempero me deixa bolado é um mel misturado com dendê
       <b>A7</b>                                        <b>D/F#</b>          <b>A7</b>
No seu colo eu me embalo eu me embolo até numa casinha de sapê
        <b>Bm7</b>                <b>B7</b>             <b>Em</b>
Como é lindo o bailado debaixo dessa sua saia godê
               <b>A7</b>                        <b>D</b>  <b>A7</b>
Quando roda no bamba-querer, fazendo fuzuê
       <b>D</b>               <b>B°</b>                <b>Em</b>
Minha deusa esse seu encanto parece que vem do Ilê
     <b>A7</b>                                  <b>D</b>        <b>A7</b>
Ou será de um jogo de jongo que fica no Colubandê
      <b>Bm7</b>                  <b>B7</b>              <b>Em</b>
Eu só sei que o som do batuque é truque do seu balancê
             <b>A7</b>                        <b>D</b>   <b>A7</b>
Preta cola comigo porque   tô amando você

<b>D</b>           <b>A7</b>         <b>D</b>
  Quando o canto da sereia
    <b>A7</b>            <b>D</b>
Reluziu no seu olhar
                 <b>B7</b>
Acertou na minha veia
     <b>B7(13-)</b>        <b>Em</b>
Conseguiu me enfeitiçar
      <b>B7</b>            <b>Em</b>
Tem veneno o seu perfume
       <b>B7/F#</b>        <b>Em</b>
Que me faz o seu refém
                   <b>A7</b>
Seu sorriso tem um lume
                    <b>D</b>
Que nenhuma estrela tem
<b>A7</b>                <b>D</b>
Tô com medo desse doce
<b>A7</b>                <b>D</b>
Tô comendo em sua mão
                   <b>D7</b>
Nunca imaginei que fosse
      <b>D7/F#</b>        <b>G</b>
Mergulhar na tentação

Essa boca que me beija
<b>A7</b>                  <b>D</b>
Me enlouquece de paixão
<b>Bm7</b>                  <b>Em</b>
Te entreguei numa bandeja
        <b>A7</b>         <b>D</b>   <b>A7</b>
A chave do meu coração

       <b>D</b>               <b>B°</b>                  <b>Em</b>
Seu tempero me deixa bolado é um mel misturado com dendê
       <b>A7</b>                                        <b>D/F#</b>          <b>A7</b>
No seu colo eu me embalo eu me embolo até numa casinha de sapê
        <b>Bm7</b>                <b>B7</b>             <b>Em</b>
Como é lindo o bailado debaixo dessa sua saia godê
               <b>A7</b>                        <b>D</b>  <b>A7</b>
Quando roda no bamba-querer, fazendo fuzuê
       <b>D</b>               <b>B°</b>                <b>Em</b>
Minha deusa esse seu encanto parece que vem do Ilê
     <b>A7</b>                                  <b>D</b>        <b>A7</b>
Ou será de um jogo de jongo que fica no Colubandê
      <b>Bm7</b>                  <b>B7</b>               <b>Em</b>
Eu só sei que o som do batuque é truque do seu balancê
             <b>A7</b>                        <b>D</b>   <b>Bb7(13)</b>
Preta cola comigo porque   tô amando você
    <b>Eb</b>            <b>C7</b>            <b>Fm</b>
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
    <b>Bb7</b>                        <b>Eb</b>
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
  <b>Cm7</b>             <b>C7</b>           <b>Fm</b>
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
             <b>Bb7</b>                        <b>Eb</b>  <b>Cm7</b>  <b>Gm</b> <b>Gm/Bb</b>
Preta cola comigo porque estou amando você
<b>Fm</b>    <b>Bb7</b>            <b>Eb</b>  <b>Bb7</b> <b>Gm7</b>    <b>Eb7M(9)</b>
        Tô amando você

----------------- Acordes -----------------
Capotraste na 1ª casa
A#7*  = 3 1 3 3 - (*B7 na forma de A#7)
C7*  = 2 3 1 2 - (*C#7 na forma de C7)
C7(13-)*  = 10 9 9 8 - (*C#7(13-) na forma de C7(13-))
C7/G*  = 10 12 11 14 - (*C#7/G# na forma de C7/G)
B7*  = 1 2 0 1 - (*C7 na forma de B7)
B7(13)*  = 7 11 9 9 - (*C7(13) na forma de B7(13))
Cm7*  = 5 3 4 5 - (*C#m7 na forma de Cm7)
C°*  = 4 2 P1 1 - (*C#° na forma de C°)
C#7*  = 3 4 2 3 - (*D7 na forma de C#7)
C#m7*  = 6 4 5 6 - (*Dm7 na forma de C#m7)
D#*  = 5 3 4 5 - (*E na forma de D#)
D#7*  = 5 3 2 5 - (*E7 na forma de D#7)
D#7/G*  = 5 6 4 8 - (*E7/G# na forma de D#7/G)
E*  = 2 1 0 2 - (*F na forma de E)
E7M(9)*  = 2 5 5 5 - (*F7M(9) na forma de E7M(9))
Fm*  = 3 1 1 3 - (*F#m na forma de Fm)
Gm*  = 5 3 3 5 - (*G#m na forma de Gm)
F#m*  = 4 2 2 4 - (*Gm na forma de F#m)
G#*  = 6 5 4 6 - (*A na forma de G#)
G#m*  = 6 4 4 6 - (*Am na forma de G#m)
G#m/B*  = 1 1 0 1 - (*Am/C na forma de G#m/B)
G#m7*  = 6 P4 4 4 - (*Am7 na forma de G#m7)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
