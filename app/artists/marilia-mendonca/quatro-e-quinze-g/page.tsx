import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/quatro-e-quinze/

const cifra = `Marília Mendonça - Quatro e Quinze (G)

[Intro] <b>Am</b>  <b>C9</b>  <b>G</b>  <b>D9</b>
        <b>Am</b>  <b>G/B</b>  <b>C9</b>

[Primeira Parte]

           <b>G</b>                 <b>Am</b>
Quatro e quinze vem falar comigo
                 <b>C9</b>
Diz que eu tô sumida
                  
Eu respondi: pois é

Aqui tá tudo bem
<b>G</b>                <b>Am</b>
  Tudo do mesmo jeito
                 <b>C9</b>
Com os mesmos defeitos
                     <b>G/B</b>         <b>Am</b>
A diferença é que alguém me aceitou do jeito que eu sou
         <b>C9</b>
Mas que bom que você perguntou

<b>G</b>                <b>Am</b>                <b>C9</b>
  Só demorou um pouco pra me procurar
                       <b>G/B</b>     <b>Am</b>
Eu já sabia que o seu lance ia acabar
                                 <b>D9</b>
O que começa errado nunca vai durar

[Refrão]

                 <b>G</b>
Olha o que você fez
                 <b>D9</b>                    <b>Am</b>
Era meu grande amor, hoje é só mais um ex
               <b>C9</b>                   <b>G</b>
Trocou sua certeza por qualquer talvez
                <b>D9</b>                      <b>Am</b>
Te perdoar não quer dizer que eu vá voltar

Tá tarde pra você me ligar

<b>G</b>                  <b>D9</b>                    <b>Am</b>
  Era meu grande amor, hoje é só mais um ex
                 <b>C9</b>                <b>G</b>
Nunca deu certo dividir amor pra três
                     <b>D9</b>                <b>Am</b>
Se foi tão bom por que não quis continuar
                <b>C9</b>
Não tá na hora de me ligar
                           <b>G</b>
Desculpa mais eu vou desligar

( <b>Am</b>  <b>C9</b>  <b>G</b>  <b>D9</b>  <b>Am</b>  <b>G/B</b>  <b>C9</b> )

[Primeira Parte]

           <b>G</b>                 <b>Am</b>
Quatro e quinze vem falar comigo
                 <b>C9</b>
Diz que eu tô sumida
                  
Eu respondi: pois é

Aqui tá tudo bem
<b>G</b>                <b>Am</b>
  Tudo do mesmo jeito
                 <b>C9</b>
Com os mesmos defeitos
                     <b>G/B</b>         <b>Am</b>
A diferença é que alguém me aceitou do jeito que eu sou
         <b>C9</b>
Mas que bom que você perguntou

<b>G</b>                <b>Am</b>                <b>C9</b>
  Só demorou um pouco pra me procurar
                       <b>G/B</b>     <b>Am</b>
Eu já sabia que o seu lance ia acabar
                                 <b>D9</b>
O que começa errado nunca vai durar

[Refrão]

                 <b>G</b>
Olha o que você fez
                 <b>D9</b>                    <b>Am</b>
Era meu grande amor, hoje é só mais um ex
               <b>C9</b>                   <b>G</b>
Trocou sua certeza por qualquer talvez
                <b>D9</b>                      <b>Am</b>
Te perdoar não quer dizer que eu vá voltar

Tá tarde pra você me ligar

<b>G</b>                  <b>D9</b>                    <b>Am</b>
  Era meu grande amor, hoje é só mais um ex
                 <b>C9</b>                <b>G</b>
Nunca deu certo dividir amor pra três
                     <b>D9</b>                <b>Am</b>
Se foi tão bom por que não quis continuar
                <b>C9</b>
Não tá na hora de me ligar
                           <b>G</b>
Desculpa mais eu vou desligar

( <b>Am</b>  <b>G/B</b>  <b>C9</b> )

                 <b>G</b>
Olha o que você fez
                 <b>D9</b>                    <b>Am</b>
Era meu grande amor, hoje é só mais um ex
               <b>C9</b>                   <b>G</b>
Trocou sua certeza por qualquer talvez
                <b>D9</b>                      <b>Am</b>
Te perdoar não quer dizer que eu vá voltar

Tá tarde pra você me ligar

<b>G</b>                  <b>D9</b>                    <b>Am</b>
  Era meu grande amor, hoje é só mais um ex
                 <b>C9</b>                <b>G</b>
Nunca deu certo dividir amor pra três
                     <b>D9</b>                <b>Am</b>
Se foi tão bom por que não quis continuar
                <b>C9</b>
Não tá na hora de me ligar
                           <b>G</b>
Desculpa mais eu vou desligar`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function QuatroEQuinzeGPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/quatro-e-quinze/"
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
