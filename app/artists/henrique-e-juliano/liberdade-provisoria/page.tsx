import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/henrique-e-juliano/liberdade-provisoria/

const cifra = `Henrique & Juliano - Liberdade Provisória

[Intro] <b>Em7</b>  <b>Bm7</b>  <b>D9</b>  <b>A</b>

[Tab - Intro]    

<span class="tablatura"><span class="cnt">E|------------------------------3-3-3-3-3-3-|
B|-/5-5--7-7/8~---8\7-5-5-------5-5-5-5-5-5-|
G|-------------------------7-4--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--2--2---5-5-3-3-2-2----------------------|
B|--3--3---7-7-5-5-3-3-5-5-3-3--------------|
G|---------------------6-6-4-4-4-4/9~-------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

     <b>Em7</b>
No início foi assim
      <b>Bm7</b>
Terminou tá terminado
                 <b>D9</b>
Cada um pro seu lado
               <b>A</b>
Não precisa ligar mais
           <b>Em7</b>
Só que foi eu quem terminou
               <b>Bm7</b>
E quem foi largado não espera
       <b>D9</b>
Eu segui minha vida
             <b>A</b>
Até ela começar seguir a dela

[Pré-Refrão]

                 <b>Em7</b>
E do meio pro final
                       <b>Bm7</b>
Eu so ia pra onde ela tava
               <b>D9</b>
Cada beijo no rosto que outra
                        <b>A</b>
Boca dava eu morria de raiva
                 <b>Em7</b>
E ela tava mais linda
                   <b>Bm7</b>
Cada vez que eu olhava
    <b>A/C#</b>      <b>D9</b>
O ciúmes não tava batendo
               <b>A</b>
Tava dando porrada

[Refrão]

                      <b>Em7</b>
E eu implorei pra voltar
                  <b>Bm7</b>
E ela me matou na unha
                      <b>D9</b>
Disse que eu tava solteiro
                           <b>A</b>
Eu tava solteiro porra nenhuma
                 <b>Em7</b>
Implorei pra voltar
                <b>Bm7</b>
Não me manda embora
                  <b>D9</b>
Sou preso da sua vida
                       <b>A</b>
Era só liberdade provisória
                           <b>Em7</b>
Vai ter que me aceitar de volta

( <b>Bm7</b>  <b>D9</b>  <b>A</b> )

[Solo] <b>Em</b>  <b>Bm7</b>  <b>D9</b>  <b>A</b>

<span class="tablatura">[Tab - Solo]

<span class="cnt">E|------------------------------3-3-3-3-3-3-|
B|-/5-5--7-7/8~---8\7-5-5-------5-5-5-5-5-5-|
G|-------------------------7-4--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--2--2---5-5-3-3-2-2----------------------|
B|--3--3---7-7-5-5-3-3-5-5-3-3---/5-5-7-5~--|
G|---------------------6-6-4-4-4------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Pré-Refrão]

                 <b>Em7</b>
E do meio pro final
                       <b>Bm7</b>
Eu so ia pra onde ela tava
               <b>D9</b>
Cada beijo no rosto que outra
                        <b>A</b>
Boca dava eu morria de raiva
                 <b>Em7</b>
E ela tava mais linda
                   <b>Bm7</b>
Cada vez que eu olhava
    <b>A/C#</b>      <b>D9</b>
O ciúmes não tava batendo
               <b>A</b>
Tava dando porrada

[Refrão]

                      <b>Em7</b>
E eu implorei pra voltar
                  <b>Bm7</b>
E ela me matou na unha
                      <b>D9</b>
Disse que eu tava solteiro
                           <b>A</b>
Eu tava solteiro porra nenhuma
                 <b>Em7</b>
Implorei pra voltar
                <b>Bm7</b>
Não me manda embora
                  <b>D9</b>
Sou preso da sua vida
                       <b>A</b>
Era só liberdade provisória
                           <b>Em7</b>
Vai ter que me aceitar de volta

( <b>Bm7</b>  <b>D9</b>  <b>A</b> )

                      <b>Em7</b>
E eu implorei pra voltar
                  <b>Bm7</b>
E ela me matou na unha
                      <b>D9</b>
Disse que eu tava solteiro
                           <b>A</b>
Eu tava solteiro porra nenhuma
                 <b>Em7</b>
Implorei pra voltar
                <b>Bm7</b>
Não me manda embora
                  <b>D9</b>
Sou preso da sua vida
                       <b>A</b>
Era só liberdade provisória
                           <b>Em7</b>
Vai ter que me aceitar de volta

( <b>Bm7</b>  <b>D9</b>  <b>A</b> )

                           <b>Em7</b>
Vai ter que me aceitar de volta

[Final] <b>Bm7</b>  <b>D9</b>  <b>A</b>  <b>Em7</b>

----------------- Acordes -----------------
G#*  = X 0 2 2 2 0 - (*G na forma de G#)
G#/C*  = X 4 X 2 5 5 - (*G/B na forma de G#/C)
A#m7*  = X 2 4 2 3 2 - (*Am7 na forma de A#m7)
C#9*  = X X 0 2 3 0 - (*C9 na forma de C#9)
D#m*  = 0 2 2 0 0 0 - (*Dm na forma de D#m)
D#m7*  = 0 2 2 0 3 0 - (*Dm7 na forma de D#m7)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LiberdadeProvisoriaPage() {
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
