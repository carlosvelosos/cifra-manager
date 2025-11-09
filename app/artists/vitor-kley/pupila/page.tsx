import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/vitor-kley/pupila/

const cifra = `Vitor Kley - Pupila

<b>Eb</b>
Como que eu vou dizer pra ela?
                      <b>Dm7</b>
Que eu gosto do seu cheiro
               <b>Cm7</b>
Da cor do seu cabelo
                     <b>Bb</b>
Que ela faz minha pupila dilatar
         <b>Eb</b>
Eu quero dizer pra ele
               <b>Dm7</b>
Que a rima fez efeito
                    <b>Cm7</b>
E agora penso o dia inteiro
                    <b>Bb</b>
Só ele faz minha pupila
    <b>Eb</b>
Dilatar, ta tara tara
 <b>Dm7</b>
Ta ta ta, ta tara tara
 <b>Cm7</b>                    <b>Bb</b>
Ta ta ta, ta tara tara ta

<b>Eb</b>
Sabe
                       <b>Dm7</b>
Depois que eu te conheci
                    <b>Cm7</b>
Ficou difícil de viver
                         <b>Bb</b>
Eu fico aqui imaginando coisas com você
 <b>Eb</b>
Viu
                   <b>Dm7</b>
O nosso som é parecido
                            <b>Cm7</b>
Será que isso é obra do destino?
Pensando bem
    <b>Bb</b>
Contigo até combino

[Refrão]

                 <b>Eb</b>
Como que eu vou dizer pra ela?
                      <b>Dm7</b>
Que eu gosto do seu cheiro
               <b>Cm7</b>
Da cor do seu cabelo
                     <b>Bb</b>
Que ela faz minha pupila dilatar
        <b>Eb</b>
Eu quero dizer pra ele
               <b>Dm7</b>
Que a rima fez efeito
                    <b>Cm7</b>
E agora penso o dia inteiro
                    <b>Bb</b>
Só ele faz minha pupila
     <b>Eb</b>
Dilatar, ta tara tara
 <b>Dm7</b>
Ta ta ta, ta tara tara
 <b>Cm7</b>                    <b>Bb</b>
Ta ta ta, ta tara tara ta

[Segunda Parte]

 <b>Eb</b>
Faz de conta que eu te conheço bem
  <b>Dm7</b>
Quero algum atalho pra te convencer
       <b>Cm7</b>
Que a gente se combina
Só você não vê
        <b>Bb</b>
Mas eu vejo
Eu vejo
   <b>Eb</b>
Ensaio no espelho pra tentar ligar
   <b>Dm7</b>                                  <b>Cm7</b>
Invento mil acasos pra te esbarrar por aí

Não sei o que que eu faço, eu quero mais
     <b>Bb</b>
Eu quero mais de ti

[Refrão]

                 <b>Eb</b>
Como que eu vou dizer pra ela?
                      <b>Dm7</b>
Que eu gosto do seu cheiro
               <b>Cm7</b>
Da cor do seu cabelo
                     <b>Bb</b>
Que ela faz minha pupila dilatar
        <b>Eb</b>
Eu quero dizer pra ele
               <b>Dm7</b>
Que a rima fez efeito
                    <b>Cm7</b>
E agora penso o dia inteiro
                    <b>Bb</b>
Só ele faz minha pupila
     <b>Eb</b>
Dilatar

[Ponte]

        <b>Dm7</b>
É bom demais querer alguém
       <b>Cm7</b>
Eu quero você, eu quero você
       <b>Bb</b>     <b>Eb</b>
Eu quero você
         <b>Dm7</b>
É bom demais querer alguém
       <b>Cm7</b>
E é você que eu quero
       <b>Bb</b>
E é você

[Refrão]

                 <b>Eb</b>
Como que eu vou dizer pra ele?
                     <b>Dm7</b>
Que eu quero aquele beijo
                    <b>Cm7</b>
Que eu sei guardar segredo
                 <b>Bb</b>
Ninguém precisa nem desconfiar
          <b>Eb</b>
Eu quero dizer pra ela
                  <b>Dm7</b>
Que eu amo o seu jeito
                 <b>Cm7</b>
Que o seu óculos é maneiro
                   <b>Bb</b>
Que ela faz minha pupila
     <b>Eb</b>
Dilatar, ta tara tara
 <b>Dm7</b>
Ta ta ta, ta tara tara
 <b>Cm7</b>
Ta ta ta, ta tara tara ta
                   <b>Bb</b>
Que ela faz minha pupila
     <b>Eb</b>
Dilatar, ta tara tara
<b>Dm7</b>
Ta ta ta, ta tara tara
 <b>Cm7</b>                    <b>Bb</b>
Ta ta ta, ta tara tara ta

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb = X 6 5 3 4 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PupilaPage() {
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
