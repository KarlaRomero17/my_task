const Tarea = require("./tarea");


class Tareas{

    _listado = {};
    //crear un get de listado en un arreglo (solo para obtener el listado) 
    get listadoArr(){
        const listado = [];
        //recorrer el listado del objeto _listado
        Object.keys(this._listado).forEach( key => {
            //obtener el listado
            const tarea = this._listado[key];
            //agregar al listado 
            listado.push(tarea);
        });
        return listado;
    }

    constructor() {
        //inicializar el listado
        this._listado = {};
    }
    
    //crear la tarea
    crearTarea(desc = ''){
        //instancia de la tarea
        const tarea = new Tarea(desc);
        //agregar tarea al listado
        this._listado[tarea.id] = tarea;
    }

}
module.exports = Tareas;