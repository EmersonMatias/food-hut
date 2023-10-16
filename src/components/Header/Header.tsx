import Container, { StyledNavLink } from "./styles";

export default function Header() {
    return (
        <Container>
            <div>FoodHut</div>


            <div className="rightSide">
                <StyledNavLink to="/">Inicio</StyledNavLink>
                <StyledNavLink to="/menu">Menu</StyledNavLink>
                <StyledNavLink to="/contato">Contato</StyledNavLink>
                <StyledNavLink to="/sobrenos">Sobre nós</StyledNavLink>
            </div>



        </Container>
    )
}