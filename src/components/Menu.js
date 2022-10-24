import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Menu() {

    const { concluidas } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <MenuContainer>
            <p onClick={() => navigate('/habitos')}>Hábitos</p>
            <div onClick={() => navigate('/hoje')}>
                <CircularProgressbar
                    value={concluidas}
                    text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "white",
                        pathColor: "white",
                        textSize: '18px',
                        fontFamily: 'Lexend Deca',
                        trailColor: "transparent",
                    })}
                />
            </div>
            <p onClick={() => navigate('/historico')}>Histórico</p>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 70px;
width: inherit;
background-color: white;
position: fixed;
bottom: 0;
left: auto;
color: #52B6FF;

p {
    cursor: pointer;
}

& > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    margin-bottom: 45px;
    color: white;
    position: relative;
    cursor: pointer;
    font-family: 'Lexend Deca', sans-serif;
}
`