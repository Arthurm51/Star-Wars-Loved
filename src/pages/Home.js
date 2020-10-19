import React from 'react'
import Banner from '../components/Banner'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


const Home = (props) => {
    return (
        <>
            <Banner titulo="Seja Bem-Vindo" mensagem="Aula de React" />
            <section id="three" className="wrapper special">
                <div className="inner">    
                    <div className="p-3 bg-dark my-2 rounded">
                        <Toast>
                        <ToastHeader>
                            Created By:
                        </ToastHeader>
                        <ToastBody>
                            1120479<br/>
                            thuur51@gmail.com<br/>
                            Arthur Vieira Machado
                        </ToastBody>
                        </Toast>
                    </div>
                        
                    
                </div>
            </section>
        </>
    )
}

export default Home