import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/legiao-urbana/que-pais-e-este/

const cifra = `Legião Urbana - Que País É Este

Intro: <b>Em</b> <b>C</b> <b>D</b>

<span class="tablatura">Solo
<span class="cnt">E|--7-7-7-7-5-3-3-3-3-5-|
B|-5-5-5-5-3-5-5-5-5-3--|
G|----------------------|
D|----------------------|
A|----------------------|
E|----------------------|</span></span>

<b>Em</b> <b>C</b> <b>D</b> 
Nas favelas, no Senado 
Sujeira pra todo lado 
Ninguém respeita a Constituicão 
Mas todos acreditam no futuro da nação 

<b>Em</b> <b>C</b> <b>D</b>
Que país é este |4x 

<b>Em</b> <b>C</b> <b>D</b>
No Amazonas, no Araguaia iaia, na Baixada Fluminense 
Mato Grosso, nas Minas Gerais e no Nordeste tudo em paz 
Na morte eu descanso mas o sangue anda solto 
Manchando os papéis, documentos fiéis 
Ao descanso do patrão 

<b>Em</b> <b>C</b> <b>D</b>
Que país é este |4x 

<b>Em</b> <b>C</b> <b>D</b> 
Terceiro mundo se for 
Piada no exterior 
Mas o Brasil vai ficar rico 
Vamos faturar um milhão 
Quando vendermos todas as almas 
Dos nossos índios num leilão 

<b>Em</b> <b>C</b> <b>D</b> 
Que país é este |4x

----------------- Acordes -----------------
C = X 3 2 0 1 0
D = X X 0 2 3 2
Em = 0 2 2 0 0 0`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function QuePaisEEstePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/legiao-urbana/que-pais-e-este/"
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
