import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 6px #ddd;
    margin: 0 auto 25px auto;
    padding: 30px 20px;
    max-width: 400px;
`;

export const SpanPrice = styled.span`
    font-size: 20px;
    color: #757575;
    margin-top: 15px;
`;

export const CardTitle = styled.h3`
    font-size: 20px;
    margin: 0 0 20px 0;
    text-align: center;
    color: #757575;
`;

export const CardLink = styled(Link)`
    text-decoration: none;
    flex-basis: 25%;
    margin: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;