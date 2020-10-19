import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'



export default function Personagens() {

    const [personagens, setPersonagens] = useState([])
    const [msg, setMsg] = useState("")

    const getPersonagens = () => {
        axios.get(`https://swapi.dev/api/people/`)
            .then(retorno => {
                console.log(retorno)
                setPersonagens(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
    }

    useLayoutEffect(() => {

        getPersonagens()


    }, [])

    return (
        <>
        <Banner titulo="Personagens" mensagem="Relembre aqui os personagens do universo STAR WARS" />
        <section id="three" className="wrapper special">
            <div className="corpoPagina">
                {msg}
                {personagens.map((item, chave) =>
                    <div key={chave}>
                            
                <h3>Nome: </h3><h2>{item.name}</h2> <h1>Altura: </h1><strong>{item.height}</strong><br/> <br/><h1>Peso: </h1>{item.mass} <br/><br/> <h1>Cor do cabelo: </h1> {item.hair_color}<br/><br/> <h1>Cor da pele: </h1> {item.skin_color}<br/><br/> <h1>Cor do olho: </h1> {item.eye_color} <h1>Ano de nscimento: </h1> {item.birth_year}<br/><br/> <h1>Genero: </h1> {item.gender}
                        
                        <hr />
                    </div>
                    )
                
                    }
            </div >
        </section>
        
        </>
    )
}

            