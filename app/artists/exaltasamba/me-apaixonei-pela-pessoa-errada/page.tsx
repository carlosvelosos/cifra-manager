import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/me-apaixonei-pela-pessoa-errada/

const cifra = `Exaltasamba - Me Apaixonei Pela Pessoa Errada

[Primeira Parte]

             <b>D7M</b>
Eu não tenho culpa de estar te amando
            <b>F#m7</b>
De ficar pensando em você; toda hora
      <b>Em7</b>                  <b>Em/D</b>
Não entendo por que deixei acontecer
<b>A/C#</b>                <b>G/B</b>  <b>A7</b>
Isso tudo me apavora

             <b>D7M</b>
Você não tem culpa se eu estou sofrendo
        <b>F#m7</b>
Se fantasiei de verde esta história
     <b>Em7</b>                <b>Em/D</b>
Você tem namorado posso até estar errado
    <b>C#m7(5-)</b>               <b>F#4</b>  <b>F#7</b>
Mas tenho que ganhar você

<b>Bm7</b>                            <b>F#m7</b>
  É mais do que desejo é muito mais do amor
      <b>Em</b>            <b>Em/D</b>
Eu te vejo nos meus sonhos
               <b>G7M</b>            <b>A7</b>
E isso aumenta mais a minha dor

[Refrão]

            <b>D</b>
Eu me apaixonei pela pessoa errada
               <b>Bm7</b>                    <b>Bm/A</b>
Ninguém sabe o quanto que estou sofrendo
              <b>G7M</b>             <b>Em</b>
Sempre que eu vejo ele do seu lado
           <b>A7</b>                      <b>A4</b>  <b>A7</b>
Morro de ciúme estou enlouquecendo

 <b>D7M</b>       <b>F#m7</b>                   <b>Em</b>
    Fica comigo amor, me deixa ao menos te tocar
                   <b>Em7</b>               <b>A4</b>  <b>A7</b>
Entenda que ao meu lado  é seu lugar

[Final] <b>D7M</b>  <b>Bm</b>  <b>Em</b>
        <b>D7M</b>  <b>E</b>  <b>A4</b>  <b>A7</b>

----------------- Acordes -----------------
A/C# = X 4 X 2 5 5
A4 = X 0 2 2 3 0
A7 = X 0 2 0 2 0
Bm = X 2 4 4 3 2
Bm/A = X 0 4 4 3 X
Bm7 = X 2 4 2 3 2
C#m7(5-) = X 4 5 4 5 X
D = X X 0 2 3 2
D7M = X X 0 2 2 2
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
Em/D = X X 0 4 5 3
Em7 = 0 2 2 0 3 0
F#4 = 2 4 4 4 2 2
F#7 = 2 4 2 3 2 2
F#m7 = 2 X 2 2 2 X
G/B = X 2 0 0 3 3
G7M = 3 X 4 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeApaixoneiPelaPessoaErradaPage() {
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
