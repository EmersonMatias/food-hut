import Container, { Background, Gradient, HeroSectionPhrase } from "./styles";


export default function Home() {


    return (
        <Container>
            <Background>
                <HeroSectionPhrase>
                    <div className="colorRed"> FoodHut<br /> </div>
                    Onde Cada Mordida Traz uma Explosão
                    de <span className="colorRed">Sabores Únicos</span> e <span className="colorRed" >Deliciosos</span>
                </HeroSectionPhrase>

                <Gradient>
                    <div className="gradientInverted"></div>
                </Gradient>
               
            </Background>



        </Container>
    )
}


