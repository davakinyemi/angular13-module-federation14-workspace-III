import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

export interface SigninFormValues {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signinForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.email, Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.signinForm.value).subscribe((res: any) => {
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
