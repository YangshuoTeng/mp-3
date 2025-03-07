import styled from 'styled-components';

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
const StyledDescription = styled.p`
    text-align: left;
    margin: 1vh 2vw;
    font-size: calc(2px + 2vw);
`


const StyledWrapper = styled.div`
    max-width: 100%;
    margin: 1vh 1vw;
    text-align: center;
    transform: scale(1);
`

const StyledImage = styled.img`
    margin: 2vh 2vw;
    border: 3px solid;
    border-radius: 40px;
    
    @media screen and (max-width: 900px) {
        height: 40%;
        max-width: 25vw;
        width: 100%;
    }
`

export default function Hobby() {
    return (
        <StyledMain>
            <StyledTitle>Hobby</StyledTitle>
            <StyledDescription>
                I have always liked eating and I am a big <strong>FOODIE</strong>,
                so let me show you some of my favorite foods.
            </StyledDescription>
            <StyledWrapper>
                <StyledImage src="./src/BBQ.jpeg" alt="BBQ"/>
                <StyledImage src="./src/greek meat platter.jpeg" alt="greek meat platter"/>
                <StyledImage src="./src/Fish and Chips.jpeg" alt="Fish and Chips"/>
                <StyledImage src="./src/Steak.jpeg" alt="Steak"/>
            </StyledWrapper>
        </StyledMain>
    )
}