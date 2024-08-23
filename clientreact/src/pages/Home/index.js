import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Home.module.css"
import axios from 'axios';
import Header from '../../Components/Header/index';
import Container from '../../Components/Container';
import CarouselTenis from '../../Components/CarouselTenis';
import CardTenis from '../../Components/CardTenis/index';
import Footer from '../../Components/Footer';

import TenisLaranja from "../../imagemTenis/TenisLaranja.jpeg";
// import tenisBranco from "../../imagemTenis/TenisBranco.jpeg";
// import tenisPretoRosa from "../../imagemTenis/TenisPretoRosa.jpeg";

import { baseUrl } from '../../Contexts/Url';

// const tenis = [tenisBranco, tenisLaranja, tenisPretoRosa]

function Home(){
        const [data, setData] = useState([]);

        const pedidoGet=async()=>{
          await axios.get(baseUrl)
          .then(response =>{
            setData(response.data);
          }).catch(error=>{
            console.log(error);
          })
      
        }
      
        useEffect(()=> {
              pedidoGet();
        })
      
        
        return (
          <div className={styles.home}>
            <Header />
            <CarouselTenis />
            
            <Container >
              {     
                data.map((dados) =>             
                   <CardTenis imagens={TenisLaranja} 
                              id={dados.id}
                              titulo={dados.nome} 
                              descricao={dados.descricao}
                              preco={dados.preco}/>)
              }
      
            </Container>
            <Footer />
          </div>

    )
}

export default Home;