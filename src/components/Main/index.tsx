import imgIconBrandRecognition from '../../assets/images/icon-brand-recognition.svg'
import imgIconDetailedRecords from '../../assets/images/icon-detailed-records.svg'
import imgIconFullyCustomizable from '../../assets/images/icon-fully-customizable.svg'

import { ContainerShorten, ContentDirector, TitleMain, Cards, Separator, CardFirst, CardSecond, CardLast, TextBottom } from './styles'

import { api } from '../../services/api'
import { useState } from 'react'

export function Main() {

    const [originalLink, setOriginalLink] = useState("")
    const [url, setUrls] = useState("")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let text = event.target.value;
        setUrls(text)
    }

    function Shorten() {
        api.get(`shorten?url=${url}`).then(({ data }) => {
            setOriginalLink(data.result.original_link)
        })


    }

    return (
        <ContentDirector>
            <ContainerShorten>
                <input onChange={handleChange} type="text" placeholder='Shorten a link here...' />
                <button onClick={Shorten}>Shorten It!</button>
            </ContainerShorten>
            <TitleMain>
                <div>{originalLink}</div>
                <h2>Advanced Statistics</h2>
                <span>Track how your are performing acroos the web with <br /> our advanced statistics dashboard</span>
            </TitleMain>

            <Cards>
                <CardFirst>
                    <div>
                        <img src={imgIconBrandRecognition} alt="green color graphic icon" />
                    </div>
                    <h4> Brand Recognition</h4>
                    <p> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </CardFirst>
                <Separator />
                <CardSecond>
                    <div>
                        <img src={imgIconDetailedRecords} alt="icon of a clock without a pointer with a candle in the center

" />
                    </div>
                    <h4> Detailed Records</h4>
                    <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </CardSecond>
                <Separator />
                <CardLast>
                    <div>
                        <img src={imgIconFullyCustomizable} alt="icon with three different pens from each other

" />
                    </div>
                    <h4> Fully Customizable </h4>
                    <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </CardLast>
            </Cards>

            <TextBottom>
                <h3>Booster your links today</h3>
                <button>Get Started</button>
            </TextBottom>
        </ContentDirector>
    )
}