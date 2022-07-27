// Você deve criar as funções de cada button para disparar a operação no click
// Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
// Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)

import React, {Component} from "react"
import styled from "styled-components"

const Container = styled.div`
  font-size: 40px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;
`

const Butoes = styled.div `
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
  }
`

const Paragrafo = styled.p `
  font-size: 25px;
`

const Inputs = styled.div`
  display:flex;
  flex-direction: column;
  width:80%;
  height: 200px;
  align-items: center;
  justify-content: space-evenly;
  
`

const Escreva = styled.input`
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
` 

const Limpar = styled.button`
    height:30px;
    width:80px;
    color: white;
    border-radius: 5px;
    background-color: black;
    cursor: pointer;
`

export default class Calculadora extends Component{

  state= {
    numero1: "",
    numero2: "",
    resultado: 0,
    metodo: "+",
    showNumero1:0,
    showNumero2:0,
  }

  handleChange = (event) => {
    this.setState({
      numero1: Number(event.target.value),
      showNumero1: Number(event.target.value)
    })
  }

  handleChange1 = (event) => {
    this.setState({
      numero2: Number(event.target.value),
      showNumero2: Number(event.target.value)
    })
  }
  somar = () => {
    this.setState({
      resultado: this.state.numero1 + this.state.numero2,
      metodo: "+"
    })
  }
  subtrair = () => {
    this.setState({
      resultado: this.state.numero1 - this.state.numero2,
      metodo: "-"
    })
  }
  
  multiplicacao = () => {
    this.setState({
      resultado: this.state.numero1 * this.state.numero2,
      metodo: "x"
    })
  }
  dividir = () => {
    this.setState({
      resultado: this.state.numero1 / this.state.numero2,
      metodo: "/"
    })
  }  

  limpar = () => {
    this.setState({
      resultado: "0",
      metodo: "+",
      numero1: "",
      numero2: "",
      showNumero1: 0,
      showNumero2:0
    })
  }


  render(){
    return(
      <Container>
        <h1>Calculadora</h1>
        <Paragrafo>{this.state.showNumero1} {this.state.metodo} {this.state.showNumero2} = {this.state.resultado}</Paragrafo>
        <Inputs>
        <Escreva value={this.state.numero1} onChange={this.handleChange} type="number" />
        <Escreva value={this.state.numero2} onChange={this.handleChange1} type="number" />
        </Inputs>
        <Butoes>
          <button onClick={this.somar}>Somar</button>
          <button onClick={this.subtrair}>Diminuir</button>
          <button onClick={this.multiplicacao}>Multiplicar</button>
          <button onClick={this.dividir}>Dividir</button>
        </Butoes>
        <Limpar onClick={this.limpar}>Limpar</Limpar>
      </Container>
    )
  }
}