import styled from "styled-components";
import imgBgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg'
import imgBgBoostDesktop from '../../assets/images/bg-boost-desktop.svg'


export const ContentDirector = styled.main`
    background-color:hsl(0, 0%, 90%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const ContainerShorten = styled.div`
    background-image: url(${imgBgShortenDesktop});
    background-color: hsl(257, 27%, 26%);
    width: 80% ;
    height: 110px;
    border-radius: 8px;
    padding: 0 50px;
    margin-top: -50px;

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
export const TitleMain = styled.div`
    text-align: center;
    margin-top: 100px;

    h1{
        color: hsl(257, 27%, 26%);
    } 
    span{
        color:hsl(257, 7%, 53%);
    }
    
`

export const Cards = styled.section`
    margin-top: 150px;
    margin-bottom: 100px;
    width: 80vw;

    display:flex ;
    align-items: center;


    div{
       
        div{
            margin-top: -50px;
            margin-left: 25px;
            background-color: hsl(257, 27%, 26%);
            width: 80px;
            height: 80px;
            border-radius: 50px;

            display:flex ;
            justify-content:center ;
            align-items: center;
        }

        h4{
            margin: 20px 20px 6px 25px;
            color: hsl(257, 27%, 26%);

        }

        p{
            margin: 0 20px 10px 25px;
            color:hsl(257, 7%, 53%);

        }
    }
`

export const Separator = styled.div`
    width: 130px;
    height: 9px;
    background-color:hsl(180, 66%, 49%) ;
`

export const CardFirst = styled.div`
    background-color: #fff;
    margin-top: -100px;
`
export const CardSecond = styled.div`
    background-color: #fff;
`
export const CardLast = styled.div`
    background-color: #fff;
    margin-top: 100px;
`

export const TextBottom = styled.div`
    background-image: url(${imgBgBoostDesktop});
    background-color:  hsl(257, 27%, 26%);
    color: #fff;
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        font-size: 30px;
        margin-bottom: 15px;
    }

    button{
        background:  hsl(180, 66%, 49%);
        color: #fff;
        border: none;
        padding: 8px 30px;
        border-radius: 30px;
        white-space: nowrap;
    }


`