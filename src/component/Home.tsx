import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    background-color: #C5CDC7;

    @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100vh;
    background-color: #C5CDC7;}
`

const StyledTitle = styled.h1`
    font-size: calc(10px + 2vw);
    text-align: center;
    padding: 1vh 0;
    font-family: "Lucida Console", "Courier New", monospace;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;}
`

const StyledParagraph = styled.p`
    margin: 1vh 1vw;
    font-size: calc(2px + 2vw);
`

const StyledImage = styled.img`
    height: auto;
    max-width: 60%;
    margin: 1vh 1vw;
    transform: scale(1);
    
    @media screen and (max-width: 900px) {
        margin: 1vh auto;}
`

export default function Home() {
    return (
            <StyledMain>
                <StyledTitle>Home</StyledTitle>
                <StyledWrapper>
                    <img src="/public/Selfie.jpeg" alt="profile picture for Yangshuo Teng" />
                    <StyledParagraph>
                        My name is Yangshuo Teng and you can call me Yang (because most people cannot pronounce it properly).
                        I am a third-year undergraduate student at Boston University, pursuing a joint major in
                        <strong>Computer Science</strong> and <strong>Economics</strong>.
                    </StyledParagraph>
                </StyledWrapper>

                <StyledParagraph>
                    Welcome to my website! Here you can find lots of information about me, such as my <strong>Hobby</strong>,
                    <strong>Education background</strong>, and my <strong>Projects</strong>, etc!
                </StyledParagraph>
            </StyledMain>
    );
}