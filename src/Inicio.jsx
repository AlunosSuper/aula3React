import { Titulo } from "./componentes/Titulo"
import { Campo } from "./componentes/Campo"
import { Conteudo } from "./componentes/Conteudo"
import { Entrada } from "./componentes/Entrada"
import { useState } from "react"


export function Inicio() {
  const [lista, definirLista] = useState([])

    // Função chamada quando o form é enviado
  function Adicionar(evento) {
    const valor = evento.target.conteudo.value
    definirLista([...lista, valor]) // Adiciona o novo valor à lista
    evento.preventDefault() // não recarrega a página!
  }


  return (
    <>
      <Titulo nome="Velejando com o React" />

      <Campo id="1">
        <form onSubmit={Adicionar}>
          <Entrada />
        </form>
      </Campo>

      <Campo id="2">
        {
          lista.map(function(item) {
            return (
              <Conteudo
                key={item}
                texto={item}
              />
            )
          })
        }
      </Campo>
      


    </>
  )
}