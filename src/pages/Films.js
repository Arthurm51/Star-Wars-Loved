import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'






export default function Filmes() {

    const [filmes, setFilmes] = useState([])
    const [msg, setMsg] = useState("")

    const getFilmes = () => {
        axios.get(`https://swapi.dev/api/films/`)
            .then(retorno => {
                console.log(retorno)
                setFilmes(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
    }

    useLayoutEffect(() => {

        getFilmes()


    }, [])

    return (
        <>
        <Banner titulo="FILMES" mensagem="Confira aqui toda a trilogia STAR WARS" />
        <section id="three" className="wrapper special">
            <div className="corpoPagina">
                {msg}
                {filmes.map((item, chave) =>
                    <div key={chave}>
                            
                <h3>Filme: </h3><h2>{item.title}</h2> <h1>Sequência de abertura: </h1><strong>{item.opening_crawl}</strong><br/> <br/><h1>Diretor: </h1>{item.director} <br/><br/> <h1>Produtor: </h1> {item.producer} <h1>Data de lançamento: </h1> {item.release_date}
                        
                        <hr />
                    </div>
                    )
                
                    }
            </div >
        </section>
        
        </>
    )
}


