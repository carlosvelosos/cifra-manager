import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Legião Urbana - Que País É Este

[Intro] Em  C  D (12x)
                     
[Tab - Ritmo]

    Em                       C            D
E|--0--0--0--0--0--0--0--0---0--0--0--0---2--2--2--0--|
B|--0--0--0--0--0--0--0--0---1--1--1--0---3--3--3--0--|
G|--0--0--0--0--0--0--0--0---0--0--0--0---2--2--2--0--|
D|--2--2--0--2--2--0--2--0---2--2--2--0---0--0--0--0--|
A|--2--2--0--2--2--0--2--0---3--3--3--0---------------|
E|--0--0--0--0--0--0--0--0----------------------------|

[Tab - Solo] 

E|---7---7---7----7---5----3---3---3----3---5---------|
B|-5---5---5----5---3----5---5---5----5---3-----------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte] 

       Em          C   D
Nas favelas, no senado
Em                   C   D
   Sujeira pra todo lado
            Em               C  D
Ninguém respeita a constituição
     Em                   C         D  Em  C  D
Mas todos acreditam no futuro da nação

[Refrão] 

      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 

( Em  C  D ) 
( Em  C  D ) 
( Em  C  D ) 
( Em  C  D ) 

[Segunda Parte] 

       Em            C          D
No Amazonas, no Araguaia iá iá iá
       Em             C  D
Na baixada fluminense
       Em             C   D
Mato Grosso, Minas Gerais
         Em               C  D
E no nordeste tudo em paz
         Em          C  D
Na morte eu descanso
       Em               C  D
Mas o sangue anda solto
          Em        C  D
Manchando os papéis
     Em          C  D
Documentos fiéis
       Em             C  D
Ao descanso do patrão

[Refrão] 

      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 

( Em  C  D ) 
( Em  C  D ) 
( Em  C  D ) 
( Em  C  D ) 

[Ponte] 

          Em          C  D
Terceiro mundo se for
       Em         C  D
Piada no exterior
          Em                C  D
Mas o Brasil vai ficar rico
           Em           C  D
Vamos faturar um milhão
           Em             C     D
Quando vendermos todas as almas
           Em                C  D
Dos nossos índios num leilão

[Refrão] 

      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 
      Em        C  D
Que país é esse 
      Em        C  D  Em
Que país é esse

----------------- Acordes -----------------
C = X 3 2 0 1 0
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function QuePaisEEstePage() {
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
