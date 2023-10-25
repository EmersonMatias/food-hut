import styled from "styled-components";
import BackgroundPage from "../../img/background.jpg"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Gradient = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(360deg, #000000 0%, rgba(255,255,255,0) 100%);
    position: fixed;

    /*
    .gradientInverted{
        width: 100%;
        height: 100vh;
        background: linear-gradient(360deg, rgba(0,0,0,1) 4%, rgba(255,255,255,0) 100%);
        position: fixed;
    }*/
`


export const HeroSectionPhrase = styled.p`
    width: 50%;
    color: #FFFFFF;
    position: fixed;
    font-size: 5.6rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1rem;
    line-height: 6.4rem;
    margin-left: 9.6rem;
    margin-top: 20rem;
    z-index: 100;

    .colorRed{
        color: red;
    }
`






export default Container