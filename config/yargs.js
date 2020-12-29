const { help } = require('yargs');
const generalOptions = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};
const argv = require('yargs')
    .command('listar', 'Lista una tabla de multiplicar', generalOptions)
    .command('crear', 'Crea un archivo couyo contenido es una tabla de multiplicar', generalOptions)
    .help()
    .argv;

module.exports = {
    argv
};