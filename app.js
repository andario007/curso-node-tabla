const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//console.log(argv);

let base= argv.base;
let hasta= argv.hasta;
let listar=argv.listar

crearArchivo(base,hasta,listar)
.then( res=>console.log(res))
.catch( err => console.log(err));

