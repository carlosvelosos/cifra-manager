import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/saulo-fernandes/preta/

const cifra = `Saulo Fernandes - Preta

[Intro] <b>Fm</b>  <b>Bb</b>  <b>Cm7</b>

                     <b>Fm</b>
Agora diz que não me quer
                     <b>Bb</b>          <b>Cm7</b>
Quer liberdade pra fazer o que quiser
                     <b>Fm</b>
Oxente quem te deu axé?
                   <b>Bb</b>              <b>Cm7</b>
Cadê a porra do juízo? Perguntou José
                      <b>Fm</b>
Agora diz que não me amou
               <b>Bb</b>              <b>Cm7</b>
Que não me sufocou e quer me deixar
                    <b>Fm</b>
Até pensei em me perder
               <b>Bb</b>             <b>Cm7</b>
Mas penso em você e fico a esperar

[Refrão]
                          <b>Fm</b>
Você me disse que não vai Preta
<b>Bb</b>   <b>Cm7</b>
Preta Preta

                        <b>Fm</b>
Até que ponto eu sou feliz?
                  <b>Bb</b>              <b>Cm7</b>
Se eu não tenho você até pra conversar
                   <b>Fm</b>
Você machuca o coração
                 <b>Bb</b>
Você me dá desilusão
                 <b>Cm7</b>
E ao mesmo tempo paz
                       <b>Fm</b>
E agora eu choro pra viver
               <b>Bb</b>
Sem ter o teu amor
                 <b>Cm7</b>
Sem ter o teu querer
                  <b>Fm</b>
E pra cabeça respirar
           <b>Bb</b>               <b>Cm7</b>
Eu fico na viagem de você voltar

[Refrão]
                          <b>Fm</b>
Você me disse que não vai Preta
<b>Bb</b>    <b>Cm7</b>
Preta Preta

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm7 = X 3 5 3 4 3
Fm = 1 3 3 1 1 1`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PretaPage() {
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
