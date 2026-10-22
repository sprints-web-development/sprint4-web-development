import Image from "next/image"
import Link from "next/link"

export default function MobileMenu({ menuOpen, setMenuOpen, isExperimente }) {

    const closeMenu = () => setMenuOpen(false)

    return (
        <div className={`absolute top-0 h-[110dvh] w-1/2 bg-brand-primary px-1.25 py-5 transition-[.5s] ease-in max-[650px]:w-3/4 ${menuOpen ? 'visible left-0' : 'invisible -left-1/2 max-[650px]:-left-3/4'}`}>
            <div className="mb-5 flex items-center justify-center">
                <Link href="/#top" onClick={closeMenu}>
                    <Image src="/images/logo-snap-white.png" alt="Logotipo do SnapNote" width={50} height={50} className="max-h-20" />
                </Link>
            </div>
            <ul className="flex list-none flex-col items-center gap-7.5">
                <li><Link href="/#top" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">A Solução</Link></li>
                <li><Link href="/#publico" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Público-alvo</Link></li>
                <li><Link href="/#galeria" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Galeria</Link></li>
                <li><Link href="/#equipe" onClick={closeMenu} className="cursor-pointer text-sm text-brand-cream">Nossa Equipe</Link></li>
                <li><Link href="/#experimente" onClick={closeMenu} aria-current={isExperimente ? "page" : undefined} className={`cursor-pointer text-sm ${isExperimente ? 'text-brand-yellow underline decoration-2 underline-offset-4' : 'text-brand-cream'}`}>Experimente</Link></li>
                <li><Link href="/#contact" onClick={closeMenu} className="cursor-pointer rounded-[30px] border-2 border-brand-yellow bg-brand-yellow px-3.75 py-3.75 text-sm text-brand-cream transition-[.3s] ease-in-out hover:bg-brand-cream hover:text-brand-yellow">Contato</Link></li>
            </ul>
        </div>
    )
}
