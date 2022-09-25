import styled from "styled-components";

export const BoxHome = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDD0CF;
    color: black;
    font-family: 'Quicksand', sans-serif;
    padding-bottom: 5%;
`

export const Main = styled.div`
    background-image: url('https://img.freepik.com/vector-gratis/ilustracion-terapia-ocupacional-diseno-plano-dibujado-mano_23-2149378519.jpg?w=2000');
    background-size: contain;
    min-height: 100vh;
    @media (min-width: 769px){
    background-size: 100vw;    
    }
`

export const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 2.5rem;
    text-align: center;
    @media (min-width: 769px){
    font-size: 4rem;    
    }
`

export const Subtitle = styled.p`
    display: flex;
    width: 80%;
    justify-content: center;
    font-size: 1rem;
    margin-left: 10%;
    background-color: white;
    text-align: center;
    border-radius: 5px;
    border: solid black 1px;
    @media (min-width: 769px){
    font-size: 2rem;    
    }
`
export const BoxBoton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2%;
`

export const Button = styled.button`
    width: 150px;
	height: 50px;
	cursor: pointer;
	border: none;
	color: black;
	font-size: 20px;
	border-radius: 4px;
	box-shadow: inset 0px 3px 5px rgba(255,255,255,0.5), 0px 0px 10px rgba(0,0,0,0.15);
	background: rgb(2,0,36);
    background: linear-gradient(45deg, rgba(2,0,36,0) 5%, rgba(255,255,255,.5) 6%, rgba(255,255,255,0) 9%, rgba(255,255,255,.5) 10%, rgba(255,255,255,0) 17%, rgba(255,255,255,.5) 19%, rgba(255,255,255,0) 21%);
	background-size: 150%;
	background-position: right;
	transition: 1s;
    margin-bottom: 3%;
    margin-top: 2%;
&:hover {
	background-position: left;
	color: white;
	box-shadow: inset 0px 3px 5px rgba(255,255,255,1), 0px 0px 10px rgba(0,0,0,0.25);
}

&:focus {
	outline: none;
}
`