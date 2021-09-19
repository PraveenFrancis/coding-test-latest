import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

// tslint:disable-next-line:max-line-length
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotPasswordFlag = false;
  error = '';
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private zone: NgZone,
 
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  /**
   * @description Function to get form controls
   */
  get userForm() { return this.loginForm.controls; }
  /**
   * @description Function to login
   */
   onSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('userName', this.loginForm.value.userName);
      localStorage.setItem('password',  this.loginForm.value.password);
      this.router.navigate(['./home'])
    }
   }
  // onSubmit(): void {
  //   this.submitted = true;
  //   this.toastr.dismissAllToastr();
  //   if (this.loginForm.valid) {
  //     this.ngxService.start();
  //     this.authService.login(this.loginForm.value.userName, this.loginForm.value.password)
  //       .then((res) => {
  //         if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //           this.commonService.getFromLocalStorage('propertyDetails').page === 'tasks') {
  //           this.router.navigate(['/home/propertyInEscrow/propertyDetails/tasks']);
  //         } else if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //           this.commonService.getFromLocalStorage('propertyDetails').page === 'documents') {
  //           this.router.navigate(['/home/propertyInEscrow/propertyDetails/documents']);
  //         } else if (sessionStorage.getItem('filename') === null) {
  //           this.router.navigate(['/home/propertyInEscrow']);
  //         } else if (localStorage.getItem('esign') === '/home/eSignDocuments') {
  //           this.router.navigate(['/home/eSignDocuments']);
  //         } else {
  //           this.router.navigate(['/home/sendDocument']);
  //         }
  //       })
  //       .catch((e) => {
  //         this.ngxService.stop();
  //         this.toastr.errorToastr(LoginError[e.code], 'Oops!', {
  //           position: 'bottom-right'
  //         });
  //       }
  //       );
  //   }
  // }
  // /**
  //  * @description Function to reset password
  //  * @param emalId email will send to the provided email addess
  //  */
  // // forgotPassword(emalId: any) {
  // //   this.submitted = true;
  // //   this.toastr.dismissAllToastr();
  // //   if (this.loginForm.value.userName.match(EMAIL)) {
  // //     this.ngxService.start();
  // //     this.authService.ForgotPassword(emalId)
  // //       .then(() => {
  // //         this.ngxService.stop();
  // //         this.toastr.infoToastr('Password reset email sent, check your inbox.', 'Info');
  // //       })
  // //       .catch((error) => {
  // //         this.ngxService.stop();
  // //         this.toastr.errorToastr(LoginError[error.code], 'Oops!');
  // //       });
  // //   }
  // // }
  // /**
  //  * @description Navigation to netsheet
  //  */
  // gotoNetSheet() {
  //   this.router.navigate(['/netSheet']);
  // }

  // /**
  //  * @description to hide and show the password in the password Field
  //  */
  // togglePassword(input: any) {
  //   this.showPassword = !this.showPassword;
  //   input.type = input.type === 'password' ? 'text' : 'password';
  // }
  // /**
  //  * @desc Function to sign in with google
  //  */
  // signInWithGoogle() {
  //   this.authService.signInWithGoogle()
  //     .then((userInfo) => {
  //       this.zone.run(() => {
  //         localStorage.setItem('oauthAccessToken', JSON.stringify(userInfo.credential));
  //         localStorage.setItem('user', JSON.stringify(userInfo.user));
  //         if (sessionStorage.getItem('filename') === null) {
  //           const userData = this.commonService.getFromLocalStorage('user');
  //           userData.providerData.forEach(user => {
  //             if (user.providerId === 'google.com') {
  //               this.googleSignIn = true;
  //             }
  //           });
  //           if (this.googleSignIn) {
  //             this.loginWithGoogle(
  //               success => {
  //                 if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'tasks') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/tasks']);
  //                 } else if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'documents') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/documents']);
  //                 } else if (localStorage.getItem('esign') === '/home/eSignDocuments') {
  //                   this.router.navigate(['/home/eSignDocuments']);
  //                 } else {
  //                   this.router.navigate(['/home/propertyInEscrow']);
  //                 }
  //               },
  //               error => {
  //                 console.log(error);
  //               }
  //             );
  //           }
  //         } else {
  //           this.router.navigate(['/home/sendDocument']);
  //         }
  //       });
  //     }).catch((error) => {
  //       this.ngxService.stop();
  //       // this.toastr.errorToastr(LoginError[error.code], 'Oops!', {
  //       //   position: 'bottom-right'
  //       // });
  //     });
  // }

  // signInWithMicrosoft() {
  //   this.authService.signInWithMicrosoft()
  //     .then((userInfo) => {
  //       this.zone.run(() => {
  //         localStorage.setItem('oauthAccessToken', JSON.stringify(userInfo.credential));
  //         localStorage.setItem('user', JSON.stringify(userInfo.user));
  //         if (sessionStorage.getItem('filename') === null) {
  //           const userData = this.commonService.getFromLocalStorage('user');
  //           userData.providerData.forEach(user => {
  //             if (user.providerId === 'microsoft.com') {
  //               this.googleSignIn = true;
  //             }
  //           });
  //           if (this.googleSignIn) {
  //             this.loginWithGoogle(
  //               success => {
  //                 if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'tasks') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/tasks']);
  //                 } else if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'documents') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/documents']);
  //                 } else if (localStorage.getItem('esign') === '/home/eSignDocuments') {
  //                   this.router.navigate(['/home/eSignDocuments']);
  //                 } else {
  //                   this.router.navigate(['/home/propertyInEscrow']);
  //                 }
  //               },
  //               error => {
  //                 console.log(error);
  //               }
  //             );
  //           }
  //         } else {
  //           this.router.navigate(['/home/sendDocument']);
  //         }
  //       });
  //     }).catch((error) => {
  //       this.ngxService.stop();
  //       // this.toastr.errorToastr(LoginError[error.code], 'Oops!', {
  //       //   position: 'bottom-right'
  //       // });
  //     });
  // }

  // signInWithFacebook() {
  //   this.authService.signInWithFacebook()
  //     .then((userInfo) => {
  //       this.zone.run(() => {
  //         localStorage.setItem('oauthAccessToken', JSON.stringify(userInfo.credential));
  //         localStorage.setItem('user', JSON.stringify(userInfo.user));
  //         if (sessionStorage.getItem('filename') === null) {
  //           const userData = this.commonService.getFromLocalStorage('user');
  //           userData.providerData.forEach(user => {
  //             if (user.providerId === 'facebook.com') {
  //               this.googleSignIn = true;
  //             }
  //           });
  //           if (this.googleSignIn) {
  //             this.loginWithGoogle(
  //               success => {
  //                 if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'tasks') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/tasks']);
  //                 } else if (this.commonService.getFromLocalStorage('propertyDetails') != null &&
  //                   this.commonService.getFromLocalStorage('propertyDetails').page === 'documents') {
  //                   this.router.navigate(['/home/propertyInEscrow/propertyDetails/documents']);
  //                 } else if (localStorage.getItem('esign') === '/home/eSignDocuments') {
  //                   this.router.navigate(['/home/eSignDocuments']);
  //                 } else {
  //                   this.router.navigate(['/home/propertyInEscrow']);
  //                 }
  //               },
  //               error => {
  //                 console.log(error);
  //               }
  //             );
  //           }
  //         } else {
  //           this.router.navigate(['/home/sendDocument']);
  //         }
  //       });
  //     }).catch((error) => {
  //       this.ngxService.stop();
  //       // this.toastr.errorToastr(LoginError[error.code], 'Oops!', {
  //       //   position: 'bottom-right'
  //       // });
  //     });
  // }

  // loginWithGoogle(successCallback, errorCallback) {
  //   this.escrowService.LoginWithGoogle(
  //     success => {
  //       if (success.NVEResponse) {
  //         this.commonService.setToLocalStorage('isadmin', success.NVEResponse.inputParameters.isadmin);
  //         this.commonService.publishData('', 'property-escrow');
  //         this.commonService.publishData('', 'property-closed');
  //         successCallback(success);
  //       }
  //       if (success.NVEError) {
  //         this.toastr.errorToastr(CommonError.Account_already_used, 'Oops!', {
  //           position: 'bottom-right'
  //         });
  //         errorCallback(success);
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
