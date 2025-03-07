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

const StyledSubTitle = styled.h2`
    margin: 1vh 0;
    padding: 0 3%;
`

const StyledDescription = styled.p`
    font-size: calc(1px + 2vw);
    padding: 0 4%;
    margin: 0.5vh;
`

const StyledListedItem = styled.li`
    font-size: calc(1px + 2vw);
    padding: 0 5%;
    margin: 1vh;
    list-style: square;
`

export default function Experience() {
    return (

            <StyledMain>
                <StyledTitle >Experience</StyledTitle>
                <StyledSubTitle>Research Assistant</StyledSubTitle>
                <StyledDescription>Boston University College of Communication, Boston, MA</StyledDescription>
                <ul>
                    <StyledListedItem>Developed a tool called “PolicyLabeler” using ChatGPT and supervised fine-tuning to efficiently code and interpret platform policies. </StyledListedItem>
                    <StyledListedItem>Contributed to a publication presented at the 74th Annual International Communication Association Conference. </StyledListedItem>
                    <StyledListedItem>Fine-tuned 40+ ChatGPT models for policy coding purposes.</StyledListedItem>
                    <StyledListedItem>sentiment analysis using different methods. (BERTweet, VADER, TextBlob, SentiWordNet, PyABSA, SpaCy)</StyledListedItem>
                </ul>


                <StyledSubTitle>Computer Assistant/Programmer</StyledSubTitle>
                    <StyledDescription>Boston University Computing and Data Science, Boston, MA</StyledDescription>
                    <ul>
                        <StyledListedItem>Designed an automated framework for data scraping across multiple social media and news platforms.</StyledListedItem>
                        <StyledListedItem>Collected and analyzed over 10 million data points on various topics, including election policies.</StyledListedItem>
                        <StyledListedItem>Conducted topic modeling using BERTopic to derive insights from large datasets.</StyledListedItem>
                    </ul>
            </StyledMain>
    )
}