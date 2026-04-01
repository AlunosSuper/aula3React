import styled from "styled-components"

const ModeloEntrada = styled.input`
  background: white;
  border: none;
  height: 42px;
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
`

export function Entrada() {
  return (
    <ModeloEntrada
      type="text"
      placeholder="Digite um novo conteúdo"
      name="conteudo"
    />
  )
}
