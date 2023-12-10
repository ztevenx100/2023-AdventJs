/* Reto #03: El elfo travieso */
/*
  En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
  Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
  Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
  if (original.length === modified.length)return '';

  const interator = modified.length>original.length ? modified : original ;
  
  for (let index = 0; index < interator.length; index++) {
    if (original[index] !== modified[index]) return interator[index];
  }
  return ''
}

function findNaughtyStep(original, modified) {
  //if(!original || !modified ) return '';
  if( typeof original !== 'string'  || typeof modified  !== 'string' ) return '';
  if (original.length === modified.length)return '';

  const count = Math.max(original.length, modified.length);
  
  for (let index = 0; index < count; index++) {
    if (original[index] !== modified[index]) {
      return (modified.length>original.length)? modified[index] : original [index];
    }
  }

  return ''
}

function findNaughtyStep(original, modified) {
  if(!original || !modified ) return '';
  if( typeof original !== 'string'  || typeof modified  !== 'string' ) return '';

  const originalSteps = original.split('');
  const modifiedSteps = modified.split('');


 // Verificar si algún paso fue añadido
  for (const step of modifiedSteps) {
    if (!originalSteps.includes(step)) {
      return step;
    }
  }

 // Verificar si algún paso fue eliminado
  for (const step of originalSteps) {
    if (!modifiedSteps.includes(step)) {
      return step;
    }
  }
  return ''
}

function findNaughtyStep(original, modified) {
  const originalSteps = original.split('');
  const modifiedSteps = modified.split('');
  let chars = ''

 // Verificar si algún paso fue añadido
  for (const step of modifiedSteps) {
    if (!originalSteps.includes(step)) {
      chars = chars + step;
    }
  }

 // Verificar si algún paso fue eliminado
  for (const step of originalSteps) {
    if (!modifiedSteps.includes(step)) {
      chars = chars + step;
    }
  }
  return chars;
}

//---------------------------------------

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

original = 'stepfor'
modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

original = 'abcde'
modified = 'abcde'
findNaughtyStep(original, modified) // ''
