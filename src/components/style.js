import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    font-size: 40px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    background-color: aqua;
    height: 100vh;
`

export const Butoes = styled.div `
    display: flex;
    height: 20vh;
    width:70%;
    justify-content: space-evenly;
    align-items: center;
    button {
        height:40px;
        width:100px;
        color: white;
        border-radius: 5px;
        background-color: blue;
        cursor: pointer;
        font-size: 20px;
    }
`

export const Paragrafo = styled.p `
    font-size: 40px;
`

export const Inputs = styled.div`
    display:flex;
    flex-direction: column;
    width:80%;
    height: 200px;
    align-items: center;
    justify-content: space-evenly;
    

`

export const Escreva = styled.input`
    display: flex;
    height: 50px;
    width: 50%;
    border-radius: 15px;
    text-align: center;
    font-size: 25px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
    -webkit-appearance:none;
    -moz-appearance:textfield;
    margin:0;
}
@media (max-width:1600px) {
        width:80%;
    }
` 

export const Limpar = styled.button`
  height:30px;
  width:80px;
  color: white;
  border-radius: 5px;
  background-color: black;
  cursor: pointer;
  font-size: 20px;
`

export const Titulo = styled.h1`
    font-size: 35px;
`