import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/jogo-de-seducao/#

const cifra = `Exaltasamba - Jogo De Seducao

[Intro]  <b>C</b>  <b>C7</b>  <b>F</b>  <b>Fm</b>

 <b>C</b>   <b>C7</b>          <b>F</b>           <b>Fm</b>
Leeeee... le le le le le le le le le le le
 <b>C</b>   <b>C7</b>          <b>F</b>           <b>Fm</b>       <b>C</b>
Leeeee... le le le le le le le le le le
    <b>C7</b>         <b>F</b>        <b>Fm</b>                            <b>C</b>
Só você tem o meu amor,não tem por que motivo agir assim
    <b>C7</b>              <b>F</b>                     <b>Fm</b>                            <b>C</b>
Só você sabe o meu,sabe meu sabor (sabe) não tem por que desconfiar de mim
                      <b>C7</b>                   <b>F</b>
Tá pegando a rota do fim, a contramão do amor
                     <b>Fm</b>                                <b>C</b>
Desconfiança é tão ruim foi assim que tanto sonho se acabou
                      <b>C7</b>                   <b>F</b>
Tá pegando a rota do fim, a contramão do amor
                         <b>Fm</b>                              <b>C</b>
Desconfiança é tão ruim foi assim que tanto sonho se acabou

 <b>C7</b>           <b>F</b>           <b>Fm</b>
Leeeee... le le le le le le le le le le le
 <b>C</b>  <b>C7</b>           <b>F</b>           <b>Fm</b>       <b>C</b>
Leeeee... le le le le le le le le le le

        <b>C7</b>            <b>F</b>              <b>Fm</b>              <b>C</b>
Eu não vou me deixar levar por esse jogo seu de sedução
           <b>C7</b>              <b>F</b>              <b>Fm</b>         <b>C</b>
Vou fazer tudo pra salvar confesso que te amo de paixão
                 <b>C7</b>                  <b>F</b>
É melhor você parar, eu quero ser feliz
                     <b>Fm</b>                   <b>C</b>
É você o meu lugar, não tenho outra diretriz
                 <b>C7</b>                  <b>F</b>
É melhor você parar, eu quero ser feliz
                     <b>Fm</b>                   <b>C</b>
É você o meu lugar, não tenho outra diretriz

 <b>C7</b>           <b>F</b>           <b>Fm</b>
Leeeee... le le le le le le le le le le le
 <b>C</b>  <b>C7</b>           <b>F</b>           <b>Fm</b>
Leeeee... le le le le le le le le le le`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function JogoDeSeducaoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/exaltasamba-musicas/jogo-de-seducao/#"
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
