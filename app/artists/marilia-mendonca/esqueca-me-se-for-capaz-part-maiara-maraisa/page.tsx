import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/esqueca-me-se-for-capaz/

const cifra = `Marília Mendonça - Esqueça-me Se For Capaz (part. Maiara & Maraisa)

[Intro] <b>Em</b>  <b>A</b>  <b>F#m</b>  <b>Bm</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-----------------------------------------------------|
B|-----------------------------------------------------|
G|-2--4----5---7---------------------------------------|
D|-----------------------------------------------------|
A|-2--4----5---7---------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte] 

 <b>Em</b>
Já que devolveu minhas roupas
 <b>A</b>
Já que arquivou nossas fotos
 <b>F#m</b>                     <b>Bm</b>
Deve ter outra pessoa, aposto

[Pré-Refrão] 

 <b>Em</b>
Tá aproveitando a vida
           <b>A</b>
Os novos amigos
                               <b>F#m</b>
Indo pra lugares que não ia comigo
                       <b>Bm</b>
Tá se enganando e nem sabe disso

[Refrão] 

               <b>Em</b>
Beijar outras bocas depois que termina
           <b>A</b>
É fácil demais
                                 <b>F#m</b>
Fazer sexo por fazer todo mundo faz
                   <b>Bm</b>
Mas esqueça-me se for capaz

          <b>Em</b>
Pode namorar e postar
                        <b>A</b>
Pra tentar tirar minha paz
                            <b>F#m</b>
Mudar telefone, de cidade, vai
                   <b>Bm</b>
Mas esqueça-me se for capaz

( <b>Em</b>  <b>A</b>  <b>F#m</b>  <b>Bm</b> )

[Pré-Refrão] 

 <b>Em</b>
Tá aproveitando a vida
           <b>A</b>
Os novos amigos
                               <b>F#m</b>
Indo pra lugares que não ia comigo
                       <b>Bm</b>
Tá se enganando e nem sabe disso

[Refrão final] 

               <b>Em</b>
Beijar outras bocas depois que termina
           <b>A</b>
É fácil demais
                                 <b>F#m</b>
Fazer sexo por fazer todo mundo faz
                   <b>Bm</b>
Mas esqueça-me se for capaz

          <b>Em</b>
Pode namorar e postar
                        <b>A</b>
Pra tentar tirar minha paz
                            <b>F#m</b>
Mudar telefone, de cidade, vai
                   <b>Bm</b>
Mas esqueça-me se for capaz

( <b>Em</b>  <b>A</b> )

               <b>F#m</b>
Esqueça-me se for capaz
               <b>Bm</b>       <b>Em</b>
Esqueça-me se for capaz

----------------- Acordes -----------------
A = P2 2 2 2
Bm = 4 4 3 4
Em = 5 4 5 5
F#m = 4 2 2 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EsquecaMeSeForCapazPartMaiaraMaraisaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/esqueca-me-se-for-capaz/"
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
