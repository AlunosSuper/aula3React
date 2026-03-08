import styled from "styled-components"

const ModeloConteudo = styled.div`
  background: #eee;
  margin-bottom: 16px;
  padding: 16px;
  text-align: center;
`

export function Conteudo({ texto }) {
  return <ModeloConteudo>
    {texto}
  </ModeloConteudo>
}