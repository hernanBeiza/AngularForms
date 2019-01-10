export class Usuario {
	public id: number;
	public usuario: string;
	public contrasena: string;
	public hora: string;

	constructor(id?:number,usuario?:string,contrasena?:string,hora?:string){
		this.id = id;
		this.usuario = usuario;
		this.contrasena = contrasena;
		this.hora = hora;
	}

	public toString(): string {
		return this.id+ " " + this.usuario + " " + this.contrasena + " " + this.hora;
	}

}


