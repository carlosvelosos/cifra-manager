import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/leao/

const cifra = `Marília Mendonça - Leão

[Intro] <b>E</b>  <b>G#</b>  <b>C#m</b>
        <b>A</b>  <b>E</b>  <b>G#</b>  <b>C#m</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-----12-11-9-----------------------------------------|
B|-9-9---------12-9-9--9------9------9------9\7--------|
G|-----------------------9-11---9-11---9-11-----9-6----|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">[Tab - Riff]

Parte 1 de 2
<span class="cnt">E|-----5-----5-----------0-----0-----------------------|
B|-------5-----5---5-------0-----0---0-----------------|
G|-5/6-----6-----6-----1-----1-----1-------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|---4-----4----------4-----4--------------------------|
B|-----4-----4---4------5-----5---5--------------------|
G|-5-----5-----5----6-----6-----6----------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 1 de 2 - variação
<span class="cnt">E|-----5-----5-----------0-----7-5-4h5p4p0-------------|
B|-------5-----5---5-------0---------------0-----------|
G|-5/6-----6-----6-----1-----1-------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

       <b>A</b>                  <b>E</b>
Que o Sol da manhã te dissolva
        <b>G#</b>                  <b>C#m</b>
Seu vampiro de filmes pastelão
 <b>A</b>                   <b>E</b>
Mas quem vai nos julgar?
         <b>G#</b>           <b>C#m</b>
Sou seu despenteado leão

[Segunda Parte]

<b>A</b>                        <b>E</b>
  Sei que cê me entende bem
                        <b>G#</b>
Sempre foge quando namora

Se você não ama ninguém
<b>C#m</b>                            <b>A</b>
    Porque tá me escutando agora?

     <b>E</b>
Sua linda, tão louca
           <b>G#</b>
Minha Monalisa, tira a minha roupa
 <b>C#m</b>             <b>A</b>
Me fascina nessa   sina
             <b>E</b>
Me beija na boca
                <b>G#</b>
Minha mulher menina
                    <b>C#m</b>
Me ensina ser vida louca
             <b>A</b>
Teu olho piscina
                       <b>E</b>
Me afoga e faz boca a boca
              <b>G#</b>
Renova minha rima
                         <b>C#m</b>
Vem de garfo que hoje é sopa, menina

[Terceira Parte]

 <b>A</b>                   <b>E</b>   <b>G#</b>  <b>C#m</b>
Mas quem vai nos julgar?
 <b>A</b>            <b>E</b>  <b>G#</b>  <b>C#m</b>
Vilão particular

   <b>A</b>              <b>E</b>
Se eu subo nesse palco aqui
     <b>G#</b>            <b>C#m</b>
Foi Deus que me criou assim
      <b>A</b>         <b>E</b>                <b>G#</b>
E os holofotes vem ao meu encontro
            <b>C#m</b>           <b>A</b>
É que eu te amo e nem te conto
      <b>E</b>                 <b>G#</b>   <b>C#m</b>
Não, não posso ser seu santo

 <b>A</b>             <b>E</b>
Sou fato ou hipótese
 <b>G#</b>                 <b>C#m</b>
Sou rei, cigano ou nômade
 <b>A</b>                 <b>E</b>         <b>G#</b>
Desculpe esse meu jeito soberano
         <b>C#m</b>                <b>A</b>
Mas hoje é por você que eu canto
<b>E</b>                  <b>G#</b>   <b>C#m</b>
É por você que eu canto

[Quarta Parte]

<b>A</b>                        <b>E</b>
  Sei que cê me quer também
                   <b>G#</b>
Marília leoa gostosa
                    <b>C#m</b>
Posso te ligar meu bem?
                          <b>A</b>
Que que cê tá fazendo agora?
     <b>E</b>                  
Tão lindo, tão louco
             <b>G#</b>
Meu grande amigo
                  <b>C#m</b>
Depois de você os outros são outros
         <b>A</b>                 <b>E</b>
Cê tá fodido, vamo fazer amor
                      <b>G#</b>
Cantar o sertanejo antigo
             <b>C#m</b>
Me beija na boca, amor
 <b>A</b>                     <b>E</b>
Pode ser até que você não me dê moral
  <b>G#</b>                       <b>C#m</b>
Até me ver no espaço pela banca de jornal

[Final] <b>A</b>  <b>E</b>  <b>G#</b>  <b>C#m</b>
        <b>A</b>  <b>E</b>  <b>G#</b>  <b>C#m</b>

----------------- Acordes -----------------
Capotraste na 2ª casa
B*  = P4 4 4 4 - (*C# na forma de B)
D#m*  = 4 3 4 4 - (*Fm na forma de D#m)
F#*  = 4 3 2 4 - (*G# na forma de F#)
A#*  = P3 3 3 3 - (*C na forma de A#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LeaoPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
