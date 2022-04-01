import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 45px 0;
    width: 100%;

    background-color: hsl(260, 8%, 14%);
    color: #fff;
`



export const ConteinetItems = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80%;


h3{
        font-size: 24px;
    }

    div{
        display:flex ;
        ul{
           margin-left : 70px;

           li{
              list-style: none;
              cursor: pointer;

              p{
                  margin-bottom: 20px;
              }

              p:hover{
                color: hsl(180, 66%, 49%)
              }
              
              span{
                  color:  hsl(257, 7%, 63%);
              }

              span:hover{
                color: hsl(180, 66%, 49%)
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
        cursor: pointer;
        
    }

    
`