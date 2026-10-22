import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import ImageBorder from "../UI-Components/ImageBorder/ImageBorder";

export default function Galeria() {

    const cards = [
        {
            src: "/images/prints/desktop.png",
            title: "Biblioteca Visual",
            description: "Interface pensada para ser funcional, rápida e sem distrações."
        },
        {
            src: "/images/prints/half.png",
            title: "Captura Guiada",
            description: "Um bom registro desde o primeiro clique."
        },
        {
            src: "/images/prints/cellPhone.png",
            title: "Lembretes Úteis",
            description: "O conteúdo certo, na hora certa."
        }
    ]

    return (
        <section id="galeria" className="flex w-full flex-col items-center bg-brand-primary px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex w-full items-center justify-between max-[850px]:flex-col max-[850px]:items-start max-[850px]:gap-3.75">
                <div className="flex flex-col items-start">
                    <SectionTag name="Galeria" color="white" />
                    <h2 className="text-[clamp(40px,4vw+15px,60px)] text-brand-cream">Uma memória visual<br /><span className="font-playfair text-brand-lime">Do seu jeito.</span></h2>
                </div>
                <p className="text-end text-brand-light-grey max-[850px]:text-start">Interface pensada para ser funcional, rápida e sem distrações.</p>
            </div>

            <div className="grid w-full grid-cols-2 grid-rows-2 gap-3.75 px-25 py-5 max-[1450px]:px-0 max-[1199px]:grid-cols-1 max-[1199px]:grid-rows-none">
                {cards.map((card, index) => (
                    <ImageBorder key={index} card={card} index={index + 1}/>
                ))}
            </div>

        </section>
    );
}
