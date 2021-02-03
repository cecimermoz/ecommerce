import styled from "styled-components";
import loader from "../img/Spinner-0.5s-252px.gif";

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis:100%;
    margin-top: 15%;
`;

export const LoaderGif = () => <Loader><img src={loader} alt={''}/></Loader>