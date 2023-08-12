

import styled, {css} from 'styled-components';
// import {Link} from "react-router-dom"


const StyledLink = styled.a`
 text-decoration: none;
 color: #59a959;
 background-color: lightgrey;
 font-size: 2rem;
 margin: 2rem;
 padding: 2rem;
 &:hover{
   color: darkgreen ;
 }
 
 ${({react})=> react && css`
   background-color: black;
   color: #61dbfb;
   padding: 0.5rem 1rem;
   &:hover{
    opacity: 0.5;
   }
 
 ` }
`

export default StyledLink;
