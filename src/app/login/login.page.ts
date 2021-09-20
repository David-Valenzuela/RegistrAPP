import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = [];
  error : String;
  estado : Boolean;
  id : Number;
  constructor(
    private usuariosService : UsuariosService,
    private router: Router) { 
  }

  ngOnInit() {
  }
  
  ingresar(user : HTMLInputElement, pass : HTMLInputElement)
  {
    this.estado = false;
    let usuario = user.value;
    let password = pass.value;
    this.usuarios = this.usuariosService.getUsuarios();
    for (let persona of this.usuarios)
    {
      if(persona.username == usuario && persona.clave == password){
        this.estado = true;
        this.id = persona.id;
      }
    } 
    if(this.estado == true){
      console.log("Datos Correctos");
      this.router.navigate(['/', this.id]);

    }else{
      console.log("Datos Incorrectos");
      this.error = "Datos incorrectos, ingreselo nuevamente.";
    }
  }

  agregar(){
    this.router.navigate(['/agregar'])
  }

}
