import React from 'react'
import Banner from '../components/Banner'
import { ButtonToggle } from "reactstrap";

class Home extends React.Component {
    render() {
      return (

    

            <>
                <Banner titulo="Faça aqui seu login" mensagem="Ou crie sua conta." />

                <div className="login">

                    <div className="email"><h3>E-mail</h3><input type="text"/></div>
                    <div className="senha"><h3>Password</h3><input type="password" name="senha" id="senha"/></div>
                    <div className="fazerLogin"><ButtonToggle type="submit" color="secondary">LOGIN</ButtonToggle>{' '}</div>
                    

                </div>

                


            </>
      )
    }
}
export default Home