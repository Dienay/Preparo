import styled from 'styled-components'

export const ContainerHeader = styled.div`
    background-color: #e4e6e7;
    display: flex;
    align-items: center;
    position: fixed;
    padding-left: 38px;
    top: 0;
    height: 70px;
    width: 100%;
    z-index: 1;

    span {
        height: 53px;
        cursor: pointer;
    }
`

export const Nav = styled.div`
    span {
        margin-left: 38px;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        color: #3b4b5b;
    }
`