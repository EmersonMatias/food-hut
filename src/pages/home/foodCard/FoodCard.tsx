import Container from "./styles";
import prato1 from "../../../img/prato1.svg"

export default function FoodCard() {
    return (
        <Container>
            <img className="imgCard" src={prato1} />


            <div className="dishName">Noodles de Frutos do Mar Temperados com Pimenta</div>


            <div className="buttonsContainer">
                <button className="cart">Adicionar ao carrinho</button>
                <button className="buy">Comprar</button>
            </div>


        </Container>
    )
}