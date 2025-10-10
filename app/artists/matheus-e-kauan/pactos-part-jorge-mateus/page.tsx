import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Matheus & Kauan - Pactos (part. Jorge & Mateus)

[Intro] Am  F  C  G

[Tab - Intro]

E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\\3---5-3-3/5--|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Am
Eu nem dormi
   F                       C         G
Pensando em tudo que aconteceu, iê, iê
Am
Guardei em mim
  F                        C         G
Cada detalhe que a gente viveu, iê, iê

Am                 F               C
O combinado era da gente se reencontrar
               G
Quem sentir saudade primeiro, ligar
Am         F             C
Me enlouqueceu e desapareceu
                G                        F   G
Plantou amor no peito e não voltou pra regar

Am                   F
Promessas não são contratos
                      C           G
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
Am                F 
Que sentimentos vazios
                   C
Não preenchem os espaços
        G
Cê nem aí e eu amando você

Am                   F
Promessas não são contratos
                      C           G
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
Am                F 
Que sentimentos vazios
                   C
Não preenchem os espaços
        G
Cê nem aí e eu amando você

[Solo] Am  F  C  G

[Tab - Solo]

E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\\3------------|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

E|-----3--------------------------------------|
B|-3/5---5/3----------------------------------|
G|------------5-------------------------------|
D|--------------5/7---------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Am
Eu nem dormi
   F                       C         G
Pensando em tudo que aconteceu, iê, iê
Am
Guardei em mim
  F                        C         G
Cada detalhe que a gente viveu, iê, iê

Am                 F               C
O combinado era da gente se reencontrar
               G
Quem sentir saudade primeiro, ligar
Am         F             C
Me enlouqueceu e desapareceu
                G                        F     G
Plantou amor no peito e não voltou pra regar

Am                   F
Promessas não são contratos
                      C           G
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
Am                F 
Que sentimentos vazios
                   C
Não preenchem os espaços
        G
Cê nem aí e eu amando você

Am                   F
Promessas não são contratos
                      C           G
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
Am                F 
Que sentimentos vazios
                   C
Não preenchem os espaços
        G
Cê nem aí e eu amando você

Am                   F
Promessas não são contratos
                      C           G
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
Am                F 
Que sentimentos vazios
                   C
Não preenchem os espaços
        G
Cê nem aí e eu amando você

[Final] Am  F  C  G

[Tab - Final]

E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\\3------------|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PactosPartJorgeMateusPage() {
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
