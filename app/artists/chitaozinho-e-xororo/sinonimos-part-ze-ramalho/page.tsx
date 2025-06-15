import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chitãozinho & Xororó - Sinônimos (part. Zé Ramalho)

[Intro] C  G/B  Dm7  F
        C  G/B  Dm7  F

C                     G/B
  Quanto tempo o coração
       Dm7   (Frase 1)  F
Leva pra saber
C                     G/B
  Que o sinônimo de amar
      Dm7 (Frase 1) F
É sofrer
C                G/B
  Num aroma de amores
           Dm7  (Frase 1) F
Pode haver espinhos
C                     G/B
  É como ter mulheres em milhões
       Dm7    (Frase 2) F
E ser sozinho

G                F
  Na solidão de casa
       G  (Frase 3) F
Descansar
G               Dm7         C
  O sentido da vida, encontrar
      G/B
Quem pode dizer onde
         Dm7        F (Frase 4)
A felicidade, está?

C                       G/B
  O amor é feito de paixões
                    Dm7
E quando perde a razão
     F         G        C
Não sabe quem vai machucar
                      G/B
Quem ama nunca sente medo
                    Dm7
De contar o seu segredo
   F          G      C
Sinônimo de amor é amar

G                     D/F#
  Quem revelará o mistério
     Am      (Frase 6) C
Que tenha fé
G                      D/F#
  E quantos segredos traz
                     Am (Frase 6) C
O coração de uma mulher
G                      D/F#
  Como é triste a tristeza
                  Am  (Frase 6)  C
Mendigando um sorriso
G                       D/F#
  Um cego procurando a luz
                    Am  (Frase 7) C
Na imensidão do paraíso

D                   Am
  Quem tem amor na vida
     D    (Frase 8) C
Tem sorte
D                   Am
  Quem na fraqueza sabe
              G
Ser bem mais forte
 D/F#
Ninguém sabe dizer
              Am        (Frase 6) C
Onde a felicidade, está

G                       D/F#
  O amor é feito de paixões
                    C
E quando perde a razão
               D        G
Não sabe quem vai machucar
                      D/F#
Quem ama nunca sente medo
                    Am
De contar o seu segredo
   C          D      G
Sinônimo de amor é amar

                      D/F#
O amor é feito de paixões
                    Am
E quando perde a razão
     C         D        G
Não sabe quem vai machucar
                      D/F#
Quem ama nunca sente medo
                    Am
De contar o seu segredo
   C          D      G
Sinônimo de amor é amar

[Solo] D/F#  Am  C (Frase 6)
       G  Dm7  F  G
C                     G
  Quem revelará o mistério
     Dm7     (Frase 1)  F
Que tenha fé
C                      G
  E quantos segredos traz
                     Dm7  (Frase 1) F
O coração de uma mulher
C                      G
  Como é triste a tristeza
                  Dm7  (Frase 1) F
Mendigando um sorriso
C                       G
  Um cego procurando a luz
                    Dm7  (Frase 1) F
Na imensidão do paraíso

C                       G/B
  O amor é feito de paixões
                    Dm7
E quando perde a razão
     F         G        C
Não sabe quem vai machucar
                      G/B
Quem ama nunca sente medo
                    Dm7
De contar o seu segredo
   F          G      C
Sinônimo de amor é amar

                      G/B
O amor é feito de paixões
                    Dm7
E quando perde a razão
     F         G        C
Não sabe quem vai machucar
                      G/B
Quem ama nunca sente medo
                    Dm7
De contar o seu segredo
   F          G      C
Sinônimo de amor é amar


----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
D = X X 0 2 3 2
D/F# = 2 X 0 2 3 2
Dm7 = X X 0 2 1 1
F = 1 3 3 2 1 1
G = 3 2 0 0 3 3
G/B = X 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SinonimosPartZeRamalhoPage() {
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
