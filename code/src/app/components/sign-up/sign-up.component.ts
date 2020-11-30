import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../model/models';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/constants";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  uType = 'customer';
  uEmail: string;
  uPassword: string;
  uPasswordAgain: string;
  uName: string;
  pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$";
  // signUpForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // this.createForm();
  }

  // private createForm() {
  //   this.signUpForm = new FormGroup({
  //       email: new FormControl(this.uEmail, [Validators.email, Validators.required]),
  //       password: new FormControl(this.uPassword, Validators.compose([Validators.minLength(6),
  //         Validators.maxLength(15),
  //         Validators.required])),
  //         // CustomValidators.patternValidator(/\d/, {hasNumber: true}),
  //         // CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
  //         // CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
  //         // CustomValidators.patternValidator(/[~!@#$%^&*()-+.,;:"'?]/, {hasSpecialCharacters: true})])
  //       confirmPassword: new FormControl(this.uPasswordAgain, Validators.required),
  //       name: new FormControl(this.uName, Validators.compose([Validators.required]))
  //     });
  // }

  public signUpWithEmail(): void {
    const user: UserModel = {
      uId: 'temp',
      uEmail: this.uEmail,
      uName: this.uName,
      uProPic: this.uType === 'customer' ? 'assets/images/customer-pro.png' : this.uType === 'manager' ? 'assets/images/manager-pro.png' : 'assets/images/admin-pro.png',
      uType: this.uType
    };

    this.userService.signUpWithEmail(user, this.uPassword);

  }

}
