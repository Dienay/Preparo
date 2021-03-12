import React from 'react';
import Header from '../../components/Header';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import useForm from '../../Hooks/useForm';

import { Info } from './styles';
import { Containers } from '../../common/styles/Containers';
import { Card } from '../../common/styles/Cards';

function Localizacao() {
  const { form, onChange } = useForm({email: "", password:""})

  const handleInputChange = event => {
      const { name, value } = event.target
      onChange(name, value)
  }

  return (
    <div>
      <Header />
      <Containers>
        <h3>INFORMAÇÕES PESSOAIS</h3>
        <Info>
          <Card className="info">
            <div>
              <h4>Instruções</h4>
              <p>Preencha seus dados de Localização. Sempre os mantenha atualizado.</p>
            </div>
            <Form className="" noValidate autoComplete="off">
              <Form.Group>
                <Form.Label>CEP<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="12345-678"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Cidade<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Insira o nome de sua cidade atual"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Estado<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Selecione o Estado"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Bairro<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Insira o nome de seu bairro"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Endereço<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Insira seu endereço"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Número<span class="text-danger">*</span></Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Insira o número de sua residência"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                 type="text" 
                 onChange={handleInputChange}
                 placeholder="Insira um complemento se achar necessário"
                />
              </Form.Group>
            </Form>
          </Card>
          <div className="enviar" >
            <Button variant="danger" onClick="">Enviar</Button>
          </div>
        </Info>
      </Containers>
    </div>
)
}

export default Localizacao;