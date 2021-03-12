import styled from 'styled-components'

export const ContainerForm = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    
    min-height: calc(100vh - 70px);

    > div { 
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgb(0 0 0 / 19%);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
    }

    > div > h2 {
        font-weight: normal;
        font-size: 1.2rem;
        color: #212529;
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 32px;
        width: 100%;

        input {
            margin-top: 16px;
        }

        button {
            margin-top: 16px;
        }
    }
`