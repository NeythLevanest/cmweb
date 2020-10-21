import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Integrante } from '../models/integrante.model';
import { element } from 'protractor';
import { IntegrantesService } from '../services/integrantes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  recuerdame: boolean = false;
  usuario:Integrante[];
  private user: any;


  constructor(
    public router: Router,
    public _usuarioService: IntegrantesService,
  ) { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username') || '';
    if(this.username.length>1){
      this.recuerdame=true;
    }
    this.user = {
      username: ' ',
      password: ' '
    };
  }

  loginUser(form){
    if(form.invalid){
      return; 
    }
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    
    this._usuarioService.loginUser(this.user, form.value.recuerdame)
                        .subscribe( resp=>{
                          console.log(resp);
                        }); 

    console.log(form.valid)
    console.log(this.user)
    console.log('token creado desde componente login')
    //this._usuarioService.loginUser({'usernmae': this.user.username, 'password': this.user.password});
  }
  
  tokenGestion(token){
    const token_parts = token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    return token_decoded;
  }

  registrarme(){
    this.router.navigate(['register'])
  }
  
  /*loadStorageCID(cedula){
    localStorage.setItem('cedula', cedula);
  }*/
}
