/* Reto #25: Calculando distancias */
/*
  Ya ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisar si pueden mejorar de cara al año que viene.
  Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.
  El mapa es una cadena de texto multi línea donde cada caracter representa una casilla. Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .
  Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.
*/

function travelDistance (map) {
  const positions = {}
  for (const [rowIndex, row] of map.split('\n').entries()) {
    for (const [colIndex, col] of row.replace('S', '0').split('').entries()) {
      if (/[\d|S]/.test(col)) {
        positions[col] = [rowIndex, colIndex]
      }
    }
  }
  let ans = 0
  for (const x of Object.keys(positions)) {
    if (x === '0') {
      continue
    }
    const [currentRow, currentCol] = positions[x]
    const [prevRow, prevCol] = positions[+x - 1]
    ans += Math.abs(currentRow - prevRow)
    ans += Math.abs(currentCol - prevCol)
  }
  return ans
}

function travelDistance(map) {
    const pos = {}
    let x = 0
    let distance = 0

for (let line of map.split('\n')) {
        for (let i of ["S", 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            line.includes(i) ? pos[i] = [x, line.indexOf(i)] : null
        }
        x++
    }

    pos[0] = pos["S"]

    for(let i = 0; i < Object.keys(pos).length - 2; i++) {
        distance += Math.abs(pos[i][0] - pos[i+1][0]) + 
            Math.abs(pos[i][1] - pos[i+1][1])
    }

    return distance
}



function travelDistance(map) {
  const roadmapArr = map.split('\n')
  const roadmap = roadmapArr.join('')
  const cols = roadmapArr[0].length
  const santaPos = roadmap.indexOf('S')

  let gift = 1
  let distance = 0
  let santaCol = santaPos % cols
  let santaRow = (santaPos / cols) | 0

  const numbers = roadmap.match(/\d/g)

  const rowValues = [0, 0]
  const colValues = [0, 0]

  for (const _number of numbers) {
    const giftPos = roadmap.indexOf(`${gift}`)
    const giftCol = giftPos % cols
    const giftRow = (giftPos / cols) | 0

    const row = santaRow - giftRow
    const col = santaCol - giftCol

    rowValues[0] = row
    rowValues[1] = -row
    colValues[0] = col
    colValues[1] = -col

    distance += rowValues[+(row < 0)] + colValues[+(col < 0)]

    santaCol = giftCol
    santaRow = giftRow

    gift++
  }

  return distance
}

//---------------------------------------

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2

/*
  Escribe una función travelDistance que reciba un mapa y devuelva la distancia total que ha recorrido Santa Claus según la posición de los niños.
  Ten en cuenta que:
  El mapa no tiene por qué ser cuadrado.
  El mapa siempre tendrá al menos un niño.
  El mapa siempre tendrá una posición inicial para Santa Claus.
  Los números de los niños nunca se repiten.
*/