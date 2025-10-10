import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Ana Carolina - Quem De Nós Dois (La Mia Storia Tra Le Dita)

[Intro] Cm7  F  Cm7  F

[Primeira Parte]

Cm7     F
Eu e você
                     Bb7M                       Eb7M
Não é assim tão complicado, não é difícil perceber
Cm7           F
Quem de nós dois
                Bb7M                      Eb7M
Vai dizer que é impossível, o amor acontecer
   Cm7                         F
Se eu disser que já nem sinto nada
          Bb7M                   Eb7M
Que a estrada sem você é mais segura
    Cm7                        F
Eu sei, você vai rir da minha cara
                 Bb7M
Eu já conheço o teu sorriso
              Eb7M
Leio o teu olhar
                  Bb7M
Teu sorriso é só disfarce
              Eb7M
E eu já nem preciso
 Cm7     F
Sinto dizer
         Bb7M                     Eb7M
Que amo mesmo, tá ruim pra disfarçar
Cm7        F
Entre nós dois
                  Bb7M
Não cabe mais nenhum segredo
                   Eb7M
Além do que já combinamos
    Cm7                        F
No vão das coisas que a gente disse
     Bb7M                      Eb7M
Não cabe mais sermos somente amigos
    Cm7                          F
E quando eu falo que eu já nem quero
                    Bb7M
A frase fica pelo avesso
               Eb7M
Meio na contramão
                       Bb7M
E quando finjo que esqueço
                Eb7M
Eu não esqueci nada

[Refrão]

        Bb7M
E cada vez que eu fujo eu me aproximo mais
         F
E te perder de vista assim é ruim demais
        Ab                             Gm7
E é por isso que eu atravesso o teu futuro
        Eb7M                      F
E faço das lembranças um lugar seguro
               Bb7M
Não é que eu queira reviver nenhum passado
       F
E revirar o sentimento, revirado
          Ab                      Gm7
Mas toda vez que eu procuro uma saída
          Eb7M         D          Gm7
Acabo entrando sem querer na sua vida

[Segunda Parte]

Cm7      F
Eu procurei
             Bb7M                 Eb7M
Qualquer desculpa pra não te encarar
Cm7        F                            Bb7M
Pra não dizer de novo e sempre a mesma coisa
               Eb7M
Falar só por falar
      Cm7                        F
Que eu já nem tô ai pra essa conversa
           Bb7M                        Eb7M
Que a história de nós dois não me interessa
       Cm7                     F
Se eu tento esconder meias verdades
                       Bb7M
Você conhece o meu sorriso
            Eb7M
Lê o meu olhar
                  Bb7M
Meu sorriso é só disfarce
                Eb7M
Que eu já nem preciso

[Refrão]

        Bb7M
E cada vez que eu fujo eu me aproximo mais
         F
E te perder de vista assim é ruim demais
        Ab                             Gm7
E é por isso que eu atravesso o teu futuro
        Eb7M                      F
E faço das lembranças um lugar seguro
               Bb7M
Não é que eu queira reviver nenhum passado
       F
E revirar o sentimento, revirado
          Ab                      Gm7
Mas toda vez que eu procuro uma saída
          Eb7M         D          Gm7
Acabo entrando sem querer na sua vida

----------------- Acordes -----------------
Ab = 4 3 1 1 1 4
Bb7M = X 1 3 2 3 1
Cm7 = X 3 5 3 4 3
D = X X 0 2 3 2
Eb7M = X X 1 3 3 3
F = 1 3 3 2 1 1
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function QuemDeNosDoisLaMiaStoriaTraLeDitaPage() {
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
