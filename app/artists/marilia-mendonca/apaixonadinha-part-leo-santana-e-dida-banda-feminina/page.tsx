import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Apaixonadinha (part. Léo Santana e Didá Banda Feminina)

[Intro] D 

[Primeira Parte]       

           D                            E
Sabe por que fico mandando mensagem querendo te ver?
           C#m       
Sabe por quê? Você me faz bem
           F#m
Eu não consigo pensar em ninguém

[Pré-Refrão]

D            E    
Ó que coisa boa!
               C#m
Tô sorrindo à toa
            F#m
Tô 100% de boa, de boa, de boa

[Refrão]

         D
Apaixonadinha você me deixou
         E
Apaixonadinha você me deixou
         C#m
Apaixonadinha você me deixou
           F#m
Vem ficar perto da sua menina

         D
Apaixonadinho você me deixou
         E
Apaixonadinho você me deixou
         C#m
Apaixonadinho você me deixou
           F#m
Vem ficar perto aqui do seu pretinho

[Segunda Parte]

D
Ô meu neném, eu preciso do seu corpo
 E
Você me faz tão bem
 C#m
Tá tudo certo, tamo junto e misturado
 F#m
Vem, vem, vem

[Refrão]

         D
Apaixonadinha você me deixou
         E
Apaixonadinha você me deixou
         C#m
Apaixonadinha você me deixou
           F#m
Vem ficar perto da sua menina

( D  E  C#m F#m )

[Pré-Refrão]

D            E    
Ó que coisa boa!
               C#m
Tô sorrindo à toa
            F#m
Tô 100% de boa, de boa, de boa

[Refrão]

         D
Apaixonadinha você me deixou
         E
Apaixonadinha você me deixou
         C#m
Apaixonadinha você me deixou
           F#m
Vem ficar perto da sua menina

         D
Apaixonadinho você me deixou
         E
Apaixonadinho você me deixou
         C#m
Apaixonadinho você me deixou
           F#m
Vem ficar perto aqui do seu pretinho

[Segunda Parte]

D
Ô meu neném, eu preciso do seu corpo
 E
Você me faz tão bem
 C#m
Tá tudo certo, tamo junto e misturado
 F#m
Vem, vem, vem

[Refrão]

         D
Apaixonadinha você me deixou
         E
Apaixonadinha você me deixou
         C#m
Apaixonadinha você me deixou
           F#m
Vem ficar perto da sua menina

         D
Apaixonadinho você me deixou
         E
Apaixonadinho você me deixou
         C#m
Apaixonadinho você me deixou
           F#m
Vem ficar perto aqui do seu pretinho

(  D  )

----------------- Acordes -----------------
F#m = 4 2 2 4
C#m = 2 1 2 2
D = 4 2 3 4
E = 2 1 0 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ApaixonadinhaPartLeoSantanaEDidaBandaFemininaPage() {
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
