import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { IntegrantesService } from '../services/integrantes.service';
import { Integrante } from '../models/integrante.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm: FormGroup;
  modalidad:string;
  

  constructor(public _usuarioService: IntegrantesService, private router: Router) { }

  sonIguales(campo1: string, campo2: string){
    return (group: FormGroup) =>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if(pass1===pass2){
        return null
      }
      return{
        sonIguales: true
      };
    };
  }
  ngOnInit(): void {
    this.contactForm = new FormGroup({
        //cedula: new FormControl(null, Validators.required),
        //ruc: new FormControl(null),
        nombres: new FormControl(null, Validators.required),
        apellidos: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required,Validators.email]),
        username: new FormControl(null, Validators.required),
        contrasena: new FormControl(null, Validators.required),
        contrasena2: new FormControl(null, Validators.required),
        telefono: new FormControl(null, Validators.required),
        condiciones: new FormControl(false)
      }, {validators: this.sonIguales('contrasena', 'contrasena2')});
  }
  registrarUsuario() {
    if(this.contactForm.invalid){
      return;
    }
    if(!this.contactForm.value.condiciones){
      
      return;
    }
    
    let usuario = new Integrante(
      this.contactForm.value.username,
      this.contactForm.value.correo,
      this.contactForm.value.nombres,
      this.contactForm.value.apellidos,
      this.contactForm.value.contrasena,
      true,      
      true,
    );
    console.log(usuario)
    
    let registroSatisfactorio = this._usuarioService.crearUsuario(usuario)
                        .subscribe(
                          resp=>{
                            console.log(resp);
                            return true;
                          }
                        );
    if(registroSatisfactorio){
        swal("Estupendo!", "Te has registrado de manera satisfactoria!", "success");
        
    } else{
        swal("Ay caramba!", "Ha ocurrido un error en tu registro!", "error");
    }
   
    console.log('Forma valida', this.contactForm.valid)
    console.log(this.contactForm.value)
    
   
    this.router.navigate(['home']);
  }

  selectNegocio(){
    this.modalidad = 'N'
    console.log(this.modalidad);
  }
  selectFrelance(){
    this.modalidad = 'F'
    console.log(this.modalidad);
  }
  loadStorageCID(cedula){
    localStorage.setItem('cedula', cedula);

  }

}
