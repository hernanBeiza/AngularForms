import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from './Models/Usuario';
import { Hora } from './Models/Hora';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	loginForm: FormGroup;

	public usuario:Usuario = new Usuario();
	public horas:Array<Hora>;

	submitted = false;


	formErrors = {
		'usuario': '',
		'contrasena': '',
		'horas': '',
	};

	validationMessages = {
		'usuario': {
			'required': 	'Usuario es obligatorio.',
			'minlength': 	'Usuario debe ser de al menos 4 carácteres de largo.',
			'maxlength':    'Usuario no puede ser de más de 24 carácteres de largo.'
		},
		'contrasena': {
	  		'required': 	'Contraseña es obligatorio.'
		},
		'horas': {
	  		'required': 	'Tiempo de actividad es obligatorio.'
		}
	};

	constructor(private fb: FormBuilder) {
		this.horas = new Array<Hora>(new Hora(1,"10 minutos"),new Hora(2,"20 minutos"));
	}

	public ngOnInit(){
		console.log("ngOnInit();");
		//console.log(this.preguntas);
		this.usuario = new Usuario();

	    this.loginForm = this.fb.group({
			'usuario': 		[this.usuario.usuario, [Validators.required,Validators.minLength(4),Validators.maxLength(24)]],
			'contrasena':	[this.usuario.contrasena, [Validators.required]],
			'horas':		[this.usuario.hora, [Validators.required]]
		});

	    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
	    this.onValueChanged(); // (re)set validation messages now
  	}

	public onSubmit(values:Object) { 
		console.log(values);
		this.submitted = true;   		
  		//this.usuario = this.loginForm.value;
  		//console.log(this.usuario.toString());
	}

	public resetearme(): void {
		this.loginForm.reset();
		this.usuario = new Usuario();
	}	

	public onValueChanged(data?: any) {
		
		console.log(this.usuario);

		if (!this.loginForm) { return; }
		const form = this.loginForm;
		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	
}
