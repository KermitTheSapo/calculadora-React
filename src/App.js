// Você deve criar as funções de cada button para disparar a operação no click
// Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
// Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)

import React, {Component} from "react"
import * as S from "./components/style.js"

export default class Calculadora extends Component{

  state= {
    numero1: "",
    numero2: "",
    resultado: 0,
    metodo: "+",
    showNumero1:0,
    showNumero2:0
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
      metodo: "x",
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
      <S.Container>
        <S.Titulo>Calculadora</S.Titulo>
        <S.Paragrafo>{this.state.showNumero1} {this.state.metodo} {this.state.showNumero2} = {this.state.resultado}</S.Paragrafo>
        <S.Inputs>
        <S.Escreva value={this.state.numero1} onChange={this.handleChange} type="number" />
        <S.Escreva value={this.state.numero2} onChange={this.handleChange1} type="number" />
        </S.Inputs>
        <S.Butoes>
          <button onClick={this.somar}>Somar</button>
          <button onClick={this.subtrair}>Diminuir</button>
          <button onClick={this.multiplicacao}>Multiplicar</button>
          <button onClick={this.dividir}>Dividir</button>
        </S.Butoes>
        <S.Limpar onClick={this.limpar}>Limpar</S.Limpar>
      </S.Container>
    )
  }
}