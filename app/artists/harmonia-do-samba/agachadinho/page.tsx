import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/harmonia-do-samba/agachadinho/

const cifra = `Harmonia Do Samba - Agachadinho

<b>G</b>                <b>Am</b>    <b>D</b>        <b>G</b>
Tem gente que só anda de mansinho
                  <b>D</b>   <b>B7</b>        <b>Em</b>
Tem gente que só bebe um pouquinho
              <b>F</b>        <b>G</b>     <b>C</b>
Mulheres que esquecem dos maridos
            <b>D</b>              <b>G</b>
E acabou dormindo com o vizinho
              <b>D</b>   <b>B7</b>     <b>Em</b>
Eu gosto de comer arrumadinho
               <b>Bm</b>    <b>G</b>       <b>C</b>
Agora tem que ser escondidinho
                 <b>Am</b>     <b>D7</b>
Por isso que só vivo agachadinho

<b>G</b> <b>Am</b> <b>D7</b>
Agachadinho
<b>G</b>                 <b>Am</b>      <b>D</b>         <b>G</b>
Tem homem que não guenta ver mulher
                   <b>D</b>  <b>B7</b>    <b>Em</b>
Tem homem que nem sabe o que é
                  <b>F</b>  <b>G</b>         <b>C</b>
Tem gente que só faz com camisinha
                <b>D</b>            <b>G</b>
Pessoas que só usam quando quer
               <b>D</b>    <b>B7</b>       <b>Em</b>
Prefiro prevenir dar um jeitinho
                <b>Bm</b>
Com sexo com seguro com carinho
<b>C</b>            <b>D7</b>        <b>G</b>
Você pode fazer agachadinho

<b>G</b> <b>Am</b> <b>D7</b>
Agachadinho

<b>G</b>                <b>Am</b>    <b>D</b>        <b>G</b>
Tem gente que só anda de mansinho
                  <b>D</b>   <b>B7</b>        <b>Em</b>
Tem gente que só bebe um pouquinho
              <b>F</b>        <b>G</b>     <b>C</b>
Mulheres que esquecem dos maridos
            <b>D</b>              <b>G</b>
E acabou dormindo com o vizinho
              <b>D</b>   <b>B7</b>     <b>Em</b>
Eu gosto de comer arrumadinho
               <b>Bm</b>    <b>G</b>       <b>C</b>
Agora tem que ser escondidinho
                 <b>Am</b>     <b>D7</b>
Por isso que só vivo agachadinho
<b>G</b> <b>Am</b> <b>D7</b>
Agachadinho`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AgachadinhoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/harmonia-do-samba/agachadinho/"
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
