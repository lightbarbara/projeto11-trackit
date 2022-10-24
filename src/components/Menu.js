import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Menu() {

    const { concluidas } = useContext(AppContext)

    return (
        <MenuContainer>
            <Link to='/habitos'><p>Hábitos</p></Link>
            <div>
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
            <Link to='historico'><p>Histórico</p></Link>
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

a {
    text-decoration: none;
    color: #52B6FF;
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