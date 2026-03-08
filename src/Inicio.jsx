import { Titulo } from "./componentes/Titulo"
import { Campo } from "./componentes/Campo"
import { Conteudo } from "./componentes/Conteudo"

export function Inicio() {
  return (
    <>
      <Titulo nome="Velejando com o React" />

      <Campo id="1">
        <Conteudo texto="Estudar React"/>
      </Campo>

      <Campo id="2">
        <Conteudo texto="Tirar o lixo"/>
        <Conteudo texto="Lavar a louça"/>
      </Campo>
    </>
  )
}
