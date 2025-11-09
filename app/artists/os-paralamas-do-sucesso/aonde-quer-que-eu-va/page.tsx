import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/os-paralamas-do-sucesso/aonde-quer-que-eu-va/

const cifra = `Os Paralamas do Sucesso - Aonde Quer Que Eu Vá

[Primeira Parte]

[Riff 1]

<span class="tablatura"><span class="cnt">E|-----------------------------------|
B|-----------------------------------|
G|-----------------------------------|
D|-----------------------------------|
A|-0h2-------------------------------|
E|-----------------------------------|</span></span>

[Riff 2]

<span class="tablatura"><span class="cnt">E|-----------------------------------|
B|-----------------------------------|
G|-2p0-------0-----------------------|
D|-0---2-0h2-------------------------|
A|-----------------------------------|
E|-----------------------------------|</span></span>

[Riff 3]

<span class="tablatura"><span class="cnt">E|-----------------------------------|
B|-----------------------------------|
G|-----------------------------------|
D|-----------------------------------|
A|-0-2-3-----------------------------|
E|-----------------------------------|</span></span>

<b>Em7</b>             <b>G</b>
    Olhos fechados
<b>Em7</b>               <b>G</b>
    Pra te encontrar
<b>Em7</b>                     <b>G</b>
    Não estou ao seu lado
<b>Em7</b>               <b>G</b>
    Mas posso sonhar

[Refrão]

<b>C9</b>                      <b>Am7</b>
   E aonde quer que eu vá
        <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Levo você no    olhar
<b>C9</b>                    <b>Am7</b>
   Aonde quer que eu vá
                   <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Aonde quer que eu vá

[Riff 4]

<span class="tablatura"><span class="cnt">E|--------------------------------|
B|--------------------------------|
G|--------------------------------|
D|-----0--------------------------|
A|-0h2----------------------------|
E|-------0------------------------|</span></span>

[Segunda Parte]

<b>Em7</b>                 <b>G</b>
    Não sei bem certo
<b>Em7</b>             <b>G</b>
    Se é só ilusão
<b>Em7</b>                  <b>G</b>
    Se é você já perto
<b>Em7</b>            <b>G</b>
    Se é intuição

[Refrão]

<b>C9</b>                      <b>Am7</b>
   E aonde quer que eu vá
        <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Levo você no    olhar
<b>C9</b>                    <b>Am7</b>
   Aonde quer que eu vá
                   <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Aonde quer que eu vá

[Terceira Parte]

<b>A9</b>           <b>F#m</b>
      Longe daqui
            <b>C#m</b>
Longe de tudo
      <b>D</b>                <b>A9</b>
Meus sonhos vão te buscar
           <b>F#m</b>
Volta pra mim
                <b>C#m</b>
Vem pro meu mundo
    <b>D</b>                 <b>A9</b>
Eu sempre vou te esperar
     <b>F#m</b>     <b>C#m</b>  <b>D</b>  <b>C</b>  <b>B7</b>
Larará, lararára

[Segunda Parte]

<b>Em7</b>                 <b>G</b>
    Não sei bem certo
<b>Em7</b>             <b>G</b>
    Se é só ilusão
<b>Em7</b>                  <b>G</b>
    Se é você já perto
<b>Em7</b>            <b>G</b>
    Se é intuição

[Refrão Final]

<b>C9</b>                      <b>Am7</b>
   E aonde quer que eu vá
        <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Levo você no    olhar
<b>C9</b>                    <b>Am7</b>
   Aonde quer que eu vá
                   <b>G</b>  <b>D11/F#</b> <b>Em7</b>
Aonde quer que eu vá

 <b>C9</b>      <b>Am7</b>     <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Lá, larará, larará
 <b>C9</b>      <b>Am7</b>     <b>G</b>  
Lá, larará, larará
 <b>D11/F#</b>            <b>Em7</b>
Aonde quer que eu vá

 <b>C9</b>      <b>Am7</b>     <b>G</b>  <b>D11/F#</b>  <b>Em7</b>
Lá, larará, larará
 <b>C9</b>      <b>Am7</b>     <b>G</b>  <b>D11/F#</b>   <b>Em7</b>
Lá, larará, larará        larárá
 <b>C9</b>      <b>Am7</b>     <b>G</b>  
Lá, larará, larará
 <b>D11/F#</b>            <b>Em7</b>
Aonde quer que eu vá

----------------- Acordes -----------------
Capotraste na 5ª casa
D9*  = X 0 2 2 0 0 - (*G9 na forma de D9)
Dm7*  = X 0 2 0 1 0 - (*Gm7 na forma de Dm7)
E7*  = X 2 1 2 0 2 - (*A7 na forma de E7)
F*  = X 3 2 0 1 0 - (*A# na forma de F)
F#m*  = X 4 6 6 5 4 - (*Bm na forma de F#m)
F9*  = X 3 2 0 3 3 - (*A#9 na forma de F9)
G*  = X X 0 2 3 2 - (*C na forma de G)
G11/B*  = 2 X X 2 3 3 - (*C11/E na forma de G11/B)
Am7*  = 0 2 2 0 3 3 - (*Dm7 na forma de Am7)
Bm*  = 2 4 4 2 2 2 - (*Em na forma de Bm)
C*  = 3 2 0 0 3 3 - (*F na forma de C)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AondeQuerQueEuVaPage() {
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
