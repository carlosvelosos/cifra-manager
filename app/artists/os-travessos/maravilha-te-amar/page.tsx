import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/os-travessos/maravilha-te-amar/#

const cifra = `Os Travessos - Maravilha Te Amar

      <b>G7M</b>
Por que você não larga de bobeira
                  <b>Am7</b>  <b>D7</b>
E vem me dar uma beijo
    <b>G7M</b>            
Por que você não larga de bobeira 
                  <b>Am7</b>  <b>D7</b>
E vem me dar um beijo
     <b>Bm7</b>                <b>Em7</b>    
Se é isso que você mais quer   
     <b>C7M</b>               <b>D7</b>      
Se é isso que a gente quer     
     <b>Bm7</b>                <b>Em7</b>    
Se é isso que você mais quer   
     <b>C7M</b>               <b>D7</b>      
Se é isso que a gente quer     
     <b>G7M</b>               <b>Bm7</b>
Maravilha é poder te amar
    <b>Am7</b>       <b>D7</b>
Gostoso assim
     <b>G7M</b>                <b>Bm7</b> 
Maravilha é poder ter você 
   <b>Am7</b>       <b>D7</b> 
Perto de mim
         <b>Bm7</b>               <b>Em7</b>
Se a distância só nos separou
        <b>C7M</b>              
E o passado não foi tão ruim
        <b>Bm7</b>             <b>Em7</b>
Nosso amor o destino selou
         <b>C7M</b>          <b>D7</b>
Vem prá mim, vem prá mim
<b>G7M</b>                     <b>Bm7</b>                           
Beija minha boca, tira minha roupa                    
               <b>Am7</b>   <b>D7</b>           <b>G7M</b>                 
Tira o meu sossego, que eu tô querendo                
                             <b>Bm7</b>                <b>Am7</b>   
Ai, que coisa louca, esta garota tá me enlouquecendo  
  <b>D7</b>                                                  
Que eu tô querendo   
<b>G7M</b>                      <b>Bm7</b>                           
Beija minha boca, tira minha roupa                    
               <b>Am7</b>   <b>D7</b>           <b>G7M</b>                 
Tira o meu sossego, que eu tô querendo                
                             <b>Bm7</b>                <b>Am7</b>   
Ai, que coisa louca, esta garota tá me enlouquecendo  
  <b>D7</b>          <b>G7M</b>                                     
Que eu tô querendo                                    
              <b>Am7</b>    <b>D7</b>           <b>G7M</b>
Que eu tô querendo, que eu tô querendo
              <b>Am7</b>   <b>D7</b>  <b>G7M</b> 
Que eu tô querendo`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MaravilhaTeAmarPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/os-travessos/maravilha-te-amar/#"
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
