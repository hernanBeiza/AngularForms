import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'RatingControlValue';

	public miForm:FormGroup;
	public ratingModel:number = 0;

	constructor(private fb:FormBuilder){
		const ratingControl = new FormControl(1,Validators.compose([this.minSelected(1)]));
		this.miForm = this.fb.group({
			'rating': ratingControl
		});
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
