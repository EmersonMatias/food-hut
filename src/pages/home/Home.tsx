
import FoodCard from "../../components/foodCard/FoodCard";
import Container, { HeroSection, Gradient, HeroSectionPhrase, HeroSectionFoodCard } from "./styles";
import Instagram from "../../img/instagram.svg"
import Whatsapp from "../../img/whatsapp.svg"
import DishImg from "../../img/prato1.svg"
import TodayOffers from "./todayOffers";


export default function Home() {


    return (
        <Container>
            <HeroSection>

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

                <HeroSectionFoodCard>
                    <FoodCard dishImg={DishImg} dishName="Noodles de Frutos do Mar Temperados com Pimenta"/>
                </HeroSectionFoodCard>


                <Gradient />
            </HeroSection>

            <TodayOffers />


        </Container>
    )
}


