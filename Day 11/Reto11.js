/* Reto #11: Los elfos estudiosos */
/*
  En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.
  Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
  Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:
  Si ya es un palíndromo, un array vacío.
  Si no es posible, null.
  Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
  Por ejemplo:
*/

function getIndexsForPalindrome(word) {
  let res = null
  for (const a of Array.from({ length: word.length }).keys()) {
    for (const b of Array.from({ length: word.length }).keys()) {
      let swapped = [...word]
      let aux = word[a]
      swapped[a] = word[b]
      swapped[b] = aux

      let left = swapped.slice(0, Math.floor(word.length / 2)).join("")
      let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join("")

      res = [
        [
          null
          , [
            []
            , [a, b]
          ][+((a + b) > 0)]
        ][+(left == right)]
        , res
      ][+!!res]
    }
  }
  return res
}

//---------------------------------------

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null

/*
  Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.
*/