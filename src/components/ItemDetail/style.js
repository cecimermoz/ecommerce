import styled from "styled-components";

export const ItemDetailContainer = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    height: 85vh;
    margin: 25px auto;
    max-width: 1460px;
    img{
        width: 50%;
    }
`;
export const ItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    max-width: 400px;
    align-items: center;
    justify-content: center;
    h2{
        text-align: center;
        width: 80%;
    }
    p{
        text-align: center;
    }
`;
export const ItemPrecio = styled.span`
    font-size: 25px;
    color: #ed4172;
`;