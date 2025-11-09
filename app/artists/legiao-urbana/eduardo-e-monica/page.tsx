import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/legiao-urbana/eduardo-monica/

const cifra = `Legião Urbana - Eduardo e Mônica

[Intro] <b>E</b>  <b>A9</b>  <b>D9</b>  <b>E</b> 
        <b>E</b>  <b>A9</b>  <b>D9</b>  <b>E</b> 

<span class="tablatura">[Tab - Primeira Parte]

   <b>E</b>                 <b>A9</b>
<span class="cnt">E|----2--0--0--0--0-----2--0--2--0--0--0----|
B|----0--0--0--0--0--0--0--0--0--0--0--0----|
G|-1--1--1--1--1--1--2--2--2--2--2--2--2----|
D|-2--2--2--2--2--2--2--2--2--2--2--2--2----|
A|-2-----------------0--0--0--0--0--0--0----|
E|-0----------------------------------------|</span></span>

[Primeira Parte]

  <b>E</b>            <b>A9</b>           <b>D9</b>
Quem um dia irá dizer que existe razão
            <b>E</b>
Nas coisas feitas pelo coração
         <b>A9</b>                <b>D9</b>        <b>E</b>
E quem irá dizer que não existe razão

[Segunda Parte]
 
   <b>B</b>                              <b>E</b>
Eduardo abriu os olhos, mas não quis se levantar
          <b>A</b>                   <b>E</b>
Ficou deitado e viu que horas eram
          <b>B</b>                   <b>E</b>
Enquanto Mônica tomava um conhaque
                   <b>A</b>               <b>Bb5</b>  <b>B4</b>
Noutro canto da cidade, como eles dis--seram

[Primeira Parte]

           <b>E</b>                      <b>A9</b>
Eduardo e Mônica um dia se encontraram sem querer
         <b>D9</b>                        <b>E</b>
E conversaram muito mesmo para tentar se conhecer
                            <b>A9</b>
O carinha do cursinho do Eduardo que disse
         <b>D9</b>                    <b>E</b>
Tem uma festa legal, a gente quer se divertir
                    <b>A9</b>
Festa estranha com gente esquisita
        <b>D9</b>              <b>E</b>
Eu não tô legal, não aguento mais birita

[Segunda Parte]

     <b>B</b>                   <b>E</b>
E a Mônica riu e quis saber um pouco mais
            <b>A</b>                          <b>E</b>
Sobre o boyzinho que tentava impressionar
       <b>B</b>                      <b>E</b>
E o Eduardo meio tonto só pensava em ir para casa
         <b>A</b>               <b>Bb5</b>  <b>B4</b>
É quase duas, eu vou me fer__rar

[Primeira Parte]

           <b>E</b>                   <b>A9</b>
Eduardo e Mônica trocaram telefone
              <b>D9</b>                         <b>E</b>
Depois telefonaram e decidiram se encontrar
                             <b>A9</b>
O Eduardo sugeriu uma lanchonete
                 <b>D9</b>                   <b>E</b>
Mas a Mônica queria ver o filme do Godard

[Segunda Parte]

          <b>B</b>                            <b>E</b>
Se encontraram, então, no parque da cidade
             <b>A</b>                     <b>E</b>
A Mônica de moto e o Eduardo de camelo
     <b>B</b>                         <b>E</b>
O Eduardo achou estranho e melhor não comentar
         <b>A</b>                <b>Bb5</b>  <b>B4</b>
Mas a menina tinha tinta no cabelo

[Primeira Parte]

           <b>E</b>                    <b>A9</b>
Eduardo e Mônica eram nada parecidos
             <b>D9</b>                   <b>E</b>
Ela era de leão e ele tinha dezesseis
                        <b>A9</b>
Ela fazia medicina e falava alemão
       <b>D9</b>                       <b>E</b>
E ele ainda nas aulinhas de inglês
                              <b>A9</b>
Ela gostava do Bandeira e do Bauhaus
                  <b>D9</b>                    
Van Gogh e dos Mutantes
                   <b>E</b>
E Caetano e de Rimbaud
                          <b>A9</b>
E o Eduardo gostava de novela
              <b>D9</b>                    <b>E</b>
E jogava futebol de botão com seu avô
                              <b>A9</b>
Ela falava coisas sobre o Planalto Central
          <b>D9</b>          <b>E</b>
Também magia e meditação
                              <b>A9</b>
E o Eduardo ainda tava no esquema
               <b>D9</b>             <b>E</b>
Escola, cinema, clube, televisão

[Segunda Parte]

   <b>B</b>                  <b>E</b>                       
E mesmo com tudo diferente 
                   <b>A</b>
Veio um medo de repente
                   <b>E</b>
Uma vontade de se ver
      <b>B</b>                        <b>E</b>
E os dois se encontravam todo dia
                 <b>A</b>              <b>Bb5</b>  <b>B4</b>
E a vontade crescia como tinha de   ser

[Primeira Parte]

           <b>E</b>                  <b>A9</b>
Eduardo e Mônica fizeram natação, fotografia
  <b>D9</b>                     <b>E</b>
Teatro e artesanato e foram viajar
                          <b>A9</b>
A Mônica explicava pro Eduardo
                       <b>D9</b>               <b>E</b>
Coisas sobre o céu, a terra, a água e o ar
                                  <b>A9</b>
Ele aprendeu a beber, deixou o cabelo crescer
     <b>D9</b>          <b>E</b>
E decidiu trabalhar
                    <b>A9</b>
E ela se formou no mesmo mês
            <b>D9</b>            <b>E</b>
Que ele passou no vestibular
                       <b>A9</b>
E os dois comemoraram juntos
                   <b>D9</b>                    <b>E</b>
E também brigaram juntos muitas vezes depois
                              <b>A9</b>
E todo mundo diz que ele completa ela
           <b>D9</b>                       <b>E</b>
E vice-versa, que nem feijão com arroz

[Segunda Parte]

       <b>B</b>                      <b>E</b>
Construíram uma casa uns dois anos atrás
         <b>A</b>                       <b>E</b>
Mais ou menos quando os gêmeos vieram
      <b>B</b>                <b>E</b>
Batalharam grana, seguraram legal
         <b>A</b>               <b>Bb5</b>  <b>B4</b>
A barra mais pesada que ti___veram

[Primeira Parte]

           <b>E</b>                       <b>A9</b>
Eduardo e Mônica voltaram para Brasília
              <b>D9</b>                   <b>E</b>
E a nossa amizade dá saudade no verão
                              <b>A9</b>
Só que nessas férias não vão viajar
             <b>D9</b>                     <b>E</b>
Porque o filhinho do Eduardo tá de recuperação

( <b>E</b>  <b>A9</b>  <b>D9</b>  <b>E</b> )
( <b>E</b>  <b>A9</b>  <b>D9</b>  <b>E</b> )

[Primeira Parte]

                <b>A9</b>            <b>D9</b>
E quem um dia irá dizer que existe razão
            <b>E</b>
Nas coisas feitas pelo coração
         <b>A9</b>                <b>D9</b>         <b>E</b>
E quem irá dizer que não existe razão

[Final] <b>D9</b>  <b>E</b>   
        <b>D9</b>  <b>E</b>  <b>D9</b>  <b>E</b> 
        <b>B4</b>  <b>A9</b>  <b>E/G#</b>  
        <b>F#m7(11)</b>  <b>E</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
A9 = X 0 2 2 0 0
B = X 2 4 4 4 2
B4 = X 2 4 4 0 0
Bb5 = X 1 3 3 X X
D9 = X X 0 2 3 0
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 0 0
F#m7(11) = 2 X 2 2 0 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EduardoEMonicaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/legiao-urbana/eduardo-monica/"
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
