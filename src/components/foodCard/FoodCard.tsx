import Container from "./styles";
import { FoodCardType } from "../../types/types";

export default function FoodCard({dishImg , dishName}: FoodCardType) {
    return (
        <Container>
            <img className="imgCard" src={dishImg} />


            <div className="dishName">{dishName}</div>


            <div className="buttonsContainer">
                <button className="cart">Adicionar ao carrinho</button>
                <button className="buy">Comprar</button>
            </div>


        </Container>
    )
}



