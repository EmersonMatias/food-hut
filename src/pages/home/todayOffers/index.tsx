import FoodCard from "../../../components/foodCard/FoodCard";
import Container from "./styles";

export default function TodayOffers(){
    return(
        <Container>
            <h1>Ofertas do Dia</h1>
           
            <main>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
          
            </main>
        </Container>
    )
}