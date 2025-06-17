import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Natiruts - Presente De Um Beija-Flor

[Intro] 

( Abm7  Db/F  Bbm7/Eb  Ebm7 )
( Abm7  Db/F  Gb  Db/F  Ebm7 ) 
( Abm7  Db/F  Bbm7/Eb  Ebm7 )
( Abm7  Db/F  Gb  Db/F  Ebm7 ) 

[Refrão]

        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora
        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora

[Primeira Parte]

      Abm7                  Db/F
Veja só a névoa branca que sai
                 Bbm7/Eb   Ebm7
De trás do bambuzal
         Abm7           Db/F
Será que ela me faz bem 
             Bbm7/Eb   Ebm7
Ou será que me faz mal
           Abm7                 Db/F
Eu vou surfar no céu azul de nuvens doidas
        Bbm7/Eb        Ebm7
Da capital do meu país
               Abm7                 Db/F
Pra ver se esqueço da pobreza e violência
             Bbm7/Eb          Eb7
Que deixa o meu povo infeliz

[Refrão]

        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora
        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora

[Primeira Parte]

       Abm7
E a menina que um dia
      Db/F           Bbm7/Eb  Ebm7
Por acaso veio me dizer
            Abm7                   Db/F
Que não gostava de meninos tão largados
           Bbm7/Eb     Ebm7
Que tocam reggae e MPB
            Abm7
Mas isso é coisa tão banal
 Db/F            Bbm7/Eb         Ebm7
Perto da beleza do Planalto Central
          Abm7                 Db/F
E das pessoas que fazem do Cerrado
       Bbm7/Eb     Eb7
O habitat quase ideal

[Refrão]

        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora
        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora

[Primeira Parte]

     Abm7             Db/F       Bbm7/Eb     Ebm7
Agradeço por estar aqui, manifestar a emoção
       Abm7                    Db/F
E colocar minhas ideias, sentimentos
          Bbm7/Eb  Ebm7
Em forma de canção 
     Abm7              Db/F        Bbm7/Eb  Ebm7
Agradeço por poder cantar e ver você ouvir
      Abm7                 Db/F
E tentar entender essa mensagem

         Bbm7/Eb     Eb7
Que eu quero transmitir

[Refrão]

        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora
        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora

[Primeira Parte]

       Abm7                  Db/F
Fim de ano vou embora de Brasília
              Bbm7/Eb  Ebm7
Que é pra eu ver o mar
             Abm7                    Db/F
Mas diz pra mãe lá pro final de fevereiro
          Bbm7/Eb   Ebm7
É que eu vou voltar
              Abm7                      Db/F
Que é pra surfar no céu azul de nuvens doidas
        Bbm7/Eb     Ebm7
Da capital do meu país
               Abm7                 Db/F
Pra ver se esqueço da pobreza e violência
             Bbm7/Eb         Eb7
Que deixa o meu povo infeliz

[Refrão]

        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora
        Abm7                Db
Beija-flor que trouxe meu amor
  Bbm7          Ebm7
Voou e foi embora
      Abm7                 Db
Olha só como é lindo meu amor
   Bbm7         Ebm7
Estou feliz agora

[Solo] Abm7  Db/F  Bbm7/Eb   Ebm7

----------------- Acordes -----------------
Abm7 = 4 X 4 4 4 X
Bbm7 = X 1 3 1 2 1
Bbm7/Eb = X 6 6 6 6 6
Db = X 4 6 6 6 4
Db/F = X 8 X 6 9 9
Eb7 = X 6 5 6 4 X
Ebm7 = X X 1 3 2 2
Gb = 2 4 4 3 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PresenteDeUmBeijaFlorPage() {
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
