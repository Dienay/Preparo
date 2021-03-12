import styled from 'styled-components'


export const Info = styled.div`

        .info {
                padding: 16px 32px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 32px;
                align-items: center;
        }

        .info h4 {
                font-size: 1.5rem;
                font-weight: 500;
        }

        .enviar {
                padding-top: 32px;
                text-align: center;

                button {
                        padding: 8px 32px;
                }
        }
`