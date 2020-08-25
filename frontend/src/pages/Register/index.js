import React,{useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

const Register = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whattsapp, setWhattsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory('');

    const handleRegister = async(e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            whattsapp,
            city,
            uf
        }

        try{
            const response = await api.post('ongs', data); //axios já envia no padrão JSON
            alert('Seu ID de acessso: ' + response.data.id);
            history.push('/'); /*Após cadastrar o usuário, o cliente e redirecionado a página principal*/

        } catch(e){
          alert('Erro no Cadastro tente Novamente!');
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                      <FiArrowLeft size={16} color="#E02041" />
                      Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Digite o nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whattsapp" value={whattsapp} onChange={e => setWhattsapp(e.target.value)} />
                  <div className="input-group">
                   <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                   <input placeholder="UF" style={{ width:80 }} value={uf} onChange={e => setUf(e.target.value)} />
                  </div>
                   <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register;