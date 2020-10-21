export class Integrante{
    constructor(
        public username: String,
        public email:String,
        public nombres: String,
        public apellidos: String,
        public password: String,
        public usuario_activo: Boolean,
        public activo?: Boolean,
        public imgUser?: String,
        public rol?: String,
        public scoreActivity?:String,
        public id?: string,
    ){
        

    }
}