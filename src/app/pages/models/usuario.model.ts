export class Usuario {

    constructor (

        
        public correo: string,
        public pass:string
        ){}


}

export class UsuarioRegistro{

    constructor(
     
        public nombre: string,
        public apellidos: string,
        public correo: string,
        public pass: string,
        public tipoDeSangre: string,
        public peso: string,
        public mayorDeEdad: string,
        public tipoDeDonador: string,

    ){}

}
export class Publicaciones{
    constructor(
     
        public nombrePaciente: string,
        public apellidoPaciente: string,
        public idHospital: string,
        public estado: string,
        public ciudad: string,
        public fecha: string,
        public tipoDeSangre: string,
    ){}

}
export class Hospitales{
    constructor(
     
        public _id: number,
        public Nombre: string,
        public Domicilio: string,
        public Telefono: string,
    ){}

}
