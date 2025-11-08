import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/ana-carolina/quem-de-nos-dois-la-mia-storia-tra-le-dita/

const cifra = `Ana Carolina - Quem De Nós Dois (La Mia Storia Tra Le Dita)

[Intro] <b>Cm7</b>  <b>F</b>  <b>Cm7</b>  <b>F</b>

[Primeira Parte]

<b>Cm7</b>     <b>F</b>
Eu e você
                     <b>Bb7M</b>                       <b>Eb7M</b>
Não é assim tão complicado, não é difícil perceber
<b>Cm7</b>           <b>F</b>
Quem de nós dois
                <b>Bb7M</b>                      <b>Eb7M</b>
Vai dizer que é impossível, o amor acontecer
   <b>Cm7</b>                         <b>F</b>
Se eu disser que já nem sinto nada
          <b>Bb7M</b>                   <b>Eb7M</b>
Que a estrada sem você é mais segura
    <b>Cm7</b>                        <b>F</b>
Eu sei, você vai rir da minha cara
                 <b>Bb7M</b>
Eu já conheço o teu sorriso
              <b>Eb7M</b>
Leio o teu olhar
                  <b>Bb7M</b>
Teu sorriso é só disfarce
              <b>Eb7M</b>
E eu já nem preciso
 <b>Cm7</b>     <b>F</b>
Sinto dizer
         <b>Bb7M</b>                     <b>Eb7M</b>
Que amo mesmo, tá ruim pra disfarçar
<b>Cm7</b>        <b>F</b>
Entre nós dois
                  <b>Bb7M</b>
Não cabe mais nenhum segredo
                   <b>Eb7M</b>
Além do que já combinamos
    <b>Cm7</b>                        <b>F</b>
No vão das coisas que a gente disse
     <b>Bb7M</b>                      <b>Eb7M</b>
Não cabe mais sermos somente amigos
    <b>Cm7</b>                          <b>F</b>
E quando eu falo que eu já nem quero
                    <b>Bb7M</b>
A frase fica pelo avesso
               <b>Eb7M</b>
Meio na contramão
                       <b>Bb7M</b>
E quando finjo que esqueço
                <b>Eb7M</b>
Eu não esqueci nada

[Refrão]

        <b>Bb7M</b>
E cada vez que eu fujo eu me aproximo mais
         <b>F</b>
E te perder de vista assim é ruim demais
        <b>Ab</b>                             <b>Gm7</b>
E é por isso que eu atravesso o teu futuro
        <b>Eb7M</b>                      <b>F</b>
E faço das lembranças um lugar seguro
               <b>Bb7M</b>
Não é que eu queira reviver nenhum passado
       <b>F</b>
E revirar o sentimento, revirado
          <b>Ab</b>                      <b>Gm7</b>
Mas toda vez que eu procuro uma saída
          <b>Eb7M</b>         <b>D</b>          <b>Gm7</b>
Acabo entrando sem querer na sua vida

[Segunda Parte]

<b>Cm7</b>      <b>F</b>
Eu procurei
             <b>Bb7M</b>                 <b>Eb7M</b>
Qualquer desculpa pra não te encarar
<b>Cm7</b>        <b>F</b>                            <b>Bb7M</b>
Pra não dizer de novo e sempre a mesma coisa
               <b>Eb7M</b>
Falar só por falar
      <b>Cm7</b>                        <b>F</b>
Que eu já nem tô ai pra essa conversa
           <b>Bb7M</b>                        <b>Eb7M</b>
Que a história de nós dois não me interessa
       <b>Cm7</b>                     <b>F</b>
Se eu tento esconder meias verdades
                       <b>Bb7M</b>
Você conhece o meu sorriso
            <b>Eb7M</b>
Lê o meu olhar
                  <b>Bb7M</b>
Meu sorriso é só disfarce
                <b>Eb7M</b>
Que eu já nem preciso

[Refrão]

        <b>Bb7M</b>
E cada vez que eu fujo eu me aproximo mais
         <b>F</b>
E te perder de vista assim é ruim demais
        <b>Ab</b>                             <b>Gm7</b>
E é por isso que eu atravesso o teu futuro
        <b>Eb7M</b>                      <b>F</b>
E faço das lembranças um lugar seguro
               <b>Bb7M</b>
Não é que eu queira reviver nenhum passado
       <b>F</b>
E revirar o sentimento, revirado
          <b>Ab</b>                      <b>Gm7</b>
Mas toda vez que eu procuro uma saída
          <b>Eb7M</b>         <b>D</b>          <b>Gm7</b>
Acabo entrando sem querer na sua vida

----------------- Acordes -----------------
Ab = 4 3 1 1 1 4
Bb7M = X 1 3 2 3 1
Cm7 = X 3 5 3 4 3
D = X X 0 2 3 2
Eb7M = X X 1 3 3 3
F = 1 3 3 2 1 1
Gm7 = 3 X 3 3 3 X`;

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
