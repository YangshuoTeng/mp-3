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
    margin: 1vh 4vw;
    font-size: calc(10px + 1vw);
`
const StyledDiv = styled.div`
    margin: 5vh 3vw;
    border: black solid 1px;
    background-color: aliceblue ;
    border-radius: 15px;
`
const StyledSubTitle = styled.h2`
    margin: 1vh 0;
    padding: 0 1%;
    font-size: calc(10px + 1vw);
`

const StyledSubDescription = styled.p`
    font-size: calc(1px + 2vw);
    padding: 1vh 2%;
    margin: 1vh;
`

const StyledLisedItem = styled.li`
    font-size: calc(1px + 1.5vw);
    padding: 1% 2%;
    margin: 1vh;
`

export default function Education() {
    return (
        <StyledMain>
            <StyledTitle>Education</StyledTitle>
            <StyledDescription>Following are my education background up till now</StyledDescription>

            <StyledDiv>
                <StyledSubTitle>Boston University - Boston, MA</StyledSubTitle>
                <StyledSubDescription>B.S in Economics and Computer Science - 2026</StyledSubDescription>
            </StyledDiv>

            <StyledDiv>
                <StyledSubTitle>Lady Elizabeth School - Benitachell, Spain</StyledSubTitle>
                <StyledSubDescription>High School Diploma (A-levels) - June 2022</StyledSubDescription>
                    <StyledLisedItem>A-levels in Mathematics, Economics, Spanish and Chinese</StyledLisedItem>
                    <StyledLisedItem>Graduated with Honors</StyledLisedItem>
            </StyledDiv>
        </StyledMain>
    )
}