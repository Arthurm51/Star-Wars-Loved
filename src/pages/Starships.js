import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'



export default function Starships() {

    const [starships, setStarships] = useState([])
    const [msg, setMsg] = useState("")

    const getStarships = () => {
        axios.get(`https://swapi.dev/api/starships/`)
            .then(retorno => {
                console.log(retorno)
                setStarships(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
    }

    useLayoutEffect(() => {

        getStarships()


    }, [])

    return (
        <>
        <Banner titulo="Espaço-Naves" mensagem="Confira aqui um resumo de todas as Espaço-Naves do universo STAR WARS" />
        <section id="three" className="wrapper special">
            <div className="corpoPagina">
                {msg}
                {starships.map((item, chave) =>
                    <div key={chave}>
                            
                <h3>Nome: </h3><h2>{item.name}</h2> <h1>Modelo: </h1><strong>{item.model}</strong><br/> <br/><h1>Fabricante: </h1>{item.manufacturer} <br/><br/> <h1>Custo em créditos: </h1> {item.cost_in_credits}<br/><br/> <h1>Comprimento: </h1> {item.length}<br/><br/> <h1>Velocidade atmosférica máxima: </h1> {item.max_atmosphering_speed} <h1>Equipe técnica: </h1> {item.crew}<br/><br/> <h1>Passageiros: </h1> {item.passengers} <h1>Capacidade de carga: </h1> {item.cargo_capacity}<br/><br/> <h1>Consumiveis: </h1> {item.consumables} <h1>Avaliação hiperdrive: </h1> {item.hyperdrive_rating}<br/><br/> <h1>MGLT: </h1> {item.MGLT} <h1>Classe: </h1> {item.starship_class}<br/><br/> <h1>Criação: </h1> {item.created} <h1>Modificada: </h1> {item.edited}
                        
                        <hr />
                    </div>
                    )
                
                    }
            </div >
        </section>
        
        </>
    )
}

            