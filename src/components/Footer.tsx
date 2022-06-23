import { FooterLogo } from "./FooterLogo";

export function Footer() {
    return (
        <footer className="flex items-center justify-between mt-20 p-8 max-w-[1100px] mx-auto text-gray-300 border-t border-gray-600">
            <div className="flex gap-6 items-center">
                <FooterLogo />
                <span>
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>

            <a href="">
                Políticas de privacidade
            </a>
        </footer>
    )
}
