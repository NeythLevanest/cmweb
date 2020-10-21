import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'

import URL_SERVICIOS from 'src/app/config/config';
import { Router } from '@angular/router';
import { Integrante } from '../models/integrante.model';



@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {
  
  private httpOptions:any;

  public token: string;
  public user: string;
  public token_expires: Date;
  public username:string;
  public errors:any=[];
  

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   }

  
  
  public loginUser(user, recordar: boolean=false){
    if(recordar){
      localStorage.setItem('username', user['username']);
    } else{
      localStorage.removeItem('username');
    }
    let url = URL_SERVICIOS.login;
    return this.http.post(url, JSON.stringify(user), this.httpOptions)
                    
                    .map((resp: any) =>{
                      //this.token = JSON.stringify(resp['token']);
                      this.updateData(resp['token'])
                      localStorage.setItem('token', this.token);
                      localStorage.setItem('id', JSON.stringify(this.tokenGestion(resp['token']).user_id));
                      localStorage.setItem('user', JSON.stringify(this.tokenGestion(resp['token'])));
                      return true
                    });
  }

  islogIn(){
    return((this.token.length > 5))? true: false;
  }
  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else{
      this.token='';
      this.user=null;
    }
  }
  
  tokenGestion(token){
    const token_parts = token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    return token_decoded;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public refreshToken(){
    let url = URL_SERVICIOS.refreshlogin;
    this.http.post(url, JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  public logoutUser(){
    this.token='';
    this.token_expires=null;
    this.username=null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    this.router.navigate(['/app'])
  }

  private updateData(token){
    this.token = token;
    this.errors = [];

    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp*1000);
    this.username = token_decoded.username;
  }

  
  getInti(id){
    let url = URL_SERVICIOS.registrar+id
    return this.http.get(url);
  }

  getInti2(id){
    let url = URL_SERVICIOS.registrar+id
    return this.http.get(url).subscribe((resp:any)=>{
      localStorage.setItem('cedula', resp.cedula);
    })
  }

  crearUsuario (usuario: Integrante){
    let url = URL_SERVICIOS.registrarSU;
    return this.http.post(url, usuario);
  }

}
