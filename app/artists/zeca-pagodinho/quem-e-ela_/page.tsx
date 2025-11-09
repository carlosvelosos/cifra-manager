import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro]  <b>G</b>  <b>D7</b>

      <b>G</b>                <b>E7</b>         <b>Am</b>
Quem é ela que vai todo dia na Capela
                     <b>D7</b>                            <b>G</b>  <b>D7</b>
Fazer oração acender vela, dizem que ela zela por mim
      <b>G</b>                   <b>E7</b>        <b>Am</b>
Me contaram que a menina moça é donzela
                          <b>D7</b>                            <b>G</b> <b>G7</b>
Mas quando ela está na janela, sempre joga beijos pra mim

        <b>C#m7(5-)</b>             <b>F#7</b>       <b>Bm7(5-)</b>
Me contaram que ela tem por mim um chamego
           <b>E7</b>          <b>Am</b>               <b>D7</b>       <b>G</b>  <b>G7</b>
Que todo lugar onde eu chego, depois ela chega também
     <b>C#m7(5-)</b>                 <b>F#7</b>        <b>Bm7(5-)</b>
E me olha com jeito de quem quer carinho
           <b>E7</b>      <b>Am</b>                <b>D7</b>           <b>G</b>
Eu fico pensando sozinho, será que ela quer ser meu bem

               <b>E7</b>        <b>Am</b>                <b>D7</b>            <b>G</b>
Se eu vou na Mangueira ela vai, se vou na Portela ela está
             <b>E7</b>          <b>Am</b>               <b>D7</b>        <b>G</b>
Ela vai no Cacique de Ramos, ela vai no Estácio de Sá
             <b>E7</b>          <b>Am</b>              <b>D7</b>         <b>G</b>
Ela vai no pagode em Xerém, ela vai no pagode em Irajá

          <b>C#m7(5-)</b>                 <b>F#7</b> <b>Bm7(5-)</b>
Qualquer dia me invoco e tomo coragem
           <b>E7</b>         <b>Am</b>              <b>D7</b>     <b>G</b>  <b>G7</b>
E rezo em frente a imagem do bom Jesus de Nazaré
      <b>C#m7(5b)</b>                  <b>F#7</b>        <b>Bm7(5-)</b>
Meu Senhor por favor vem ouvir minha prece
             <b>E7</b>         <b>Am</b>           <b>D7</b>           <b>G</b>
Pois só tem a paz quem merece, só tem amor quem tem fé

      <b>D7</b>
Quem é ela

----------------- Acordes -----------------
Am = 2 2 1 2
Bm7(5-) = 3 2 0 0
C#m7(5-) = 5 4 P2 2
C#m7(5b) = 3 4 2 5
D7 = 4 2 1 4
E7 = 2 1 0 0
F#7 = 4 3 P2 2
G = 5 4 3 5
G7 = P3 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
