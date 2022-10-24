import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";

export default function Topo() {

    const { user } = useContext(AppContext)

    return (
        <TopoContainer>
            <p>TrackIt</p>
            <img src={user.image} alt='foto usuário' />
        </TopoContainer>
    )
}

const TopoContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0 18px;
align-items: center;
height: 70px;
width: inherit;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
box-sizing: border-box;
position: absolute;
top: 0;
left: 0;

p {
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: white;
}

img {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    object-fit: cover;
}
`