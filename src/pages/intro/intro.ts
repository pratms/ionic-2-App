import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController, MenuController } from 'ionic-angular';
 import { AuthProvider } from '../../providers/auth-provider';
 import { SignupPage } from '../signup/signup';
  import { HomePage } from '../home/home';
 import { ResetPasswordPage } from '../reset-password/reset-password' ;
import { Facebook } from '@ionic-native/facebook'

 import firebase from 'firebase';
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
  userProfile: any = null;
  signupPage = SignupPage; 
  resetPasswordPage = ResetPasswordPage ;
   constructor(public navCtrl: NavController, private fb: FormBuilder, public auth: AuthProvider,private facebook: Facebook, private menu: MenuController) { //Added AuthProvider
    this.loginForm = this.fb.group({  
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });
  
        this.email = this.loginForm.controls['email'];     
        this.password = this.loginForm.controls['password'];     
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu1');
  }
loginWithFacebook(): void {
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }
  
  login(): void { 
        if(this.loginForm.valid) {
          var credentials = ({email: this.email.value, password: this.password.value});
          this.auth.loginWithEmail(credentials).subscribe(data => {
            console.log(data);
            this.navCtrl.setRoot(HomePage,{
            firstPassed: data.auth.email
          });
            
          }, error=>{             //Added next lines for handling unknown users
            console.log(error);
            if (error.code == 'auth/user-not-found')
            {
              alert('User not found');
            }
          });
           
        }
    }
 
    logout(): void {
      this.auth.logout();
    }
}