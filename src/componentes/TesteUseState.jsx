// Importamos o useState do React.
// Ele permite criar uma variável especial que faz a tela atualizar quando o valor muda.
import { useState } from "react";

export function TesteUseState() {

  // Aqui criamos um estado chamado "contador".
  // - contador → é o valor atual (começa em 0)
  // - setContador → é a função que muda o valor do contador
  //
  // Sempre que chamamos setContador, o React atualiza a tela automaticamente.
  const [contador, setContador] = useState(0);

  return (
    <div>
      {/* Aqui mostramos o valor do contador na tela */}
      <p>Você clicou {contador} vezes</p>

      {/* Quando o botão é clicado, executamos setContador(contador + 1).
          Isso aumenta o contador em 1 e a tela se atualiza automaticamente. */}
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}
