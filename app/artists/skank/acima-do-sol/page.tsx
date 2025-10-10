import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Acima do Sol

[Intro] 

  Am7    C      G
Uuuh, uuuuh, uuuh
  Am7    C      G
Uuuh, uuuuh, uuuh

[Primeira Parte]

   Am7
Assim ela já vai
       
Achar o cara que lhe queira
           G
Como você não quis fazer
         Am7
Sim, eu sei que ela só vai
          
Achar alguém pra vida inteira
           G
Como você não quis

[Segunda Parte]

     Am7
Tão fácil perceber
       
Que a sorte escolheu você
        G
E você cego nem nota
        Am7
Quando tudo ainda é nada
        
Quando o dia é madrugada
         G
Você gastou sua cota

        Am7
Eu não posso te ajudar
     
Esse caminho não há outro
              G
Que por você faça
       Am7
Eu queria insistir
        
Mas o caminho só existe
             G
Quando você passa

[Refrão]

  Am7   C       G
Uuuh, uuuuh, uuuh

[Terceira Parte]

        Am7
Quando muito ainda é pouco
      
Você quer infantil e louco
         G
Um sol acima do sol
            Am7
Mas quando sempre é sempre nunca
         
Quando ao lado ainda é muito mais longe
      G
Que qualquer lugar

[Refrão]

       Am7
Ô, um dia ela já vai
        
Achar o cara que lhe queira
           G
Como você não quis fazer
         Am7
Sim, eu sei que ela só vai
      
Achar alguém pra vida inteira
           G
Como você não quis

  Am7    C      G
Uuuh, uuuuh, uuuh
  Am7   C       G
Uuuh, uuuuh, uuuh

[Quarta Parte]

      Am7
Se a sorte lhe sorriu
       
Porque não sorrir de volta
           G
Você nunca olha a sua volta
      Am7
Não quero estar sendo mal
   
Moralista ou banal
              G
Aqui está o que me afligia

[Quinta Parte]

       Am7
Ô, um dia ela já vai
    
Achar o cara que lhe queira
           G
Como você não quis fazer
         Am7
Sim, eu sei que ela só vai
      
Achar alguém pra vida inteira
           G
Como você não quis

[Refrão Final]

  Am7    C      G
Uuuh, uuuuh, uuuh
  Am7   C       G
Uuuh, uuuuh, uuuh
  Am7   C       G
Uuuh, uuuuh, uuuh
  Am7   C       G
Uuuh, uuuuh, uuuh

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
C = X 3 2 0 1 0
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AcimaDoSolPage() {
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
