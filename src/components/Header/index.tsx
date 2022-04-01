import imgLogo from '../../assets/images/logo.svg'
import imgIllustration from '../../assets/images/illustration-working.svg'

import { ContainerHeader, Top, Ilustration, NavItems, NavLogin } from './styles'


export function Header() {

    return (
        <ContainerHeader>
            <Top>
                <img src={imgLogo} alt="Website logo, written the name shortly" />
                <div>
                    <NavItems>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>

                        </ul>
                    </NavItems>
                    <NavLogin>
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><button>Sign Up</button></li>
                        </ul>
                    </NavLogin>
                </div>


            </Top>
            <Ilustration>
                <section>
                    <h1> More than just shorter links</h1>
                    <span> Build your brand’s recognition and get detailed insights on how your links are performing.</span>
                    <button > Get Started</button>
                </section>
                <div>
                    <img src={imgIllustration} alt="Illustration. Woman in green shirt sitting in front of a green table, fiddling with the computer" />
                </div>
            </Ilustration>

        </ContainerHeader>
    )


}