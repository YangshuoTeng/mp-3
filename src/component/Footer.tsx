import styled from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    background-color: #383B39;
    color: bisque;
    padding: 1vh 1vw;
    display: flex;
    justify-content: space-evenly;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: bisque;
`

export default function Footer (){
    return (
        <StyledFooter>
            <p>All rights reserved by Yangshuo Teng <StyledLink to={``}>Credits</StyledLink> &copy;</p>
        </StyledFooter>
    );
}