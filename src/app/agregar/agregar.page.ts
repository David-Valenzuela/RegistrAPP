import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  username    : String;
  clave_error : String;
  error       : String;
  constructor(
    private router    : Router,
    private usuariosService : UsuariosService,
  ) { }

  ngOnInit() {
  }
  continuar(nom : HTMLInputElement, pater : HTMLInputElement, mater : HTMLInputElement)
  {
    let nombre = nom.value.toLowerCase();
    let apellido = pater.value.toLowerCase();
    let mateterno = mater.value;
    if(nombre.length <= 3 || apellido.length <= 3 || mateterno.length <= 3){
      this.error = "Debe ingresar datos validos";
    }else {
      this.username = nombre.substr(0,4)+ '.' + apellido;
    } 
  }
  agregar(nom : HTMLInputElement, pater : HTMLInputElement, mater : HTMLInputElement, user : HTMLInputElement, pass : HTMLInputElement)
  {
    const nombre = nom.value;
    const paterno = pater.value;
    const materno = mater.value;
    const username = user.value;
    let clave = pass.value;
    if(clave.length >= 6){
      this.usuariosService.addUsuario(nombre,paterno,materno,username,clave);
      this.router.navigateByUrl('/login');
    }else{
      this.clave_error = "Debe ingresar una clave entre 6 o más caracteres."
    }
  }
}
