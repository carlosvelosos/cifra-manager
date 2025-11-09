import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/pago-pra-ver/
const cifra = `

(intro) <b>Dm</b>  <b>Bº</b>  <b>Em5-/7</b>  <b>Gm6</b>  <b>Dm</b>  <b>A5+7</b>

      <b>Dm</b>               <b>Dm5+</b>           <b>Dm</b>
Pago pra ver.....você rogar a minha volta
<b>E</b>      <b>A7</b>      <b>Dm</b>                   <b>A7</b>      <b>A/C#</b>
...Minha revolta.....tá na sua ingratidão
      <b>Em5-/7</b>             <b>Gm6</b>           <b>A7</b>
Quem deu amor, que se entregou.....não merecia
    <b>Em5-/7</b>           <b>A7</b>       <b>Dm</b>
Uma partida.....sem deixar explicação

  <b>E</b>   <b>A7</b>      <b>Bº</b>        <b>A7/9-</b>           <b>Dm</b>
.....Quando você chegou pra mim.....foi tanta jura
       <b>Am5-/7</b>    <b>D7</b>         <b>Gm</b>
Tanta promessa desse amor jamais ter fim
   <b>Em5-/7</b>                <b>Dm</b>
Agora vejo...foi somente o desejo
             <b>Em5-/7(A7)</b>     <b>Eb7</b>         ( <b>C7</b>  <b>B7</b> )
Simplesmente um ensejo......pra mais uma curtição

         <b>Gm</b>                       <b>Dm</b>
Enquanto eu, que apostei todas as cartas
           Em5-/7              A7        Dm       (Para tudo)
Nesse amor que me descarta.....só a dor, desilusão

    <b>A7</b>                            <b>Dm</b>      ( <b>A7</b>  <b>Dm</b> )
Vou refazer minha vida....mudar o meu telefone
    <b>Eb7</b>       <b>D7</b>          <b>Gm</b>
Cicatrizar a ferida.....tirar o seu sobrenome

    <b>Gm6</b>                                   <b>Dm/F</b>      <b>Dm</b>
O que restou de nós dois....vou apagar da lembrança
      <b>Em5-/7</b>      <b>A5+7</b>         <b>Dm</b>
E não vou mais me entregar.....feito criança

            <b>A7</b>                     <b>Dm</b>      ( <b>A7</b>  <b>Dm</b> )
Vou refazer minha vida....mudar o meu telefone
    <b>Am5-/7</b>         <b>D7</b>           <b>Gm</b>
Cicatrizar a ferida.....tirar o seu sobrenome

     <b>Gm6</b>                                  <b>Dm/F</b>     <b>Dm</b>
O que restou de nós dois....vou apagar da lembrança
      <b>Em5-/7</b>      <b>A5+7</b>       <b>Dm</b>
E não vou mais me entregar.....feito criança

----------------- Acordes -----------------
A/C# = 7 6 5 7
A5+7 = 5 2 2 3
A7 = 2 0 2 2
A7/9- = 7 6 8 8
Am5-/7 = 7 6 4 5
B7 = 1 2 0 1
Bº = 0 1 0 3
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm/F = 12 10 10 12
Dm5+ = P3 3 3 3
E = 2 1 0 2
Eb7 = 5 3 2 5
Em5-/7 = 2 3 3 2
Gm = 5 3 3 5
Gm6 = 0 0 0 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
