import styled from "styled-components"

const ModeloTitulo = styled.div`
  background: linear-gradient(45deg, #cb356b, #bd3f32);
  color: white;
  padding: 32px;
`

const TituloNome = styled.div`
  font-size: 2rem;    /* 2rem → 2 vezes o tamanho da fonte padrão (16px), ou seja, 32px */
  margin-top: 96px;
`

const TituloData = styled.div`
  font-size: 1.2rem;   /* 1.2rem → 1.2 vezes o tamanho da fonte padrão (16px), ou seja, 19.2px */
  margin-top: 8px;
  
`
// Pega a data e hora exata de agora
const dataHoje = new Date()

// Define as regras de como a data vai aparecer:
const dataFormato = {
  weekday: "long", // - weekday: "long" → dia da semana por extenso (ex: "sexta-feira")
  day: "numeric",  // - day: "numeric"  → dia do mês em número (ex: "10")
  month: "long"   // - month: "long"   → mês por extenso (ex: "janeiro")
}

// Converte a data para texto legível em português do Brasil
// usando as regras que definimos acima
// resultado: "sexta-feira, 10 de janeiro"
const dataFinal = dataHoje.toLocaleDateString("pt-br", dataFormato)

export function Titulo({ nome }) {
  return <ModeloTitulo>
    <TituloNome>{ nome }</TituloNome>
    <TituloData>{ dataFinal }</TituloData>
  </ModeloTitulo>
}

