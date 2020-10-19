import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'



export default function Planets() {

    const [planets, setPlanets] = useState([])
    const [msg, setMsg] = useState("")

    const getPlanets = () => {
        axios.get(`https://swapi.dev/api/planets/`)
            .then(retorno => {
                console.log(retorno)
                setPlanets(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
    }

    useLayoutEffect(() => {

        getPlanets()


    }, [])

    return (
        <>
        <Banner titulo="Planetas" mensagem="Explore aqui todos os planetas do universo STAR WARS" />
        <section id="three" className="wrapper special">
            <div className="corpoPagina">
                {msg}
                {planets.map((item, chave) =>
                    <div key={chave}>
                            
                <h3>Nome: </h3><h2>{item.name}</h2> <h1>Periodo de rotação: </h1><strong>{item.rotation_period}</strong><br/> <br/><h1>Periodo orbital: </h1>{item.orbital_period} <br/><br/> <h1>Diametro: </h1> {item.diameter}<br/><br/> <h1>Clima: </h1> {item.climate}<br/><br/> <h1>Gravidade: </h1> {item.gravity} <h1>Terra: </h1> {item.terrain}<br/><br/> <h1>Água da superfície: </h1> {item.surface_wate}<br/><br/> <h1>População: </h1> {item.population}
                        
                        <hr />
                    </div>
                    )
                
                    }
            </div >
        </section>
        
        </>
    )
}

            