import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
export default function Home() {

    return (
        <>
            <Banner titulo="Lista de Espécies" mensagem="Relembre aqui as espécies do universo STAR WARS" />
            <section id="two" class="wrapper style1 special">
				<div class="inner">
					<header>
						<h2>Espécies</h2>
						<p>Confira aqui as principais espécies Star Wars</p>
					</header>
					<div class="flex flex-4">
						<div class="box person">
							<div class="image round">
								<img src={require("../images/pic03.jpg")} alt="Person 1" />
							</div>
							<h3>Magna</h3>
							<p>Cipdum dolor</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={require("../images/pic04.jpg")} alt="Person 2" />
							</div>
							<h3>Ipsum</h3>
							<p>Vestibulum comm</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={require("../images/pic05.jpg")} alt="Person 3" />
							</div>
							<h3>Tempus</h3>
							<p>Fusce pellentes</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={require("../images/pic06.jpg")} alt="Person 4" />
							</div>
							<h3>Dolore</h3>
							<p>Praesent placer</p>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}