import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  	public miForm:FormGroup;
	public ratingModel:number = 0;

	public ordenes = [
	    { id: 0, name: 'order 1' },
	    { id: 1, name: 'order 2' },
	    { id: 2, name: 'order 3' },
	    { id: 3, name: 'order 4' }
	];

	constructor(private fb:FormBuilder){
		const controls = this.ordenes.map(c => new FormControl(false));
		controls[0].setValue(true);

		const ratingControl = new FormControl(1,Validators.compose([this.minSelected(1)]));

		this.miForm = this.fb.group({
			'rating': ratingControl,
			orders: new FormArray(controls, this.minSelectedCheckboxes(1))
		});

	}

	public minSelectedCheckboxes(min = 1) {
		console.log("ahora");
		const validator: ValidatorFn = (formArray: FormArray) => {
	    	const totalSelected = formArray.controls
			.map(control => control.value)
			.reduce((prev, next) => next ? prev + next : prev, 0);
			return totalSelected >= min ? null : { required: true };
		};

		return validator;
	}

	public minSelected(minimum):any {
		//console.log("minSelected");
		return function(input:FormControl) {
			return input.value >= minimum ? null : { required: true };
	  	};
	}

	public onSubmit(values:Object):void {
		console.log(values);
		console.log(this.ratingModel);
		console.log(this.miForm.valid);
	}


}
