import React from 'react';
import { Card } from '../../common/styles/Cards';
import { Containers } from '../../common/styles/Containers';
import Header from '../../components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Informations } from './styles';

function Inicio() {
  return (
    <div>
      <Header/>
      <Containers>
        <h3>INFORMAÇÕES PESSOAIS</h3>
        <Card>
          <Informations>
            <h2>Instruções</h2>
            <hr/>
            <span>Para atualizar suas informações cadastrais, clique na barra vertical em</span>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar seu 
                  <strong> perfil<span class="text-danger">*</span></strong> (nome, sobrenome, telefone, links pessoais).
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar sua 
                <strong> localização<span class="text-danger">*</span></strong> (CEP, cidade, etc.).
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para preencher sua 
                <strong> identificação<span class="text-danger">*</span></strong> (CPF, data de nascimento, etc.).
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar sua 
                <strong> formação<span class="text-danger">*</span></strong> (universidade, situação e curso).
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para enviar seu <strong>currículo</strong>
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar suas 
                <strong> habilidades</strong> (conteúdos, assuntos, linguagens de programação, etc.)..
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar suas 
                <strong> experiências</strong> (estágios, trabalhos voluntários, intercâmbios, etc.).
                </span>
              </li>
              <li>
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> para atualizar suas 
                <strong> premiações</strong> (ex.: olimpíadas científicas).
                </span>
              </li>
            </ul>
            <p className="font-italic">Se sentir falta de algum campo, conte-nos por <span class="text-success"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</span> o que você gostaria de ver por aqui.</p>
            <p className="font-italic">Se tiver algum problema com preenchimento, alguma dúvida ou sugestão contate-nos também.</p>
            <p><strong class="text-danger">* Campos Obrigatórios para a candidatura em uma vaga.</strong></p>
          </Informations>
        </Card>
      </Containers>
    </div>
)
}

export default Inicio;