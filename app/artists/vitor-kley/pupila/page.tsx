import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Vitor Kley - Pupila

                 Eb
Como que eu vou dizer pra ela?
                      Dm7
Que eu gosto do seu cheiro
               Cm7
Da cor do seu cabelo
                     Bb
Que ela faz minha pupila dilatar
         Eb
Eu quero dizer pra ele
               Dm7
Que a rima fez efeito
                    Cm7
E agora penso o dia inteiro
                    Bb
Só ele faz minha pupila
    Eb
Dilatar, ta tara tara
 Dm7
Ta ta ta, ta tara tara
 Cm7                    Bb
Ta ta ta, ta tara tara ta

Eb
Sabe
                       Dm7
Depois que eu te conheci
                    Cm7
Ficou difícil de viver
                         Bb
Eu fico aqui imaginando coisas com você
 Eb
Viu
                   Dm7
O nosso som é parecido
                            Cm7
Será que isso é obra do destino?
Pensando bem
    Bb
Contigo até combino

[Refrão]

                 Eb
Como que eu vou dizer pra ela?
                      Dm7
Que eu gosto do seu cheiro
               Cm7
Da cor do seu cabelo
                     Bb
Que ela faz minha pupila dilatar
        Eb
Eu quero dizer pra ele
               Dm7
Que a rima fez efeito
                    Cm7
E agora penso o dia inteiro
                    Bb
Só ele faz minha pupila
     Eb
Dilatar, ta tara tara
 Dm7
Ta ta ta, ta tara tara
 Cm7                    Bb
Ta ta ta, ta tara tara ta

[Segunda Parte]

 Eb
Faz de conta que eu te conheço bem
  Dm7
Quero algum atalho pra te convencer
       Cm7
Que a gente se combina
Só você não vê
        Bb
Mas eu vejo
Eu vejo
   Eb
Ensaio no espelho pra tentar ligar
   Dm7                                  Cm7
Invento mil acasos pra te esbarrar por aí

Não sei o que que eu faço, eu quero mais
     Bb
Eu quero mais de ti

[Refrão]

                 Eb
Como que eu vou dizer pra ela?
                      Dm7
Que eu gosto do seu cheiro
               Cm7
Da cor do seu cabelo
                     Bb
Que ela faz minha pupila dilatar
        Eb
Eu quero dizer pra ele
               Dm7
Que a rima fez efeito
                    Cm7
E agora penso o dia inteiro
                    Bb
Só ele faz minha pupila
     Eb
Dilatar

[Ponte]

        Dm7
É bom demais querer alguém
       Cm7
Eu quero você, eu quero você
       Bb     Eb
Eu quero você
         Dm7
É bom demais querer alguém
       Cm7
E é você que eu quero
       Bb
E é você

[Refrão]

                 Eb
Como que eu vou dizer pra ele?
                     Dm7
Que eu quero aquele beijo
                    Cm7
Que eu sei guardar segredo
                 Bb
Ninguém precisa nem desconfiar
          Eb
Eu quero dizer pra ela
                  Dm7
Que eu amo o seu jeito
                 Cm7
Que o seu óculos é maneiro
                   Bb
Que ela faz minha pupila
     Eb
Dilatar, ta tara tara
 Dm7
Ta ta ta, ta tara tara
 Cm7
Ta ta ta, ta tara tara ta
                   Bb
Que ela faz minha pupila
     Eb
Dilatar, ta tara tara
Dm7
Ta ta ta, ta tara tara
 Cm7                    Bb
Ta ta ta, ta tara tara ta

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb = X 6 5 3 4 3
`;

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
