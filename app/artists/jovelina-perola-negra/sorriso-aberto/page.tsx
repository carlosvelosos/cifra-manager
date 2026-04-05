import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jovelina-perola-negra/sorriso-aberto/#

const cifra = `Jovelina Perola Negra - Sorriso Aberto

[Intro] <b>Em7(5-)</b>  <b>A7</b>  <b>Dm</b>
        <b>Dm/C</b>  <b>E7</b>  <b>A7</b>

<b>Dm</b>         <b>C</b>
Lá laiá laiá laiá
       <b>Bb7</b>
Laiá laiá laiá
       <b>A7</b>
Laiá laiá laiá
<b>Dm</b>             <b>C</b>
Lá laiá laiá laiá laiá laiá
       <b>Bb7</b>
Laiá laiá laiá
       <b>A7</b>
Laiá laiá laiá
<b>Gm</b>        <b>A7</b>        <b>Dm</b>                                <b>Em7(5-)</b>   <b>A7</b>
Lá laiá laiá laiá laiá  samba aqui,samba ali, samba la
<b>Dm</b>        <b>Gm</b>     <b>Dm</b>    <b>A/C#</b>
Lá laiá laiá laiá laiá
<b>Dm</b>        <b>A7</b>       <b>Dm</b>   <b>A7</b>
Lá laiá laiá laiá laiá, pois é
<b>Dm</b>              <b>C</b>
É, foi ruim a bessa
              <b>Bb7</b>
Mas pensei depressa
         <b>Em7(5-)</b>          <b>A7</b>             <b>Dm</b>
Numa solução para a depressão, fui ao violão
            <b>C</b>
Fiz alguns acordes
            <b>Bb7</b>
Mas pela desordem
         <b>Em7(5-)</b>              <b>A7</b>
Do meu coração, não foi mole não
<b>Em7(5-)</b>      <b>A7</b>       <b>Dm</b>    <b>Dm/C</b>
Quase que sofri desilusão
<b>Bb7</b>          <b>C7</b>         <b>F</b>
Quase que sofri desilusão
    <b>C7</b>
Tristeza
<b>F</b>
Tristeza foi assim
          <b>C</b>                  <b>C#º</b>
Se aproveitando pra tentar
      <b>Dm</b>             <b>Gm</b>
Se aproximar, ai de mim
                  <b>Em7(5-)</b>       <b>A7</b>     <b>Dm</b>
Se não fosse o pandeiro e o ganzá e o tamborim
                <b>Gm</b>  <b>A7</b>   <b>Dm</b>
Pra ajudar a marcar, meu tamborim
                <b>Gm</b> <b>A7</b>
Pra ajudar a marcar
<b>Dm</b>                  <b>C</b>
Logo, eu com meu sorriso aberto
        <b>Bb7</b>                  <b>Em7(5-)</b>  <b>A7</b>
E o paraíso perto, pra vida melhorar
    <b>Dm</b>                    <b>C</b>
Malandro desse tipo que balança mas não cai
             <b>Bb7</b>
De qualquer jeito vai
           <b>Em7(5-)</b>  <b>A7</b>
Ficar bem mais legal
    <b>Bb7</b>        <b>A7</b>              <b>Dm</b>     (<b>Bb7</b> <b>A7</b>)
Pra nivelar a vida em alto astral

    <b>Bb7</b>      <b>A7</b>                <b>Dm</b>    <b>A7</b>
Pra nivelar a vida em alto astral
     <b>Bb7</b>       <b>A7</b>              <b>Dm</b>
Pra nivelar a vida em alto astral

                             <b>A7</b>
Samba aqui, samba ali, samba la`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function SorrisoAbertoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jovelina-perola-negra/sorriso-aberto/#"
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
