import styled from "styled-components";
import BackgroundPage from "../../img/background.jpg"

const Container = styled.div`
    width: 100%;
    height: 100vh;

    
`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`




export default Container