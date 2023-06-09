const inquirer = require('inquirer');
require('colors');
//opciones del menu
const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [

            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {
    // console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('=============================\n'.green);
    // const opt = await inquirer.prompt(preguntas);
    //se destrucutra para obtener el option
    const { option } = await inquirer.prompt(preguntas);
    return option;
}
// hacer una pausa y continuar
const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
};

//leer input del usuario
const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate (value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                } 
                return true;
            }
        } 
    ];
    //se hace una desctructuracion para obtener el desc
    const {desc} = await inquirer.prompt(question);//esto retorna un objeto
    return desc;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}
