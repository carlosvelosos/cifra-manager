import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/adoniran-barbosa/saudosa-maloca/#

const cifra = `Adoniran Barbosa - Saudosa Maloca

[Intro] <b>Dm</b>  <b>Am</b>  <b>E7</b>  <b>Am</b>  <b>A7</b>
        <b>Dm</b>  <b>Am</b>  <b>E7</b>  <b>Am</b>  <b>G</b>
        <b>F</b>  <b>E</b>  <b>Am</b>  <b>E7</b>

<span class="tablatura">[Intro]
<span class="cnt">E|-17-16-15-------------------------------------|
B|----------18-17-15-14-------------------------|
G|----------------------15-14-12-14-12----------|
D|-------------------------------------15-14-12-|
A|----------------------------------------------|
E|----------------------------------------------|</span></span>


(<b>Am</b>      <b>E7</b>)             <b>Am</b>
Se o senhor não tá lembrado
     <b>E7</b>           <b>Am</b>
Dá licença de contar
        <b>Em7(5-)</b>        <b>A7</b>
Que aqui onde agora está
     <b>Em7(5-)</b>      <b>A7</b>
Esse adifício alto
    <b>A7</b>       <b>Em7(5-)</b>
Era uma casa velha
       <b>A7</b>         <b>Dm</b>
Um palacete abandonado
<b>Dm</b>
Foi aqui seu moço
                       <b>Am</b>
Que eu Mato Grosso e o Joca
 <b>B7</b>                <b>E7</b>
Construimos nossa maloca
        <b>A7</b>
Mais  um dia
                <b>Dm</b>
Nem quero me  lembrá
                         <b>Am</b>
Veio os home com as ferramentas
 <b>E7</b>              <b>Am</b>
O dono mandô derrubá
     <b>E7</b>                <b>Am</b>
Peguemo tudo nossas coisas
                   <b>A7</b>
E fumos pro meio da rua
               <b>Dm</b>
Apreciá a demolição
                        <b>Am</b>
Que tristeza que nos sentia
                <b>B7</b>
Cada táuba que caía
             <b>E7</b>
Duia no coração
                   <b>Dm</b>
Mato Grosso quis gritá
                <b>Am</b>
Mas encima eu falei
               <b>A7</b>
Os homens tá coa razão
                   <b>Dm</b>
Nós arranja outro lugá
                                  <b>Am</b>
Só se conformemo quando o Joca falou
             <b>B7</b>                <b>E7</b>
"Deus da o frio conforme o cobertor"
             <b>Dm</b>                           <b>Am</b>
E hoje nóis pega a páia nas grama do jardim
         <b>B7</b>    <b>E7</b>             <b>Am</b>
E prá esquecê nóis cantemos assim

           <b>Dm</b>             <b>Am</b>
Saudosa maloca, maloca querida  dim  dim
               <b>F</b>             <b>E</b>               <b>Am</b>  <b>A7</b>
Donde nóis passemos dias feliz de nossa vida
           <b>Dm</b>              <b>Am</b>
Saudosa maloca, maloca querida  dim  dim
               <b>F</b>             <b>E</b>               <b>Am</b>  <b>A7</b>
Donde nóis passemos dias feliz de nossa vida

[Final] <b>Dm</b>  <b>Am</b>  <b>E7</b>  <b>Am</b>  <b>A7</b>
        <b>Dm</b>  <b>Am</b>  <b>E7</b>  <b>Am</b>
        <b>G</b>  <b>F</b>  <b>E</b>  <b>Am</b>  <b>E7</b>  <b>Am</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function SaudosaMalocaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/adoniran-barbosa/saudosa-maloca/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
