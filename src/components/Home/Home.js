import { BoxBoton, BoxHome, Button, Main, Subtitle, Title} from "./HomeStyled";


const Home = () => {
    return (
        <>
        <Main/>
        <BoxHome>
         <Title>Yaisi Aixa Miguel</Title>   
        <Subtitle><b>"El espíritu de la TERAPIA OCUPACIONAL es la música que hace que merezca la pena vivir"</b>
        </Subtitle>
        <BoxBoton>
        <Button>
            Consultorio
        </Button>
        <Button>
            PlusVita
        </Button>
        </BoxBoton>
        </BoxHome>
        
        </>
    );
};

export default Home;
