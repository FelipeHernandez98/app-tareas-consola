const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const mensaje = [
    {
        type: 'input',
        name: 'mensaje',
        message: `Prsione ${'ENTER'.green} para continuar`
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('= Seleccione una opcion ='.green)
    console.log('=========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async()=>{
    console.log('\n');
    await inquirer.prompt(mensaje);
};


module.exports = {
    inquirerMenu,
    pausa
}