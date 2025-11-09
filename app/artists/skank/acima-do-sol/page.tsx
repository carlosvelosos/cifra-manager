import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/skank/acima-do-sol/

const cifra = `Skank - Acima do Sol

[Intro] 

  <b>Am7</b>    <b>C</b>      <b>G</b>
Uuuh, uuuuh, uuuh
  <b>Am7</b>    <b>C</b>      <b>G</b>
Uuuh, uuuuh, uuuh

[Primeira Parte]

   <b>Am7</b>
Assim ela já vai
       
Achar o cara que lhe queira
           <b>G</b>
Como você não quis fazer
         <b>Am7</b>
Sim, eu sei que ela só vai
          
Achar alguém pra vida inteira
           <b>G</b>
Como você não quis

[Segunda Parte]

     <b>Am7</b>
Tão fácil perceber
       
Que a sorte escolheu você
        <b>G</b>
E você cego nem nota
        <b>Am7</b>
Quando tudo ainda é nada
        
Quando o dia é madrugada
         <b>G</b>
Você gastou sua cota

        <b>Am7</b>
Eu não posso te ajudar
     
Esse caminho não há outro
              <b>G</b>
Que por você faça
       <b>Am7</b>
Eu queria insistir
        
Mas o caminho só existe
             <b>G</b>
Quando você passa

[Refrão]

  <b>Am7</b>   <b>C</b>       <b>G</b>
Uuuh, uuuuh, uuuh

[Terceira Parte]

        <b>Am7</b>
Quando muito ainda é pouco
      
Você quer infantil e louco
         <b>G</b>
Um sol acima do sol
            <b>Am7</b>
Mas quando sempre é sempre nunca
         
Quando ao lado ainda é muito mais longe
      <b>G</b>
Que qualquer lugar

[Refrão]

       <b>Am7</b>
Ô, um dia ela já vai
        
Achar o cara que lhe queira
           <b>G</b>
Como você não quis fazer
         <b>Am7</b>
Sim, eu sei que ela só vai
      
Achar alguém pra vida inteira
           <b>G</b>
Como você não quis

  <b>Am7</b>    <b>C</b>      <b>G</b>
Uuuh, uuuuh, uuuh
  <b>Am7</b>   <b>C</b>       <b>G</b>
Uuuh, uuuuh, uuuh

[Quarta Parte]

      <b>Am7</b>
Se a sorte lhe sorriu
       
Porque não sorrir de volta
           <b>G</b>
Você nunca olha a sua volta
      <b>Am7</b>
Não quero estar sendo mal
   
Moralista ou banal
              <b>G</b>
Aqui está o que me afligia

[Quinta Parte]

       <b>Am7</b>
Ô, um dia ela já vai
    
Achar o cara que lhe queira
           <b>G</b>
Como você não quis fazer
         <b>Am7</b>
Sim, eu sei que ela só vai
      
Achar alguém pra vida inteira
           <b>G</b>
Como você não quis

[Refrão Final]

  <b>Am7</b>    <b>C</b>      <b>G</b>
Uuuh, uuuuh, uuuh
  <b>Am7</b>   <b>C</b>       <b>G</b>
Uuuh, uuuuh, uuuh
  <b>Am7</b>   <b>C</b>       <b>G</b>
Uuuh, uuuuh, uuuh
  <b>Am7</b>   <b>C</b>       <b>G</b>
Uuuh, uuuuh, uuuh

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
C = X 3 2 0 1 0
G = 3 2 0 0 0 3`;

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
