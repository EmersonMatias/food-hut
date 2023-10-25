import styled from "styled-components";

const Container = styled.div`
    width: 30rem;
    height: 35rem;
    background: linear-gradient(180deg, rgba(37, 35, 36, 0.5) 0%, rgba(158, 94, 94, 0.5) 100%);
    z-index: 100;
    right: 18rem;
    top: 20rem;
    border-radius: 0.8rem;
    backdrop-filter: blur(5px);
    position: fixed;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    
    .imgCard{
        width: 30rem;
        top: -13rem;
        position: absolute;
        
    }

    .dishName{
        margin-top: 16rem;
        padding: 0 1.6rem;
        font-size: 2.4rem;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }

    .buttonsContainer{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
        padding: 0 1.6rem;

        .buy, .cart{
            background: #FF3817;
            border: 1px solid #FF3817;
            border-radius: 6px;
            box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            display: inline-block;
            font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1.6rem;
            min-height: 4rem;
            outline: 0;
            padding: 0.8rem 1rem;
            text-align: center;
            text-rendering: geometricprecision;
            text-transform: none;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: middle;
            margin-right: 0.8rem;
        }

        .buy:hover , .buy:active, .cart:hover, .cart:active{
            background-color: initial;
            background-position: 0 0;
            color: #FF4742;
        }

        .buy:active, .cart:active{
            opacity: .5;

        }
        

    }
`




export default Container



