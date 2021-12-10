import styled from "styled-components";

export const HeaderContainer = styled.header `
margin-top: 0;
display: flex;
justify-content: space-between;
width: 60%;
height: 50px;
align-items: center;
margin: 0 auto;
background-color: #fff;
padding: .3rem .5rem;
border-radius: 0  0 .4rem .4rem;
background-color: #CB1B1B;
-webkit-box-shadow: 12px 13px 18px -1px rgba(0,0,0,0.49); 
box-shadow: 12px 13px 18px -1px rgba(0,0,0,0.49);

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 2rem;
    font-weight: bold;
    opacity: .7;
  }

  a:hover {
    color: #fff;
    opacity: 1;
    transition: .4s;
  }
`