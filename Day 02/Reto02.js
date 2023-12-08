/* Reto #02: Ponemos en marcha la fabrica */
/*
  En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
  Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
  Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
  const frecuenciaMateriales = {};
  
  for (const material of materials) {
    frecuenciaMateriales[material] = (frecuenciaMateriales[material] || 0) + 1;
  }

  const giftsFabricados = gifts.filter(gift => {
    const frecuenciaMaterialesNecesarios = {};

    for (const material of gift) {
      frecuenciaMaterialesNecesarios[material] = (frecuenciaMaterialesNecesarios[material] || 0) + 1;
    }

    for (const material in frecuenciaMaterialesNecesarios) {
      if (!frecuenciaMateriales[material] || frecuenciaMateriales[material] < 1) {
        return false;
      }
    }

    return true;
  });

  return giftsFabricados;
}

//---------------------------------------

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []
