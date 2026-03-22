import styled from "styled-components"
import { useState } from "react"

const ModeloConteudo = styled.div`
  background: ${({ $estado }) => $estado ? 'white' : '#eee'};
  margin-bottom: 16px;
  padding: 16px;
  text-align: center;
  text-decoration: ${({ $estado }) => $estado ? 'line-through' : 'none'};
  cursor: pointer;
  `

export function Conteudo({ texto }) {

  // Estado: começa como false (não feito)
  const [ feito, definirFeito ] = useState(false)

  // Função que Alterna o estado 'feito' entre true e false.
  function Alternar() {
    definirFeito((prev) => !prev);  // inverte: se prev for true vira false, e vice-versa
  }

  return (

    <ModeloConteudo onClick={Alternar} $estado={feito}>
      {texto}
    </ModeloConteudo>
  )
}