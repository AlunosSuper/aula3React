// 1. O Array original (Dados)
const animais = ["Galinha", "Porco,", "Vaca", "Cavalo"]

export function Teste() {
  return (
    <div>
      {/* 2. A Transformação ocorre dentro das chaves {} */}
      {animais.map(function(animal) {
        return <h1 key={animal}>{animal}</h1> 
      })}
    </div>
  )
}