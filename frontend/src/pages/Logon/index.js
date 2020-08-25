import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'; // esse componente troca de rota sem recarregar o HTML inteiro
import { FiLogIn } from 'react-icons/fi'
import './style.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import api from '../../services/api'

const Logon = (e) => {
    const [id, setId] = useState('');
    const history = useHistory('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try{    
            const response = await api.post('session', {id});
            console.log(response.data.name);
            
            //Como preciso manter o nome e o ID da ONG o tempo todo irei salvar de forma global
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            //Enviando a ONG para sua página
            history.push('/profile');

        }catch(err){
            alert('Falha na operação tente novamente!');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
               <img src={logoImg} alt="Logo"/>
             
              <form onSubmit={handleLogin}>
                 <h1>Faça seu Logon</h1>

                 <input placeholder="Digite sua ID" value={id} onChange={e => setId(e.target.value)} />
                  <button className="button" type="submit">Entrar</button>

                  <Link className="back-link" to="/register">
                      <FiLogIn size={16} color="#E02041" />
                      Não tenho cadastro
                  </Link>
              </form>
             </section> 

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;

