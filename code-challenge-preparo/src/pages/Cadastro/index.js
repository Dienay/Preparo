import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import useForm from '../../Hooks/useForm';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { ContainerForm } from '../../common/styles/formLoginCadastro';
import { Cadastrar } from './styles';

function Cadastro() {
    const { form, onChange } = useForm({email: "", password:""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const history = useHistory()

    const goToLogin = () => {
        history.replace("/login")
    }

  return (
    <div>
        <Header/>
        <ContainerForm>
            <Cadastrar>
                <h2>CADASTRO DO CANDIDATO</h2>
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
                    <Form.Control
                        id="password"
                        label="Password"
                        variant="outlined"
                        value={form.password}
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        placeholder="CONFIRMAR SENHA"
                    />
                    <Button variant="danger" onClick={goToLogin}>CADASTRAR</Button>
                </Form>
            </Cadastrar>
        </ContainerForm>
    </div>
)
}

export default Cadastro;