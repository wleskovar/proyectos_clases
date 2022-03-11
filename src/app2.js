// Punto 1:
// usar forEach

// Punto 2:
// funcion escribir_json y grabar_json
// admitir nuevo argumento, -crear tarea (se ejecutaran escribir_json, grabar_json)

// 1. detro de tareas.js:
// - funcion escribir_json(array) => pasa el array a string en formato JSON y guarda en tareas.json
// para guardar grabar_json -usar writeFileSync de FS

// 2. dentro de tareas.js:
// - funcion guardarTarea(objetoTarea) => guardar en tareas.json
// pasos:
// leer_json(tareas.json) 
// agregar la nueva tarea al array de tareas
// escribir_json
//
// Ingreso nueva tarea
// Argumentos a continuacion del argumento crear "titulo_tarea"
// app.js debe poder procesar crear - incluir en el swicht
// dentro del case crear: declarar un objeto literal con las propiedades titilo: "el ingresado" , estado: "pendiente"
// Guardamos esta nueva tarea con los metodos ya creado. - grabar_json() 
//
// Punto 3:
// Definir en tareas.js el metodo (funcion) filtrarPorEstado(), filtra por tareas y muestra por consola
// pasos:
// en tareas.js crear el metodo leerPorEstados(estado) - traemos del archivo tareas.json todas las tareas - leer_json() retorna un array
// filtrar tareas por estado recibido como parametro - usar FILTER
// en app.js - incorporamos a funcionalidad "filtrar" + estado de la tarea como argumentos
// mostrar el listado de tareas para el estado consultado por consola - usar el metodo forEach


const tareas= require('./tareas');

//inicializo en nombre del archivo JSON con el cual voy a trabajar (lectura y escritura)
tareas.archivo('tareas');
// tomo los argumentos de la linea de comandos
let argumentos = process.argv;

// proceso los argumentos
switch (argumentos[2]){
    case 'listar':
         tareas.imprimir_listado(); 
    break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
    break;
    case 'crear':
        // Tomo el argumento titulo de la tarea, su estado por default, creo un objeto literal y los agrego al archivo de tareas
        {
            if (argumentos.length == 4){
                let nueva_tarea= {
                    titulo: argumentos[3],
                    estado: 'pendiente',   
                }
                tareas.guardar_tarea(nueva_tarea);
            }else{
                console.log('Falta el segundo argumento nombre de la tarea');
            }
        }
    break;
    case 'filtrar':
        // Tomo de los argumentos el titulo de la tarea, su estado, creo un objeto literal y los agrego al archivo de tareas
        {
            if (argumentos.length == 4){
                tareas.filtrarPorEstado(argumentos[3]);
            }else{
                console.log('Falta el segundo argumento el estado por el cual quiere filtrar');
            }
        }
    break;

    default:
        console.log('No entiendo qué quire hacer');
}



