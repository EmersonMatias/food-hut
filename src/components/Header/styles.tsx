import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 10vh;
    color: #FFFFFF;
    background-color: rgb(0,0,0,0.2);
    display: flex;
    font-size: 2.4rem;
    padding: 1.6rem 2.4rem 0 2.4rem;
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
       color: #c37f1a;
    }

    &.active{
        color: red;
        font-weight: bold;
    }
`


export default Container