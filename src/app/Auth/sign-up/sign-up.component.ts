import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor(private router: Router ) { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "phonenumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    });
  }
  submitData()
  {
      console.log(this.registerForm.value);
      
      if(this.registerForm.valid)
     {
       alert(`Created Successfully ${this.registerForm.value.name}`);
       this.registerForm.reset();
     }

  }
    get name() { return this.registerForm.get('name');}
    get phonenumber() { return this.registerForm.get('phonenumber'); }
    get password() { return this.registerForm.get('password'); }
    get email() { return this.registerForm.get('email'); }
  

 login() {
   this.router.navigate(['login']);
 }
    
}
