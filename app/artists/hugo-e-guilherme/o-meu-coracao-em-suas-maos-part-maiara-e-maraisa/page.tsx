import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/hugo-guilherme/o-meu-coracao-em-suas-maos-part-maiara-e-maraisa/

const cifra = `Hugo & Guilherme - O Meu Coração Em Suas Mãos (part. Maiara e Maraisa)

(Essa é com vocês dois, é? Todo mundo?)

[Intro] <b>F</b>  <b>C</b>  <b>Dm</b>  <b>Bb</b>

 <b>F</b>             <b>C</b>                     <b>Dm</b>
Não foi coincidência encontrar contigo
<b>Bb</b>             <b>C</b>       <b>F</b>
Talvez seja o nosso destino
          <b>C</b>                         <b>Dm</b>
Eu quero dormir outra vez em teu peito
<b>Bb</b>        <b>C</b>               <b>F</b>
E depois acordar com seus beijos

          <b>C</b>                   <b>Dm</b>
Teu sexto sentido ainda sonha comigo
 <b>Bb</b>          <b>C</b>             <b>F</b>
Sei que logo estaremos unidos
                <b>C</b>                   <b>Dm</b>
Teu sorriso travesso ainda vive comigo
<b>Bb</b>                           <b>Dm</b>
Nós estamos no mesmo caminho

              <b>C</b>             <b>Bb</b>
Meu coração está em suas mãos
       <b>C</b>           <b>Dm</b>
Não me deixes cair
         <b>C</b>          <b>Bb</b>
Você sabe que estou
                   <b>C</b>
Presa em suas mãos

<b>F</b>           <b>C</b>                  <b>Gm</b>
Te envio poemas de meu punho e letra
         <b>Bb</b>                      <b>F</b>
Te envio canções pra que você entenda
                 <b>C</b>                    <b>Gm</b>
Te envio minhas fotos pra que você me veja
            <b>Bb</b>                    <b>F</b>
Não estamos juntos, mas tenho certeza
             <b>C</b>                    <b>Gm</b>
Assim, eu espero que nunca se esqueça
               <b>Bb</b>
Que o meu coração está em suas mãos

<b>F</b>          <b>C</b>            <b>Gm</b>
Cuidado, cuidado, muito cuidado (cuidado)
               <b>Bb</b>                   <b>F</b>
Que o meu coração está em suas mãos

( <b>F</b>  <b>C</b>  <b>Dm</b>  <b>Bb</b>  <b>C</b>  <b>F</b> )

<b>F</b>                <b>C</b>                      <b>Dm</b>
Não perco a esperança de encontrar contigo
     <b>Bb</b>            <b>C</b>            <b>F</b>
Não importa o que diga o destino
            <b>C</b>                   <b>Dm</b>
Eu quero manter teu perfume comigo
    <b>Bb</b>       <b>C</b>         <b>Dm</b>
E viver um amor proibido

              <b>C</b>             <b>Bb</b>
Meu coração está em suas mãos
       <b>C</b>           <b>Dm</b>
Não me deixes cair
         <b>C</b>          <b>Bb</b>
Você sabe que estou
                   <b>C</b>
Presa em suas mãos

<b>F</b>           <b>C</b>                  <b>Gm</b>
Te envio poemas de meu punho e letra
         <b>Bb</b>                      <b>F</b>
Te envio canções pra que você entenda
                 <b>C</b>                    <b>Gm</b>
Te envio minhas fotos pra que você me veja
            <b>Bb</b>                    <b>F</b>
Não estamos juntos, mas tenho certeza
             <b>C</b>                    <b>Gm</b>
Assim, eu espero que nunca se esqueça
               <b>Bb</b>
Que o meu coração está em suas mãos

<b>F</b>           <b>C</b>                  <b>Gm</b>
Te envio poemas de meu punho e letra
         <b>Bb</b>                      <b>F</b>
Te envio canções pra que você entenda
                 <b>C</b>                    <b>Gm</b>
Te envio minhas fotos pra que você me veja
            <b>Bb</b>                    <b>F</b>
Não estamos juntos, mas tenho certeza
             <b>C</b>                    <b>Gm</b>
Assim, eu espero que nunca se esqueça
               <b>Bb</b>
Que o meu coração está em suas mãos

<b>F</b>          <b>C</b>            <b>Gm</b>
Cuidado, cuidado, muito cuidado (cuidado)
               <b>Bb</b>                   <b>F</b>  <b>C</b>  <b>Dm</b>
Que o meu coração está em suas mãos

               <b>Bb</b>          <b>C</b>        <b>F</b>
Que o meu coração está em suas mãos

----------------- Acordes -----------------
Capotraste na 1ª casa
B*  = X 1 3 3 3 1 - (*C na forma de B)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
D#m*  = X X 0 2 3 1 - (*Em na forma de D#m)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#m*  = 3 5 5 3 3 3 - (*Am na forma de G#m)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OMeuCoracaoEmSuasMaosPartMaiaraEMaraisaPage() {
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
