import styled from "styled-components";

export const ContainerHeader = styled.header`
    padding: 30px 20px;
    min-width: 375px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction:row ;
    justify-content: space-between ;
`

export const Ilustration = styled.div`
    display: flex;
    flex-direction: column ;

    img{
        padding-top: 20px;
        min-width: 500px;
    }

    section{
        padding-top: 20px;
        text-align: center;
        
        h1{
            font-size: 34px;
            color: hsl(260, 8%, 14%);
            line-height: 1.1;
            margin-bottom: 10px;
        }

        span{
            color: hsl(257, 7%, 63%);
            display: block;
        }

        button{
            margin-top: 20px;
            font-size: 18px;
            background:  hsl(180, 66%, 49%);
            color: #fff;
            border: none;
            padding: 13px 40px;
            border-radius: 30px;
        }
    }
`