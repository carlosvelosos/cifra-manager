import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/ze-neto-cristiano/escondendo-o-ouro/

const cifra = `Zé Neto e Cristiano - Escondendo o Ouro

[Intro] <b>A</b>  <b>D</b>

<span class="tablatura"><span class="cnt">E|---------------------------------------|
B|---------------------------------------|
G|---------------------------/8--7-------|
D|----------3--3----3| H5--3----------8--|
A|---------------------------------------|
E|-/6--6---------------------------------|</span></span>

      <b>D</b>
Eu já peguei, gostei, fiquei

Larguei, nem sei
                   <b>A</b>
Em quantas bocas eu errei
                    <b>A</b>
Mas tem uma que eu acertei

              <b>D</b>
Eu acertei na sua

E que ela seja a última
          <b>A</b>
Porque se for
                                     <b>B7</b>
Você é a primeira que vai ser pra sempre

<b>Bm7</b> <b>C#m7</b> <b>D</b>
Meu a___mor

[Refrão]

               <b>D</b>                     <b>A</b>
Eu já tive paixões jurando que eram amores
                 <b>F#m7</b>                   <b>E</b>
Eu já mandei errado, alguns buquês de flores
                <b>D</b>                 <b>A</b>
Deus tava me preparando esse tempo todo
               <b>B7</b>                         <b>E</b>
Te deixou pro final, tava escondendo o ouro

               <b>D</b>                     <b>A</b>
Eu já tive paixões jurando que eram amores
                 <b>F#m7</b>                   <b>E</b>
Eu já mandei errado, alguns buquês de flores
                <b>D</b>                 <b>A</b>
Deus tava me preparando esse tempo todo
               <b>B7</b>                         <b>E</b>
Te deixou pro final, tava escondendo o ouro

                 <b>D</b>    <b>Dm</b>             <b>A</b>
Te deixou pro final, tava escondendo o ouro

[Solo] <b>D</b>  <b>A</b>  <b>F#m</b>  <b>E</b>
       <b>D</b>  <b>A</b>  <b>F#m</b>  <b>E</b>

              <b>Bm7</b>
Eu acertei na sua
                  <b>D</b>
E que ela seja a última
          <b>A</b>
Porque se for
                                     <b>B7</b>
Você é a primeira que vai ser pra sempre

<b>Bm7</b>  <b>C#m7</b> <b>D</b>
Meu a....mor

[Refrão]

               <b>D</b>                     <b>A</b>
Eu já tive paixões jurando que eram amores
                 <b>F#m7</b>                   <b>E</b>
Eu já mandei errado, alguns buquês de flores
                <b>D</b>                 <b>A</b>
Deus tava me preparando esse tempo todo
               <b>B7</b>                         <b>E</b>
Te deixou pro final, tava escondendo o ouro

               <b>D</b>                     <b>A</b>
Eu já tive paixões jurando que eram amores
                 <b>F#m7</b>                   <b>E</b>
Eu já mandei errado, alguns buquês de flores
                <b>D</b>                 <b>A</b>
Deus tava me preparando esse tempo todo
               <b>B7</b>                         <b>E</b>
Te deixou pro final, tava escondendo o ouro

                 <b>D</b>   <b>Dm</b>               <b>A</b>
Te deixou pro final, tava escondendo o ouro

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C7 = X 3 2 3 1 X
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb = X 6 5 3 4 3
Ebm = X X 1 3 4 2
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3
Gm7 = 3 X 3 3 3 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EscondendoOOuroPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ze-neto-cristiano/escondendo-o-ouro/"
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
