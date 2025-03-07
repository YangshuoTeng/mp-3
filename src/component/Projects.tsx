import  useCalculator  from "./useCalculator.tsx";
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
        background-color: #C5CDC7;
    }
`;

const StyledTitle = styled.h1`
    font-size: calc(10px + 2vw);
    text-align: center;
    padding: 1vh 0;
    font-family: "Lucida Console", "Courier New", monospace;
`;

const StyledOperations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    background-color: #E8EAE6;
`;

const StyledInput = styled.input`
    width: 80%;
    height: 45px;
    margin: 10px 0;
    font-weight: bold;
    color: black;
    border-radius: 5px;
    text-align: center;
`;

const StyledButton = styled.button`
    width: 80%;
    height: 45px;
    margin: 10px 0;
    font-weight: bold;
    background-color: #565D56;
    color: white;
    border-radius: 5px;
`;

const StyledHeading = styled.h2`
    font-family: "Lucida Console", "Courier New", monospace;
`;

const StyledHeading2 = styled.h3`
    text-align: center;
    font-size: 3rem;
`;

export default function Projects() {
    const { result, color, addition, subtraction, multiply, divide, power, doClear } = useCalculator();

    return (
        <StyledMain>
            <StyledTitle>Projects</StyledTitle>
            <StyledOperations>
                <StyledHeading>Calculator</StyledHeading>
                <StyledInput id="first" type="number" placeholder="First Number" />
                <StyledInput id="second" type="number" placeholder="Second Number" />
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiply}>*</StyledButton>
                <StyledButton onClick={divide}>/</StyledButton>
                <StyledButton onClick={power}>**</StyledButton>
                <StyledButton onClick={doClear}>Clear</StyledButton>
            </StyledOperations>
            <StyledHeading2 style={{color}}>{result}</StyledHeading2>
        </StyledMain>
    );
}
