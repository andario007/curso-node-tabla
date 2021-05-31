const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'la tabla a calcular --base=5 ejemplo'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta cuando quiero ver la tabla'
    })    
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'permite listar la tabla de multiplicar'
    })
    .check((argv, options) => {
        //  console.log('yargs',argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)) {
            throw 'hasta tiene que ser un numero';
        }        
        return true;
    })
    .argv;

module.exports = argv;