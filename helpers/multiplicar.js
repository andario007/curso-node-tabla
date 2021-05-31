const fs = require('fs');
const colors= require('colors');

const crearArchivo = async(base = 1, hasta=10,listar=false) => {
    try {

    
        let salida = '';
        let salida2='';
        for (let i = 1; i <= hasta; i++) {
            salida2 += ` ${base} ${'X'.green} ${i} ${'='.green} ${ base * i}\n`;
            salida += ` ${base} X ${i} = ${ base * i}\n`;
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar){
            console.log('====================='.green);
            console.log('Tabla del:'.green, colors.yellow(base));  
            console.log('====================='.green);            
            console.log(salida2);
        }        
        return `= Tabla del: ${base} creada`;
    } catch (err) {
        throw err;
    }

}

module.exports ={
    crearArchivo
}