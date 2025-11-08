import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/israel-rodolfo/arruma-um-bao/

const cifra = `Israel & Rodolffo - Arruma Um Bão

<b>F</b>
Às vezes paro pra pensar se eu sou tão

Ruim assim igual você me vê
<b>Gm</b>
Se realmente eu sou um bosta

Se eu faço tudo, tudo errado, toda hora
<b>Bb</b>
E lá fundo eu sei que você sabe tudo
        <b>F</b>
Eu tô apostando no nosso futuro

Tô dando o meu sangue pra gente tá junto
             <b>C</b>
Será que é só medo

De eu parecer tão bom pros seus defeitos?
                <b>Gm</b>
Ou será que cê acha
                               <b>F</b>
Que me valorizando cê vai dar asas pra eu voar?
      <b>F</b>
Eu vou me achar e te largar?
<b>C</b>                                     <b>Am</b>  <b>Gm</b> <b>F</b> <b>Em</b>   <b>Dm</b>
Mal cê sabe que fazendo isso aumenta o risco que cê quer evitar

[Refrão]

                 <b>Bb</b>    <b>C</b>    <b>Dm</b>
Já parou pra pensar como vai ser
                     <b>Bb</b>        <b>C</b>      <b>Dm</b>
Se eu empinar a carroça e te fazer descer?
                    <b>Bb</b>
Seu te amo não vai segurar
        <b>C</b>             <b>Dm</b>
O seu choro não vai comover
                   <b>Bb</b>            <b>C</b>         <b>Dm</b>
O ruim tá indo embora, arruma um bão procê, vem

                 <b>Bb</b>    <b>C</b>    <b>Dm</b>
Já parou pra pensar como vai ser
                     <b>Bb</b>        <b>C</b>      <b>Dm</b>
Se eu empinar a carroça e te fazer descer?
                    <b>Bb</b>
Seu te amo não vai segurar
        <b>C</b>             <b>Dm</b>
O seu choro não vai comover
                   <b>Bb</b>            <b>C</b>         <b>Dm</b>
O ruim tá indo embora, arruma um bão procê

( <b>Bb</b>  <b>C</b>  <b>Dm</b> )

             <b>C</b>
Será que é só medo

De eu parecer tão bom pros seus defeitos?
                <b>Gm</b>
Ou será que cê acha
                               <b>F</b>
Que me valorizando cê vai dar asas pra eu voar?
      <b>F</b>
Eu vou me achar e te largar?
<b>C</b>                                     <b>Am</b>  <b>Gm</b> <b>F</b> <b>Em</b>   <b>Dm</b>
Mal cê sabe que fazendo isso aumenta o risco que cê quer evitar

[Refrão]

                 <b>Bb</b>    <b>C</b>    <b>Dm</b>
Já parou pra pensar como vai ser
                     <b>Bb</b>        <b>C</b>      <b>Dm</b>
Se eu empinar a carroça e te fazer descer?
                    <b>Bb</b>
Seu te amo não vai segurar
        <b>C</b>             <b>Dm</b>
O seu choro não vai comover
                   <b>Bb</b>            <b>C</b>         <b>Dm</b>
O ruim tá indo embora, arruma um bão procê, vem

                 <b>Bb</b>    <b>C</b>    <b>Dm</b>
Já parou pra pensar como vai ser
                     <b>Bb</b>        <b>C</b>      <b>Dm</b>
Se eu empinar a carroça e te fazer descer?
                    <b>Bb</b>
Seu te amo não vai segurar
        <b>C</b>             <b>Dm</b>
O seu choro não vai comover
                   <b>Bb</b>            <b>C</b>         <b>Dm</b>
O ruim tá indo embora, arruma um bão procê
                   <b>Bb</b>            <b>C</b>         <b>Dm</b>
O ruim tá indo embora, arruma um bão procê

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ArrumaUmBaoPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
