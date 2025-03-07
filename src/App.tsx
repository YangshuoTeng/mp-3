import{Routes, Route, createBrowserRouter, RouterProvider} from "react-router";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Home from "./component/Home.tsx";
import Certifications from "./component/Certifications.tsx";
import Education from "./component/Education.tsx";
import Hobby from "./component/Hobby.tsx";
import Projects from "./component/Projects.tsx";
import Experience from "./component/Experience.tsx";
import styled from "styled-components";
import Nav from "./component/Nav.tsx";


const StyledWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`

function Root(){
    return(
        <StyledWrapper>
            <Header/>
            <Container>
                <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/Experience`} element={<Experience/>}/>
                <Route path={`/Hobby`} element={<Hobby/>}/>
                <Route path={`/Education`} element={<Education/>}/>
                <Route path={`/Projects`} element={<Projects/>}/>
                <Route path={`/Certifications`} element={<Certifications/>}/>
            </Routes>
            </Container>
            <Footer/>
        </StyledWrapper>
    );
}

const router=createBrowserRouter([{
    path:"*", Component:Root
}])

export default function App(){
    return(<RouterProvider router={router}/>)
};