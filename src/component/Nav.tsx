import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
        width: 30%;

    @media screen and (max-width: 900px){
        width: 100%;
    }
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #F0F4F1;
    font-size: calc(2px + 2vw);
    text-align: center ;
    list-style: none;
    padding-left: 0;
    height: 100%;

    @media screen and (max-width: 900px) {
        flex-direction: row;
        background-color: #565D56;
        justify-content: space-between;
    }
`

const StyledListItem = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color: #C5CDC7;
    padding: 2vh 0;
    margin: 5vh auto;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        padding: 1% 0.5%;
        margin: 1% 0.5%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export default function Nav(){
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to={`/`}>Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to={`/experience`}>Experience</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to={`/hobby`}>Hobby</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to={`/education`}>Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to={`/projects`}>Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to={`/certifications`}>Certifications</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}