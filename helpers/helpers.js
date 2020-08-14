/**
 * Usada para validar la entrada de datos y lanzar un error 422 en caso de que no pase la validacion
 * @param error Es el parametro obtenido de validationResult
 * @returns void
 * @throws Lanza un error
 */


module.exports.checkValidationResults = errors => {
    
    if(!errors.isEmpty()){
        const error = new Error('Invalid input');
        error.statusCode = 422;
        error.message = errors.array()[0].msg;
        error.data = errors.array();
        throw error;
    }    
}

/**
 * Usado para verificar si el objeto pasado es un objeto valido, en ese caso se lanza un error.
 * @param existe Objeto que ha sido buscado previamente en base de datos.
 * @param pesimisticMsg Mensaje que se debe enviar al front en caso de error
 * @throws Lanza un error en caso de que el parametro "existe" sea un objeto valido
 */

module.exports.checkIfExist = (existe, pesimisticMsg) => {
    if(existe){
        const err = new Error('Already exists');
        err.statusCode = 409;
        err.message = pesimisticMsg;
        throw err;
    }
}

/**
 * Usado para generar cadenas de caracteres de manera aleatoria
 */

module.exports.getRandomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}