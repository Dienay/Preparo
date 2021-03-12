import React from 'react';
import { Card } from '../../common/styles/Cards';
import { Containers } from '../../common/styles/Containers';
import Header from '../../components/Header';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FormContainer } from './styles';

function DadosBasicos() {
  return (
    <div>
      <Header />
      <Containers>
        <FormContainer>
          <Form>
            <Card className="cards">
              <div>
                <section>
                  <h4>Foto de perfil</h4>
                  <p>Adicione uma foto em seu perfil</p>
                </section>
                <Form.Group className="group">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" size="100" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                      </path>
                  </svg>
                  <div>
                    <Button className="carregar-foto" variant="primary">Carregar foto</Button>
                  </div>
                </Form.Group>
              </div>
            </Card>
            <Card className="cards">
              <div>
                <section>
                  <h4>Email</h4>
                  <p>Você pode alterar seu email</p>
                </section>
                <Form.Group className="group">
                  <Form.Label>Email<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="email@exemplo.com" />
                  <Button className="atualizar-email" variant="primary">Atualizar email</Button>
                </Form.Group>
                
              </div>
            </Card>
            <Card className="cards">
              <div>
                <section>
                  <h4>Instruções</h4>
                  <p>Preencha seus dados de perfil. Sempre mantenha seu telefone atualizado.</p>
                </section>
                <Form.Group className="group">
                  <Form.Label>Nome<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Digite seu nome" />
                  <Form.Label>Sobrenome<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Digite seu sobrenome" />
                  <Form.Label>Telefone<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="(00) 00000-0000" />
                  
                </Form.Group>
                
              </div>
            </Card>
            <Card className="cards">
              <div>
                <section>
                  <h4>Links Pessoais</h4>
                  <p>Compartilhe seu perfil de outras plataformas aqui.</p>
                </section>
                <Form.Group className="group">
                  <Form.Label>Github<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="http://github.com/abcdefghi" />
                  <Form.Label>Behance<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="http://www.behance.netm/abcdefghi" />
                  <Form.Label>Linkedin<span class="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="http://www.linkedin.com/abcdefghi" />
                  
                </Form.Group>
                
              </div>
            </Card>
            <div className="enviar">
              <Button variant="danger">Enviar</Button>
            </div>
          </Form>
        </FormContainer>
      </Containers>
    </div>
)
}

export default DadosBasicos;