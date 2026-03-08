import styled from "styled-components"

const ModeloCampo = styled.div`
  background: white;
  margin: 32px 0;
  padding: 16px;
`

export function Campo({ children }) {
  return (
    <ModeloCampo>
      {children}
    </ModeloCampo>
  )
}
