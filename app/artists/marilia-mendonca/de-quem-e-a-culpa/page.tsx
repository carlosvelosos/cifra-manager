import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/de-quem--a-culpa/

const cifra = `Marília Mendonça - De Quem É a Culpa?

[Intro] <b>G</b>  <b>D5</b>  <b>Am7</b>  <b>C</b>

<span class="tablatura">[Tab - Intro]

        <b>G</b>
<span class="cnt">E|------3--3-3-3-3-3-3-3-3-3--3/5-----|
B|------3-----------------------------|
G|------0-----------------------------|
D|------0-----------------------------|
A|------2-----------------------------|
E|-0-2--3-----------------------------|</span></span>

<span class="tablatura">   <b>D5</b>
<span class="cnt">E|-5---2-2-2-2-2-2-2-2p0--------------|
B|-3----------------------------------|
G|-2----------------------------------|
D|-0----------------------------------|
A|------------------------------------|
E|------------------------------------|</span></span>

<span class="tablatura">     <b>Am7</b>              <b>C</b>
<span class="cnt">E|-3---p0-----------------------------|
B|---1-----0h1p0------1---------------|
G|---0-----0-----2-0--0---------------|
D|---2-----2----------0h2-------------|
A|---0-----0----------3---------------|
E|------------------------------------|</span></span>

[Primeira Parte]

<b>Em</b>         <b>D/F#</b>  <b>G</b>
   Exagerado    sim
                  <b>Am</b>
Sou mais você que eu
           <b>G/B</b>  <b>C</b>
Sobrevivo de olhares
                         <b>Em</b>
E alguns abraços que me deu
                 <b>D/F#</b>  <b>G</b>
E o que vai ser de    mim
                     <b>Am</b>
E o meu assunto que não muda
              <b>G/B</b>  <b>C</b>
Minha cabeça não ajuda, loucura

[Segunda Parte]

<span class="tablatura">[Tab - Passagem]

   <b>C</b>
<span class="cnt">E|------------------------------------|
B|-0h1p0------------------------------|
G|-0-----2-0--------------------------|
D|-2----------------------------------|
A|-3----------------------------------|
E|------------------------------------|</span></span>

    <b>Em</b>
Tortura
                          <b>D</b>
E que se dane a minha postura
                      <b>Am</b>
Se eu mudei você não viu
                           <b>C</b>
Eu só queria ter você por perto
            <b>Em</b>
Mas você sumiu
                               <b>D</b>
É tipo vício que não tem mais cura
                     <b>Am</b>
E agora de quem é a culpa
           <b>C</b>
A culpa é sua por ter esse sorriso
<b>Am</b>                                  <b>C</b>
   Ou a culpa é minha por me apaixonar

Por ele

Só isso

[Refrão]

<b>G</b>
  Não finja que eu não tô falando
       <b>D</b>
Com você
                         <b>Am</b>
Eu tô parado no meio da rua
                            <b>C</b>
Eu tô entrando no meio dos carros
                          <b>G</b>
Sem você a vida não continua

Não finja que eu não to falando
       <b>D</b>
Com você
                                <b>Am</b>
Ninguém entende o que eu tô passando
                           <b>G/B</b>  <b>C</b>
Quem é você que eu não conheço mais
                               <b>G</b>
Me apaixonei pelo que eu inventei

De você

( <b>G</b>  <b>D5</b>  <b>Am7</b>  <b>C</b> )

[Segunda Parte]

            <b>Em</b>
Mas você sumiu
                               <b>D</b>
É tipo vício que não tem mais cura
                     <b>Am</b>
E agora de quem é a culpa
           <b>C</b>
A culpa é sua por ter esse sorriso
<b>Am</b>                                  <b>C</b>
   Ou a culpa é minha por me apaixonar

Por ele. Só isso

[Refrão]

<b>G</b>
  Não finja que eu não tô falando
       <b>D</b>
Com você
                         <b>Am</b>
Eu tô parado no meio da rua
                            <b>C</b>
Eu tô entrando no meio dos carros
                          <b>G</b>
Sem você a vida não continua

Não finja que eu não tô falando
       <b>D</b>
Com você
                                <b>Am</b>
Ninguém entende o que eu tô passando
                           <b>G/B</b>  <b>C</b>
Quem é você que eu não conheço mais
                               <b>G</b>
Me apaixonei pelo que eu inventei

De você

( <b>D5</b>  <b>Am7</b> )

     <b>C</b>
Me apaixonei pelo que eu inventei
        <b>G</b>
De você

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
C = 2 0 1 2
D = 4 2 3 4
Em = 5 4 5 5
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeQuemEACulpaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/de-quem--a-culpa/"
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
