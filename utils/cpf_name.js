const { generate, validate } = require('gerador-validador-cpf')

const cpfName = () => {
  var cpf = generate({ format: true})
  var cpfAndName = cpf + ' - William Pereira'
  return cpfAndName
} 


exports.cpfName = cpfName