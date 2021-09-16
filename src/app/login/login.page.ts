import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : String;
  clave : String;
  respuesta: String;
  constructor(private router: Router) { 
    this.usuario = "Juan";
    this.clave = "juanduoc2021";
  }

  ngOnInit() {
  }
  
  ingresar(user : HTMLInputElement, pass : HTMLInputElement)
  {
    let nombre = user.value
    let password = pass.value
    if(nombre == this.usuario && password == this.clave){
      console.log("Datos Correctos")
      this.router.navigate(['/home']);
    } else{
      console.log("Datos Incorrectos")
      this.respuesta = "Ingrese nuevamente los datos."
    }
  }

}
