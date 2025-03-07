import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #565D56;
    color: white;
    text-align: left;

    @media screen and (max-width: 900px){
        text-align: center;
    }
    
`;

const StyledHeading = styled.h1`
    margin: 0.3rem 0;
`

const StyledParagraph = styled.p`
    margin: 0.3rem 0;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeading>Yangshuo Teng</StyledHeading>
            <StyledParagraph>My Online Resume</StyledParagraph>
        </StyledHeader>
    );
}
