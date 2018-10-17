import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    aadhar:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*')]],
    pan:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
    address1: [''],
    address2: [''],
    city:[''],
    state:[''],
    zip:['',[,Validators.minLength(6),Validators.maxLength(6)]] 
   
  });

  get f() { return this.profileForm.controls; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    
    if (this.profileForm.invalid) {
      return;
    }
    console.warn(JSON.stringify(this.profileForm.value));
  
    
  }

}
