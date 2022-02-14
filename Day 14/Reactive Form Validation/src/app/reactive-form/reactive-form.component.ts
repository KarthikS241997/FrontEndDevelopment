import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  login!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'fname': new FormControl('',[Validators.required,Validators.minLength(4)]),
      'lname':new FormControl(''),
      'age':new FormControl(''),
      'address':new FormGroup({
        'street': new FormControl(''),
        'state':new FormControl('')
      })
    });
  }
  onsubmit(){
    console.log(this.login.value);
  }
  get f():any{
return this.login.get('fname');
  }

}
