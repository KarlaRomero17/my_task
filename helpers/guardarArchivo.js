const fs = require('fs');

//CREAR UN archivo JSON y guardra todas las tareas
const guardarDB = (data) => {
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
    // fs.writeFileSync(archivo, data);

}


module.exports = {
    guardarDB
}