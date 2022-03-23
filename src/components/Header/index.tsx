import imgLogo from '../../assets/images/logo.svg'
import imgIllustration from '../../assets/images/illustration-working.svg'

import { ContainerHeader, Top, Ilustration } from './styles'

import { MenuMobile } from '../MenuMobile/index'

export function Header() {
    return (
        <ContainerHeader>
            <Top>
                <img src={imgLogo} alt="Website logo, written the name shortly" />
                <MenuMobile />
            </Top>
            <Ilustration>
                <img src={imgIllustration} alt="Illustration. Woman in green shirt sitting in front of a green table, fiddling with the computer" />
                <section>
                    <h1> More than just shorter links</h1>
                    <span> Build your brand’s recognition and get detailed insights on how your links are performing.</span>
                    <button> Get Started</button>

                </section>
            </Ilustration>

        </ContainerHeader>
    )


}