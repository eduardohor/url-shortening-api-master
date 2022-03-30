import { ContainerFooter, ContainerSocial } from './styles'

import imgIconFacebook from '../../assets/images/icon-facebook.svg'
import imgIconTwitter from '../../assets/images/icon-twitter.svg'
import imgIconPinterest from '../../assets/images/icon-pinterest.svg'
import imgIconInstagram from '../../assets/images/icon-instagram.svg'


export function Footer() {
    return (
        <ContainerFooter>
            <h3>Shortly</h3>
            <div>
                <ul>
                    <li><p>Features</p></li>
                    <li><span>Link Shortening</span></li>
                    <li><span>Branded Links</span></li>
                    <li><span>Analytics</span></li>
                </ul>
                <ul>
                    <li><p>Resources</p></li>
                    <li><span>Blog</span></li>
                    <li><span>Developers</span></li>
                    <li><span>Support</span></li>
                </ul>
                <ul>
                    <li><p>Company</p></li>
                    <li><span>About</span></li>
                    <li><span>Our Team</span></li>
                    <li><span>Careers</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>

            <ContainerSocial>
                <img src={imgIconFacebook} alt="White facebook icon" />
                <img src={imgIconTwitter} alt="White twitter icon" />
                <img src={imgIconPinterest} alt="White Pinterest icon" />
                <img src={imgIconInstagram} alt="White Instagram icon" />
            </ContainerSocial>
        </ContainerFooter>
    )
}