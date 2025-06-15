import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Natiruts - Me Namora (part. Edu Ribeiro)

[Intro] G  C  G  C  

[Primeira Parte]

G                        C  
  Lembro que te vi caminhar
                         G  
Já havia um brilho no olhar
                        C  
E junto com um sorriso seu
                                G  
O teu olhar vem de encontro ao meu
                           C  
E o meu dia se fez mais feliz
                         G  
Mesmo sem você perto de mim
          C  
Mesmo longe de mim

G                              C  
  Eu fico o tempo todo à imaginar
                             G  
O que fazer quando te encontrar
                              C  
Mas se eu fizer, o que vai dizer
                          G  
Será que é capaz de entender
                            C  
Mesmo se não for eu vou tentar
                     G  
Vou fazer você me notar
                  C  
Por isso eu vim aqui te dizer

[Refrão]

      G  
Me namora
                                   C  
Pois quando eu saio sei que você chora
                               G  
E fica em casa só contando as horas
                           C  
Reclama só do tempo que demora
                           G  
Abre os braços vem e me namora

                            C  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    G  
O que eu sinto por dentro
                              C  
Beleza essa que eu te canto agora

Abre os braços
            G   C  G  C  
Vem e me namora

[Segunda Parte]

G                                C  
  Eu penso estar vivendo uma ilusão
                         G  
Sem saber se me quer ou não
                               C  
Quem dera se a resposta fosse sim
                              G  
Mas acho que já nem liga pra mim
                        C  
Se for assim o meu coração
                      G  
Sofre só sem você em vão
            C  
Bate mais triste então

G                            C  
  Mas ele ainda pode se alegrar
                        G  
Se de repente você reparar
                           C  
Que com você também aconteceu
                                    G  
Que sente amor tão grande quanto o meu
                              C  
Abra os olhos, veja quem te adora
                             G  
E sonha com você no mundo à fora
             C  
E volta só pra te dizer

[Refrão]

      G  
Me namora
                                   C  
Pois quando eu saio sei que você chora
                               G  
E fica em casa só contando as horas
                           C  
Reclama só do tempo que demora
                           G  
Abre os braços vem e me namora
                            C  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    G  
O que eu sinto por dentro
                              C  
Beleza essa que eu te canto agora

Abre os braços
            G   C  G  C  
Vem e me namora

      G  
Me namora
                                   C  
Pois quando eu saio sei que você chora
                               G  
E fica em casa só contando as horas
                           C  
Reclama só do tempo que demora
                           G  
Abre os braços vem e me namora
                            C  
Eu quero dar vazão ao sentimento

Mostrar que é lindo
                    G  
O que eu sinto por dentro
                              C  
Beleza essa que eu te canto agora

Abre os braços
            G   C  G  C  G  
Vem e me namora

----------------- Acordes -----------------
C = X 3 2 0 1 0
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeNamoraPartEduRibeiroPage() {
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
