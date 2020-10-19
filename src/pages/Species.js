import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'



export default function Species() {

    const [species, setSpecies] = useState([])
    const [msg, setMsg] = useState("")

    const getSpecies = () => {
        axios.get(`https://swapi.dev/api/species/`)
            .then(retorno => {
                console.log(retorno)
                setSpecies(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
    }

    useLayoutEffect(() => {

        getSpecies()


    }, [])

    return (
        <>
        <Banner titulo="Especies" mensagem="Enfrente aqui todas as espécies do universo STAR WARS" />
        <section id="three" className="wrapper special">
            <div className="corpoPagina">
                {msg}
                {species.map((item, chave) =>
                    <div key={chave}>
                            
                <h3>Nome: </h3><h2>{item.name}</h2> <h1>Classificação: </h1><strong>{item.classification}</strong><br/> <br/><h1>Designação: </h1>{item.designation} <br/><br/> <h1>Altura Média: </h1> {item.average_height}<br/><br/> <h1>Cores de pele: </h1> {item.skin_colors}<br/><br/> <h1>Cores do cabelo: </h1> {item.hair_colors} <h1>Cores dos olhos: </h1> {item.eye_colors}<br/><br/> <h1>Vida média: </h1> {item.average_lifespan}<br/><br/> <h1>Lingua: </h1> {item.language}
                        
                        <hr />
                    </div>
                    )
                
                    }
            </div >
        </section>
        
        </>
    )
}

            