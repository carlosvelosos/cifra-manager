import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/natiruts/me-namora/

const cifra = `Natiruts - Me Namora (part. Edu Ribeiro)

[Intro] <b>G</b>  <b>C</b>  <b>G</b>  <b>C</b>  

[Primeira Parte]

<b>G</b>                        <b>C</b>  
  Lembro que te vi caminhar
                         <b>G</b>  
Já havia um brilho no olhar
                        <b>C</b>  
E junto com um sorriso seu
                                <b>G</b>  
O teu olhar vem de encontro ao meu
                           <b>C</b>  
E o meu dia se fez mais feliz
                         <b>G</b>  
Mesmo sem você perto de mim
          <b>C</b>  
Mesmo longe de mim

<b>G</b>                              <b>C</b>  
  Eu fico o tempo todo à imaginar
                             <b>G</b>  
O que fazer quando te encontrar
                              <b>C</b>  
Mas se eu fizer, o que vai dizer
                          <b>G</b>  
Será que é capaz de entender
                            <b>C</b>  
Mesmo se não for eu vou tentar
                     <b>G</b>  
Vou fazer você me notar
                  <b>C</b>  
Por isso eu vim aqui te dizer

[Refrão]

      <b>G</b>  
Me namora
                                   <b>C</b>  
Pois quando eu saio sei que você chora
                               <b>G</b>  
E fica em casa só contando as horas
                           <b>C</b>  
Reclama só do tempo que demora
                           <b>G</b>  
Abre os braços vem e me namora

                            <b>C</b>  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    <b>G</b>  
O que eu sinto por dentro
                              <b>C</b>  
Beleza essa que eu te canto agora

Abre os braços
            <b>G</b>   <b>C</b>  <b>G</b>  <b>C</b>  
Vem e me namora

[Segunda Parte]

<b>G</b>                                <b>C</b>  
  Eu penso estar vivendo uma ilusão
                         <b>G</b>  
Sem saber se me quer ou não
                               <b>C</b>  
Quem dera se a resposta fosse sim
                              <b>G</b>  
Mas acho que já nem liga pra mim
                        <b>C</b>  
Se for assim o meu coração
                      <b>G</b>  
Sofre só sem você em vão
            <b>C</b>  
Bate mais triste então

<b>G</b>                            <b>C</b>  
  Mas ele ainda pode se alegrar
                        <b>G</b>  
Se de repente você reparar
                           <b>C</b>  
Que com você também aconteceu
                                    <b>G</b>  
Que sente amor tão grande quanto o meu
                              <b>C</b>  
Abra os olhos, veja quem te adora
                             <b>G</b>  
E sonha com você no mundo à fora
             <b>C</b>  
E volta só pra te dizer

[Refrão]

      <b>G</b>  
Me namora
                                   <b>C</b>  
Pois quando eu saio sei que você chora
                               <b>G</b>  
E fica em casa só contando as horas
                           <b>C</b>  
Reclama só do tempo que demora
                           <b>G</b>  
Abre os braços vem e me namora
                            <b>C</b>  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    <b>G</b>  
O que eu sinto por dentro
                              <b>C</b>  
Beleza essa que eu te canto agora

Abre os braços
            <b>G</b>   <b>C</b>  <b>G</b>  <b>C</b>  
Vem e me namora

      <b>G</b>  
Me namora
                                   <b>C</b>  
Pois quando eu saio sei que você chora
                               <b>G</b>  
E fica em casa só contando as horas
                           <b>C</b>  
Reclama só do tempo que demora
                           <b>G</b>  
Abre os braços vem e me namora
                            <b>C</b>  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    <b>G</b>  
O que eu sinto por dentro
                              <b>C</b>  
Beleza essa que eu te canto agora

Abre os braços
            <b>G</b>   <b>C</b>  <b>G</b>  <b>C</b>  <b>G</b>  
Vem e me namora

----------------- Acordes -----------------
C = X 3 2 0 1 0
G = 3 2 0 0 0 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeNamoraPartEduRibeiroPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/natiruts/me-namora/"
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
