import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Timbalada - Beija-Flor

G                            C           Eb             
  Eu fui embora meu amor chorou, eu fui embora meu amor 
     G
chorou
                           C           Eb             
Eu fui embora meu amor chorou, eu fui embora meu amor 
     G
chorou, vou
    F
Voltar
G                             C                 Eb      
  Eu vou nas asas de um passarinho, eu vou nos beijos de
             G
 um beija-Flor
                           C                  Eb          
Eu vou nas asas de um passarinho, eu vou nos beijos de um 
         G
beija-
G
Flor
                           C Eb       G
No tic tic tac do meu coração renascerá
                           C Eb       G
No tic tic tac do meu coração renascerá
                                C                   Eb  
Timbalada é semente de um novo dia, nordeste sofrimento 
          G
povo lutador
                                     C
Entre mares e montanhas com você eu vou
                 F7 G7     C                 F7      G7
Yo quero te namorar   amor, yo quero te namorar amor
G                                  C                   
Teu lábio é tão doce, doce feito mel, todo azul sua 
Eb                             G
beleza feita
Cor do céu
                                 C                       
Quero me aquecer, sentir o seu calor, rolar pra lá na 
Eb                   G
cama te
               G
Chamar de amor
                                C                   Eb
Fazer mil poesias pra te conquistar, deixá-la simplesmente
               G
Coberta de flor
                                  C      Eb            F7 
Quero me aquecer sentir o seu calor, amor é só me chamar  
G7        C
 que eu vou
                 F7 G7         G
Amor é só me chamar   que eu vou
                             C                     Eb  
Estou sentindo a falta de você, sonhando com seu beijo 
             G
espero
G
Amanhecer
                                  C
Tu levas as palavras soltas pelo ar
                 F7 G7    C                  F7 G7     C
Yo quero te namorar    amor, yo quero te namorar   amor
                 F7 G7    G
Yo quero te namorar   amor
                         C             Eb              G
Que te bande, que te bande, que te Bande, que te bande
                         C      Eb                   F7 
Que te bande ,que te bande preta, yo quero te namorar   
G7   C
amor, yo
               F7  G7     G
Quero te namorar      amor


----------------- Acordes -----------------
C = X 3 2 0 1 0
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
F7 = 1 3 1 2 1 1
G = 3 2 0 0 0 3
G7 = 3 5 3 4 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BeijaFlorPage() {
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
