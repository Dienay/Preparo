import styled from 'styled-components'

export const Containers = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    min-height: calc(100vh - 70px);

    > h3 {
        color: #34383e;
        font-family: "lato", sans-serif;
        font-weight: 500;
        font-size: 1rem;

        margin-bottom: 24px;
    }
`