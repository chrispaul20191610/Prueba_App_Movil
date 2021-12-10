import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }


  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(user=>{
      this.router.navigate(['/home']);
      console.log(user);
    }).catch(err=>alert('datos de usuario incorrectps'));
  }


}
