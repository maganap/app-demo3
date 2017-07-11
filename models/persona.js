/* 
 * Modelo de datos de Ejemplo
 * @author Javier Arpa
*/

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var personaSchema = new Schema({  
  nombre   : {type: String}, // Nombre
  apellido : {type: String}, // Apellido
  edad     : {type:String},  // Edad
  cDate    : {type: Date,    // fecha de creación
           default: Date.now} 
});


personaSchema.statics.hello = function(args){
  return "Hello men";
};

module.exports = personaSchema; 