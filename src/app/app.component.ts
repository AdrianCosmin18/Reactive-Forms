import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator, forbiddenNameValidator2} from "./shared/user-name.validator";
import {passwordValidator} from "./shared/password.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Cosmin'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  public get userName() {
    return this.registrationForm.get('userName');
  }


  constructor(private formBuilder: FormBuilder) {}

  //form builder-ul este un altfel de mod de a crea form grups/control
  public registrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator2(/password/), forbiddenNameValidator]],
    password: [''],
    confirmPassword: [""],
    address: this.formBuilder.group({
      city: [""],
      state: [""],
      postalCode: ['']
    }, {validator: passwordValidator})
  })

  loadApiData(){
    this.registrationForm.setValue({// completam total fromul
      userName: "Bruce",
      password: "test",
      confirmPassword: "test",
      address: {
        city: "Gotham",
        state: "Gotham",
        postalCode: '123456'
      }
    });
  }

  loadApiData2(){
    this.registrationForm.patchValue({// completam partial formul
      userName: "Bruce",
      password: "test",
      confirmPassword: "test",
    });
  }
}
