import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

export interface SignupFormValues {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.email, Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      const busEvent = new CustomEvent('app-event-bus', {
        bubbles: true,
        detail: {
          eventType: 'auth-confirm'
        }
      });
      dispatchEvent(busEvent);
    });
  }

}
