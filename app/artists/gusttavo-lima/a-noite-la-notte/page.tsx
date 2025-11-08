import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/gusttavo-lima/a-noite-la-notte/

const cifra = `Gusttavo Lima - A Noite (La Notte)

[Intro] <b>E</b>  <b>B</b>  <b>D#m7</b>  <b>C#m7</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-----------------------------------------------------|
B|---------------------------5/7---5p4-----------------|
G|-----------------4-4h6p4-3-----------4/6-------------|
D|-4/6-6\4-2-------------------------------------------|
A|-----------4/6---------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

   <b>E</b>
Palavras não bastam, não dá pra entender
      <b>B</b>
Esse medo que cresce e não para
          <b>D#m7</b>
É uma história que se complicou
                  <b>C#m7</b>
Eu sei bem o porquê

          <b>E</b>
Qual é o peso da culpa 

Que eu carrego nos braços?
      <b>B</b>
Me entorta as costas e dá um cansaço
       <b>D#m7</b>
A maldade do tempo fez
                    <b>C#m7</b>
Eu me afastar de você

[Refrão]

           <b>B/D#</b>   <b>E</b>
E quando chega a noite
                   <b>B</b>
Eu não consigo dormir
                <b>D#m7</b>
Meu coração acelera
           <b>G#m7</b>
Eu sozinho aqui
        <b>B/D#</b>    <b>E</b>
Mudo o lado da cama
                 <b>B</b>
Eu ligo a televisão
                      <b>D#m7</b>
Olhos nos olhos do espelho
               <b>G#m7</b>
O telefone na mão

[Segunda Parte]

              <b>E</b>
Pro tanto que eu te queria

O perto nunca bastava
       <b>B</b>
Essa proximidade não dava
       <b>D#m7</b>                  
Me perdi no que era real 
                  <b>C#m7</b>  <b>D#m7</b>
E no que eu inventei
        <b>E</b>
Reescrevi as memórias

Deixei o cabelo crescer
        <b>B</b>
E te dedico uma linda história, confesso
          <b>D#m7</b>          
Nem a maldade do tempo 
                          <b>C#m7</b>
consegue me afastar de você

[Pré-Refrão]

           <b>D#m7</b>      <b>E</b>
Te contei tantos segredos
                    <b>B</b>
Que já não eram só meus
                    <b>D#m7</b>
Rimas de um velho diário
                    <b>G#m7</b>
Que nunca me pertenceu

                     <b>E</b>
Tentei palavras não ditas
                     <b>B</b>
Tantas palavras de amor
                  <b>D#m7</b>
Nossa paixão é antiga
                    <b>G#m7</b>
E o tempo nunca passou

[Refrão]

           <b>D#m7</b>   <b>E</b>
E quando chega a noite
                   <b>B</b>
Eu não consigo dormir
                <b>D#m7</b>
Meu coração acelera
           <b>G#m7</b>
Eu sozinho aqui
        <b>D#m7</b>    <b>E</b>
Mudo o lado da cama
                 <b>B</b>
Eu ligo a televisão
                      <b>D#m7</b>
Olhos nos olhos do espelho
                     <b>G#m7</b>
O telefone na minha mão

Yeah, yeah, yeah, yeah

( <b>E</b>  <b>B</b>  <b>D#m7</b>  <b>C#m7</b>)

[Final]

                  <b>E</b>
E quando chega a noite
                   <b>B</b>
Eu não consigo dormir
                <b>D#m7</b>
Meu coração acelera
           <b>G#m7</b>
Eu sozinho aqui
        <b>D#m7</b>    <b>E</b>
Mudo o lado da cama
                 <b>B</b>
Eu ligo a televisão
                      <b>D#m7</b>
Olhos nos olhos do espelho
       <b>G#m7</b>
O telefone na minha mão

( <b>E</b> )

          <b>B</b>
Na minha mão

----------------- Acordes -----------------
B = X 2 4 4 4 2
B/D# = X 6 X 4 7 7
C#m7 = X 4 6 4 5 4
D#m7 = X X 1 3 2 2
E = 0 2 2 1 0 0
G#m7 = 4 X 4 4 4 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ANoiteLaNottePage() {
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
