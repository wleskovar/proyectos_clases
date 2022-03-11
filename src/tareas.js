// Se definen todos los metodos a utilizar para resolver la consigna

const fs= require('fs');
const tareas= {
    archivo: (archivo_nombre) => {archivo= archivo_nombre},

    imprimir_listado: function() {
        listado= this.leer_json();
        listado.forEach(tarea => {
           console.log(`${tarea.titulo} ' - ' ${tarea.estado}`);
       });  
    },

    leer_json: function() { return JSON.parse(fs.readFileSync(`src/${archivo}.json`, 'utf-8',
                                err => (err)? console.log('ERROR al grabar archivo JSON'): ''))},

    escribir_json: function(lista) {
         let lista_json= JSON.stringify(lista);
         this.grabar_json(lista_json); 
    }, 
           
    grabar_json: (lista_json) => fs.writeFileSync(`src/${archivo}.json`,lista_json, 
                                                    err => (err)? console.log('ERROR al grabar archivo JSON'): ''),
                                                    
    guardar_tarea: function(obj_tarea) {
        let lista_tareas = this.leer_json();
        lista_tareas.push(obj_tarea);
        this.escribir_json(lista_tareas);
    },

    leerPorEstados: function(estado) {
        let listado= this.leer_json();
        return listado.filter( (tarea) => tarea.estado == estado);
    },

    filtrarPorEstado: function(estado) {
        let listado_filtrado= this.leerPorEstados(estado);
        listado_filtrado.forEach(tarea => {
            console.log(`${tarea.titulo} ' - ' ${tarea.estado}`);
        }); 

    }
}

module.exports= tareas;

