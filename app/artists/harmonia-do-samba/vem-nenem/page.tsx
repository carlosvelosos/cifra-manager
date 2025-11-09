import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/harmonia-do-samba/vem-nenem/

const cifra = `[Intro] <b>A</b>  <b>E7</b>  <b>A</b>  <b>E7</b>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-0---------------------0------------------|
E|---0-2-0-2-0-2-0-2-0-2----0-2-0-2-0-2-0-2-|
E|------------------------------------------|</span></span>

[Primeira Parte]

 <b>A</b>    <b>Bm</b>
Neném
                   <b>A</b>     <b>Bm</b>
Olha que te quero comigo
                      <b>A</b>              <b>Bm</b>
Mas sei que estou na tua gatinha coisinha
       <b>A</b>     <b>Bm</b>       <b>A</b>     <b>E7</b>
Te quero bem, te quero bem

 <b>A</b>    <b>Bm</b>
Neném
               <b>A</b>            <b>Bm</b>
E deixa de besteira bobeira
                    <b>A</b>        <b>Bm</b>
Pois de qualquer maneira
            <b>A</b>        <b>Bm</b>
E a vida é tão passageira
          <b>A</b>  <b>Bm</b>        <b>A</b>    <b>Bm</b>
Por isso ve____m, vem meu ne_ném

[Refrão]

 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem
 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem

[Segunda Parte]

    <b>F#m</b>                                <b>C#m</b>
Eu sei que deste jeito esta coisa acontece comigo
<b>D</b>                     <b>E7</b>          <b>A</b>          <b>G#m</b>
  Sua timidez que me faz, que me faz te amar
<b>F#m</b>                              <b>C#m</b>
    Pra ficar seguro você me oferece um abrigo
<b>B</b>                               <b>E7</b>
  Pois o teu encanto que me contêm

[Refrão]

 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem
 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem

 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem
 <b>A</b>
Vem neném neném
 <b>Bm</b>
Vem neném
 <b>A</b>
Vem neném neném
 <b>E7</b>
Vem`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VemNenemPage() {
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
