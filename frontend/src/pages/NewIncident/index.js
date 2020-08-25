import React, {useState}from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
import './style.css';

import logoImg from '../../assets/logo.svg';

const NewProfile = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState();
    const ongID = localStorage.getItem('ongID');
    const history = useHistory('');

    const handleRegisterIncident = async(e) => {
        e.preventDefault();

        

        const data = {title, description, value};

        try{
            
            await api.post('incidents', data, {headers:{Authorization: ongID }});
            history.push('/profile');

        }catch(err){
            alert('Não foi possível registrar seu caso tente novamente');
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um novo herói.</p>
                    
                    <Link className="back-link" to="/profile">
                      <FiArrowLeft size={16} color="#E02041" />
                      Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleRegisterIncident}>
                    <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)} />
                  
                   <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewProfile;