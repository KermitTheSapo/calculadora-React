// Você deve criar as funções de cada button para disparar a operação no click
// Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
// Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)

import React, {Component} from "react"
import styled from "styled-components"

const Container = styled.div`
  font-size: 12px;
  border: solid;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`

const Butoes = styled.div `
  display: flex;
`

const Paragrafo = styled.p `
  font-size: 12px;
`

export default class Calculadora extends Component{

  state= {
    numero1: 0,
    numero2: 0,
    resultado: 0,
    metodo: "+",
  }

  handleChange = (event) => {
    this.setState({
      numero1: Number(event.target.value)
    })
  }

  handleChange1 = (event) => {
    this.setState({
      numero2: Number(event.target.value)
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
      resultado: 0,
      numero1: 0,
      numero2: 0,
    })
  }


  render(){
    return(
      <Container>
        <h1>Calculadora</h1>
        <Paragrafo>{this.state.numero1} {this.state.metodo} {this.state.numero2} = {this.state.resultado}</Paragrafo>
        <input onChange={this.handleChange} type="number" />
        <input onChange={this.handleChange1} type="number" />
        <Butoes>
          <button onClick={this.somar}>Somar</button>
          <button onClick={this.subtrair}>Diminuir</button>
          <button onClick={this.multiplicacao}>Multiplicar</button>
          <button onClick={this.dividir}>Dividir</button>
        </Butoes>
        <button onClick={this.limpar}>Limpar</button>
      </Container>
    )
  }
}