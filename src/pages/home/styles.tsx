import styled from "styled-components";
import BackgroundPage from "../../img/background.jpg"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
`

export const HeroSection = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Gradient = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(360deg, #0e0e0e 4%, rgba(255,255,255,0) 100%);
    position: absolute;

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
    position: absolute;
    font-size: 5.6rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1rem;
    line-height: 6.4rem;
    margin-left: 9.6rem;
    margin-top: 16rem;
    z-index: 100;

    .colorRed{
        color: #FFE418;
    }

    .contact{
        display: flex;
        justify-content: center;
        margin-top: 2.4rem;
     

        .whatsapp , .instagram{
            color: #FFFFFF;
            display: flex;
            font-weight: bold;
            align-items: center;
            cursor: pointer;
            border: none;
            background: linear-gradient(180deg, rgba(37, 35, 36, 0.5) 0%, rgba(158, 94, 94, 0.5) 100%);
            backdrop-filter: blur(100px);
            font-size: 2.4rem;
            border-radius: 0.8rem;
            padding: 1.6rem 3.2rem;
            margin: 0 4rem;

            img{
                width: 4rem;
                margin-right: 1.6rem;
            }
        }

        .whatsapp:hover , .instagram:hover{
            backdrop-filter: blur(1px);
        }

        .whatsapp:active , .instagram:active{
            opacity: 0.5;
        }
    }

`

export const HeroSectionFoodCard = styled.div`
    position: absolute;
    z-index: 3;
    right: 18rem;
    top: 20rem;

`






export default Container