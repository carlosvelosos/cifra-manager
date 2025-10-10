import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Pacato Cidadão

[Intro] C

[Primeira Parte]

              C
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  F
C'est fini la utopia

Mas a guerra
       G
Todo dia
           C
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol

[Refrão]

           C
Pacato cidadão
O pacato da civilização
Pacato cidadão
O pacato da civilização

[Primeira Parte]

              C
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  F
C'est fini la utopia

Mas a guerra
       G
Todo dia
           C
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol

[Ponte]
         F
Pra que tanta tevê
              C
Tanto tempo pra peder
               F
Qualquer coisa que se queira
          C
Saber querer
             F
Tudo bem dissipação
           C
De vez em quando é bão
             F
Misturar o brasileiro
G          C
 Com o alemão

[Primeira Parte]

              C
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  F
C'est fini la utopia

Mas a guerra
       G
Todo dia
           C
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol


              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol

              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol

[Ponte]

           F
Pra que tanta sujeira
         C
Nas ruas e nos rios
                F
Qualquer coisa que se suje
            C
Tem que limpar
             F
Se você não gosta dele
          C
Diga logo a verdade
                F
Sem perder a cabeça
G                 C
 Sem perder a amizade
            C
Pacato cidadão

( C )

O pacato da
Civilização
Pacato cidadão
O pacato da
Civilização

[Primeira Parte]

              C
O pacato cidadão
Te chamei a atenção
Não foi a toa não
                  F
C'est fini la utopia

Mas a guerra
       G
Todo dia
           C
Dia a dia não

E tracei a vida inteira

Planos tão incríveis

Tramo a luz do sol
              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol
              F
Apoiado em poesia
              G
E em tecnologia
                C
Agora a luz do sol

[Final]

             F
Consertar o rádio
         C
E o casamento
           F
Corre a felicidade
               C
No asfalto cinzento
                 F
Abolir a escravidão
                 C
Do caboclo brasileiro
             F
Duma mão educação
G             C
 Na outra dinheiro
            C
Pacato cidadão
Ô pacato da
Civilização

----------------- Acordes -----------------
C = X 3 2 0 1 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PacatoCidadaoPage() {
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
