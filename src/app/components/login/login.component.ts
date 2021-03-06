import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public form = {
  email:null,
  password:null
};

public error = null;
  constructor(private Jarwis:JarwisService, private Token:TokenService) {

   }

  onSubmit(){
    this.Jarwis.signin(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
  }

  handleError(error){
    this.error=error.error.error;
  }
  ngOnInit() {
  }

}
