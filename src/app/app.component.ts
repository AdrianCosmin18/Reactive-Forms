import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('Cosmin'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  title = 'reactive-forms';

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
