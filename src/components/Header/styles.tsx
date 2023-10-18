import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 10vh;
    color: #FFFFFF;
    z-index: 200;
    display: flex;
    font-size: 2.4rem;
    padding: 2.4rem 2.4rem 0 2.4rem;
    font-weight: bold;
    justify-content: space-between;

    position: absolute;

    .rightSide{
        display: flex;
    }

`
export const StyledNavLink = styled(NavLink)`
    color: #FFFFFF;
    text-decoration: none;
    margin: 0 0.8rem;

    &:hover{
       color: #e87474;
    }

    &.active{
        color: #fb1414;
        font-weight: bold;
    }
`


export default Container