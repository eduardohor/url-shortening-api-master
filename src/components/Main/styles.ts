import styled from "styled-components";
import imgBgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg'

export const ContainerShorten = styled.div`
    background-image: url(${imgBgShortenDesktop});
    background-color:  hsl(255, 11%, 22%);
    width: 100% ;
    height: 110px;
    border-radius: 8px;
    padding: 0 50px;

    display:flex ;
    justify-content: space-between;
    align-items: center;

    input{
        width: 90%;
        padding: 8px 20px;
        border-radius: 8px;
        border: none;
        font-size: 18px;
    }

    button{
        background:  hsl(180, 66%, 49%);
        color: #fff;
        border: none;
        padding: 8px 30px;
        border-radius: 8px;
        white-space: nowrap;
        margin-left: 15px;
        font-size: 18px;

    }
`