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
    text-align: center;
    margin: 1vh 2vw;
    font-size: calc(2px + 2vw);
`

const StyledWrapper = styled.div`
    max-width: 100%;
    margin: 1vh 1vw;
    text-align: center;
`
const StyledImg = styled.img`
    width: 90%;
    text-align: center;
    border: darkblue solid 2px;
    border-radius: 15px;
    margin: auto;
    
    @media screen and (max-width: 900px) {
        width: 70%;
    }
`
export default function Certifications() {
    return (
        <StyledMain>
            <StyledTitle>Certifications</StyledTitle>
            <div id="main">
                    <StyledDescription>
                        Here are some of the <strong><em>certificates</em></strong> I have earned over the years.
                    </StyledDescription>


                <StyledWrapper>
                    <StyledImg src="/Durham.jpeg"
                         alt="a certificate for yangshuo teng for participating in the economics essay competition from Durham University"/>
                    <StyledImg src="/Harvard.jpeg"
                         alt="a certificate for yangshuo teng for completing an online course from Harvard University"/>

            </StyledWrapper>
            </div>
        </StyledMain>
    )
}