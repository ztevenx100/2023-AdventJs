/* Reto #18: El reloj digital */
/*
  En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.
  La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.
  Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).
  Por ejemplo, si la función recibe 01:30 debe devolver:
*/
function drawClock(time) {
  const result = [[],[],[],[],[],[],[]]
  const NUMBERS = {
    '0': 0b111101101101101101111,
    '1': 0b100100100100100100100,
    '2': 0b111001001111100100111,
    '3': 0b111100100111100100111,
    '4': 0b100100100111101101101,
    '5': 0b111100100111001001111,
    '6': 0b111101101111001001111,
    '7': 0b100100100100100100111,
    '8': 0b111101101111101101111,
    '9': 0b111100100111101101111
  }
  const SIGNS = [' ', '*']
  const SBITS = 0b0010100
  const NBITS0 = NUMBERS[time[0]]
  const NBITS1 = NUMBERS[time[1]]
  const NBITS3 = NUMBERS[time[3]]
  const NBITS4 = NUMBERS[time[4]]
  for (const i of result.keys()) {
    const mov0 = i * 3
    const mov1 = (mov0 + 1)
    const mov2 = (mov0 + 2)
    result[i].push(
      SIGNS[NBITS0 >>> mov0 & 1],
      SIGNS[NBITS0 >>> mov1 & 1],
      SIGNS[NBITS0 >>> mov2 & 1],
      ' ',
      SIGNS[NBITS1 >>> mov0 & 1],
      SIGNS[NBITS1 >>> mov1 & 1],
      SIGNS[NBITS1 >>> mov2 & 1],
      ' ',
      SIGNS[SBITS >>> i & 1],
      ' ',
      SIGNS[NBITS3 >>> mov0 & 1],
      SIGNS[NBITS3 >>> mov1 & 1],
      SIGNS[NBITS3 >>> mov2 & 1],
      ' ',
      SIGNS[NBITS4 >>> mov0 & 1],
      SIGNS[NBITS4 >>> mov1 & 1],
      SIGNS[NBITS4 >>> mov2 & 1]
    )
  }
  return result
}

//


function drawClock(time) {
  const NUMBERS = {
    '0': 0b111101101101101101111,
    '1': 0b100100100100100100100,
    '2': 0b111001001111100100111,
    '3': 0b111100100111100100111,
    '4': 0b100100100111101101101,
    '5': 0b111100100111001001111,
    '6': 0b111101101111001001111,
    '7': 0b100100100100100100111,
    '8': 0b111101101111101101111,
    '9': 0b111100100111101101111,
    ':': 0b0010100
  }
  const SIGNS = [' ', '*']
  const timeSplit = time.split(':')
  const result = [[], [], [], [], [], [], []]
  for (const [i, row] of result.entries()) {
    for (const num of timeSplit[0]) {
      const numberBits = NUMBERS[num]
      row.push(SIGNS[numberBits >>> (i * 3 + 0) & 1])
      row.push(SIGNS[numberBits >>> (i * 3 + 1) & 1])
      row.push(SIGNS[numberBits >>> (i * 3 + 2) & 1])
      row.push(' ')
    }
    row.push(SIGNS[NUMBERS[':'] >>> i & 1])
    for (const num of timeSplit[1]) {
      const numberBits = NUMBERS[num]
      row.push(' ')
      row.push(SIGNS[numberBits >>> (i * 3 + 0) & 1])
      row.push(SIGNS[numberBits >>> (i * 3 + 1) & 1])
      row.push(SIGNS[numberBits >>> (i * 3 + 2) & 1])
    }
  }
  return result
}


//---------------------------------------

drawClock('01:30') // ⬇️

[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]

/*
 Para saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ves, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nosotros lo representaremos con un asterisco (*), y los píxeles en blanco, con un espacio ():
 Representación de los dígitos para el reloj digital del 1 al 9, donde puedes ver lo que ocupa en píxeles cada número
*/
