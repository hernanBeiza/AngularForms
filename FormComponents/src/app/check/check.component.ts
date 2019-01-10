import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-check',
	templateUrl: './check.component.html',
	styleUrls: ['./check.component.css'],
	providers: [
	    {
	      provide: NG_VALUE_ACCESSOR,
	      useExisting: forwardRef(() => CheckComponent),
	      multi: true
	    }
	]
})
export class CheckComponent implements OnInit, ControlValueAccessor {

	@Input() data: any;

	// Allow the input to be disabled, and when it is make it somewhat transparent.
	@Input() disabled = false;
	/*	
	@HostBinding('style.opacity')
	get opacity() {
		return this.disabled ? 0.25 : 1;
	}
	*/

	// Function to call when the value changes.
	onChange = (value: number) => {
		//console.log(value);
	};

	// Function to call when the input is touched (when is clicked).
	onTouched = () => {
		//console.log(this.data);
	};

	get value(): number {
		//console.log(this.data);
		return this.data.seleccionado;
	}

	// Allows Angular to update the model (rating).
	// Update the model and changes needed for the view here.
	writeValue(value: number): void {
		//console.log(value);
		this.data.seleccionado = value;
		//console.log(this.data.id,this.data.respuesta);
		//this.stars = this.stars.map((_, i) => rating > i);
		this.onChange(this.data.seleccionado)
	}

	// Allows Angular to register a function to call when the model (rating) changes.
	// Save the function as a property to call later here.
	registerOnChange(fn: (value: number) => void): void {
		this.onChange = fn;
	}

	// Allows Angular to register a function to call when the input has been touched.
	// Save the function as a property to call later here.
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	// Allows Angular to disable the input.
	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}


	constructor() { }

	ngOnInit() {
		//console.log(this.data);
	}

}