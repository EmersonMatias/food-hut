
import FoodCard from "./foodCard/FoodCard";
import Container, { Background, Gradient, HeroSectionPhrase } from "./styles";
import Instagram from "../../img/instagram.svg"
import Whatsapp from "../../img/whatsapp.svg"

export default function Home() {


    return (
        <Container>
            <Background>

                <HeroSectionPhrase>
                    <div className="colorRed"> FoodHut<br /> </div>
                    Onde Cada Mordida Traz uma Explosão
                    de <span className="colorRed">Sabores Únicos</span> e <span className="colorRed" >Deliciosos</span>

                    <div className="contact">

                        <button className="whatsapp">
                            <img src={Whatsapp} />
                            <p>Whatsapp</p>
                        </button>
                        <button className="instagram">
                            <img src={Instagram} />
                            <p>Instagram</p>
                        </button>
                    </div>
                </HeroSectionPhrase>

                <FoodCard />




                <Gradient>
                    {/*<div className="gradientInverted"></div>*/}
                </Gradient>


            </Background>



        </Container>
    )
}


