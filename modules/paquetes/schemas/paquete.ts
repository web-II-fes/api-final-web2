import {Schema, model} from 'mongoose';

const schemaPaquete = new Schema({
    
    nombreRemitente: String,
    direccionRemitente: String,
    nombreDestinatario: String,
    direccionDestinatario: String,
    descripcionPaquete: String,
    fechaEntrega: Date

});

export let paqueteSchema = model('Paquete', schemaPaquete,'paquete');