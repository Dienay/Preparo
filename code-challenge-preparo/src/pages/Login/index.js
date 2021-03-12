import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import useForm from '../../Hooks/useForm';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { ContainerForm } from '../../common/styles/formLoginCadastro';
import { Log } from './styles';

function Login() {
    const { form, onChange } = useForm({email: "", password:""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const history = useHistory()

    const goToHome = () => {
        history.replace("/perfil")
    }
    
    const goToSignup = () => {
        history.replace("/signup")
    }

  return (
    <div>
        <Header/>
        <ContainerForm>
            <Log>
                <h>LOGIN</h>
                <Form className="" noValidate autoComplete="off">
                    <Form.Control
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        value={form.email}
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                    />
                    <Form.Control
                        id="password"
                        label="Password"
                        variant="outlined"
                        value={form.password}
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        placeholder="SENHA"
                    />
                    <Button variant="danger" onClick={goToHome}>Entrar</Button>
                    <Button variant="secondary" onClick={goToSignup}>Cadastrar</Button>
                </Form>
            </Log>
        </ContainerForm>
    </div>
    )
}

export default Login;