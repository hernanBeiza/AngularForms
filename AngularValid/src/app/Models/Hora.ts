export class Hora {
	public idhora: number;
	public nombre: string;

	constructor(idhora?:number,nombre?:string){
		this.idhora = idhora;
		this.nombre = nombre;
	}

	public toString(): string {
		return this.idhora+ " " + this.nombre;
	}

}


