require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { 
    inquirerMenu, 
    pausa,
    leerInput
} = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// console.clear();

const main = async () => {
    let opt = '';
    //crear instancia
    const tareas = new Tareas();

    do{
        //imprimir menu
        opt = await inquirerMenu(); 
        // opt = await mostrarMenu();
        //   console.log({ opt });
        //  const tareas = new Tareas("Comprar comida");
        //  const tarea = new Tarea("Comprar comida");
        //  tareas._listado[tarea.id] = tarea;
        //  console.log(tareas);
        
        // crear un switch del menu
        switch(opt){
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion:');
                // console.log(desc);
                tareas.crearTarea(desc);
            break;
            case '2':
                // Listado
                // console.log(tareas._listado);
                // Imprimir el listadoarreglo
                console.log(tareas.listadoArr);
            break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
        // if( opt !== '0') await pausa();
    }while( opt !== '0' ) ;

}
main();