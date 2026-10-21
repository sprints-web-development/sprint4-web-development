import Image from "next/image"

export default function MobileMenu({ menuOpen, setMenuOpen }) {

    const closeMenu = () => setMenuOpen(false)

    return (
        <div className={`absolute top-0 h-[110dvh] w-1/2 bg-brand-primary px-1.25 py-5 transition-[.5s] ease-in max-[650px]:w-3/4 ${menuOpen ? 'visible left-0' : 'invisible -left-1/2 max-[650px]:-left-3/4'}`}>
            <div className="mb-5 flex items-center justify-center">
                <a href="#top" onClick={closeMenu}>
                    <Image src="/images/logo-white.png" alt="Logotipo do SnapNote" width={50} height={50} className="max-h-20" />
                </a>
            </div>
            <ul className="flex list-none flex-col items-center gap-7.5">
                <li><a href="#top" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">A Solução</a></li>
                <li><a href="#publico" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Público-alvo</a></li>
                <li><a href="#galeria" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Galeria</a></li>
                <li><a href="#equipe" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Nossa Equipe</a></li>
                <li><a href="#contact" onClick={closeMenu} className="cursor-pointer rounded-[30px] border-2 border-brand-yellow bg-brand-yellow px-3.75 py-3.75 text-sm text-brand-cream transition-[.3s] ease-in-out hover:bg-brand-cream hover:text-brand-yellow">Contato</a></li>
            </ul>
        </div>
    )
}
