import styled from "styled-components";

export const ContainerHeader = styled.header`
    display:flex ;
    flex-direction: column ;
    width: 80%;
   
   
`;

export const Top = styled.div`
    display: flex;
    flex-direction:row ;

    img{
        width: 100px;
        height: 30px ;
    }

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;

        ul{
            display: flex;

            li{
                list-style: none;

                a{
                  color: hsl(257, 7%, 63%);
                  font-weight: bold;
                }
                
            }
        }
    }
    
`;

export const NavItems = styled.nav`
    padding-left: 20px;

    li{
        margin-right: 50px;

        a:hover{
            color: hsl(260, 8%, 14%);
        }
    }
`
export const NavLogin = styled.nav`
    li{
        margin-left: 20px;

        a:hover{
            color: hsl(260, 8%, 14%);
        }
        
    }
    button{
        background:  hsl(180, 66%, 49%);
        color: #fff;
        border: none;
        margin-top: -5px;
        margin-right: 18px;
        padding: 8px 30px;
        border-radius: 30px;
        white-space: nowrap;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
            opacity: 0.5;
        }
`

export const Ilustration = styled.div`
    display: flex;
    margin: 50px 0 100px;

    section{
        max-width: 40%;
        display:flex ;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
        h1{
            font-size: 54px;
            color: hsl(260, 8%, 14%);
            line-height: 1.1;
            margin-bottom: 5px;
        }

        span{
            color: hsl(257, 7%, 63%);
            display: block;
            margin-bottom: 10px;
        }

        button{
            margin-top: 20px;
            font-size: 18px;
            background:  hsl(180, 66%, 49%);
            color: #fff;
            border: none;
            padding: 13px 40px;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover{
            opacity: 0.5;
        }

       
    }

    div{
        width: 600px;
        height: 400px;

         img{
            width: 100%;
            height: 100%;
            margin-left: 200px;
         }
     }
`;