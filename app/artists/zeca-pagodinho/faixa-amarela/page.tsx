// filepath: c:\Users\carlo\GITHUB\cifra-manager\app\zeca-pagodinho\faixa-amarela\page.tsx
import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Faixa Amarela

[Intro]

[Intro] D  B7  Em  A7  D  A7

                 D  B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7          Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

                   B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7          Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

A7                     D  B7             Em7
Vou dá-lhe um gato angorá um cão e uma cadela
               A7                    D
Uma cortina grená para enfeitar a janela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

 A7               D  B7                Em7
E para o nosso papar vai ter bife de panela
                 A7                     D
Salada de petit-pois jiló, chuchu e bringela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D    B7               Em7
Vou fazer dela rainha do desfile da Portela
                     A7                  D
Eu vou ser filho do rei e ela minha cinderela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D  B7               Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7         Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

A7               D   B7                Em7
E pra gente se casar vou construir a capela
                      A7                         D
Dentro de um lindo jardim com flores, lago e pinguela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7             D   B7                 Em7
Mas se ela vacilar vou dar um castigo nela
                          A7                                     D
Vou lhe dar uma banda de frente quebrar cinco dentes e quatro costelas
    A7                     D          B7         Em7
Vou pegar a tal faixa amarela gravada com o nome dela
               A7                  D
E mandar incendiar na entrada da favela

    A7                     D          B7         Em7
Vou pegar a tal faixa amarela gravada com o nome dela
               A7                  D
E mandar incendiar na entrada da favela

A7                       D     B7                  Em7
Vou comprar uma cana bem forte para esquentar sua goela
                A7                      D
E fazer um tira-gosto com galinha à cabidela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

 A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D  B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7         Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

----------------- Acordes -----------------
A7 = 2 0 2 2
B7 = 1 2 0 1
D = 4 2 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
