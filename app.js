const { getTabla, listarTabla } = require('./logica/multiplicar.js');
const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((tabla) => {
                console.log(tabla);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    case 'crear':
        getTabla(argv.base, argv.limite)
            .then((tabla) => {
                console.log(tabla);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}