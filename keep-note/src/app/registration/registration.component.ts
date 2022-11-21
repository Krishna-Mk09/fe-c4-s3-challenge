import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm = this.fb.group({
    firstName:['', [Validators.required]],
    lastName:['', [Validators.required, Validators.minLength(3)]],
    emailId:['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['', [Validators.required]],
    confirmPassword:['', [Validators.required, this.confirmPasswordValidation]],
    gender:['', [Validators.required]],
    age:['', [Validators.required, this.ageValidation]],
    phoneNumber:['', [Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]],
    address: this.fb.group({
      street:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['', [Validators.required]],
      zipCode:['', [Validators.required, Validators.pattern("[0-9]{5}")]]
    }),
  })

  func1(){
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {​
      duration: 5000,​
       panelClass: ['mat-toolbar', 'mat-primary']​
     }
    ) 
  }

  passwordValidation(control:AbstractControl){

  }

  confirmPasswordValidation (group: FormGroup) { // here we have the 'passwords' group
    // const password = group.get('password').value;
    // const confirmPassword = group.get('confirmPassword').value;
  
    // return password === confirmPassword ? null : { notSame: true }     
  }

  ageValidation(control:AbstractControl){
    if((control.value)<18){
      return {ageError:true};
  
    }else{
      return null
  
    }
  }

  resetFunction(){
    this.registrationForm.reset();
    
  }

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

}

