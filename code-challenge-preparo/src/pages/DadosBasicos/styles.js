import styled from 'styled-components'

export const FormContainer = styled.div`
        margin-top: 48px;

        .cards {
                margin: 4px 0;
        }

        .cards > div {
                align-items: center;
                display: grid;
                gap: 32px;
                grid-template-columns: 1fr 1fr;
                padding: 1rem;
        }

        h4 {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: .5rem;
        }

        .carregar-foto {
                margin: 16px;
        }

        .atualizar-email {
                margin-top: 16px;
                align-self: flex-start;
        }

        .group {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                margin: 0;
        }

        .enviar {
                margin-top: 16px;
                margin-bottom: 64px;
                text-align: center;
        }

        .enviar button{
                padding: 4px 24px;
        }
    
`