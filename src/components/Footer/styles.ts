import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px 0;

    background-color: hsl(260, 8%, 14%);
    color: #fff;

    h3{
        font-size: 24px;
    }

    div{
        display:flex ;
        ul{
           margin-left : 70px;

           li{
              list-style: none;

              p{
                  margin-bottom: 20px;
              }
              
              span{
                  color:  hsl(257, 7%, 63%);
              }
           }
        }

        
    }
`

export const ContainerSocial = styled.div`
    justify-content: space-around;
    img{
        height: 15%;
        margin-left: 20px;
    }
`