import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  existe = false;
  listaUsuarios =  [];
  contrasena = "";
  error : string
  

  constructor( private usuarioService: UsuariosService, private alertControl    : AlertController, private router          : Router) { }

  ngOnInit() {
  }
  async recuperar(nom: HTMLInputElement){
    const usuario = nom.value;
    this.listaUsuarios = this.usuarioService.getUsuarios();
    for (let i of this.listaUsuarios){
      if (usuario == i.username){
        this.contrasena = i.clave;
        this.existe = true;
        break;
      }
    }
    if (this.existe === false){
      this.error = "Usuario No Encontrado";
      
    } else {
      const alerta = await this.alertControl.create({
        header  : "Recuperar clave",
        message : "Su clave es:" + this.contrasena,
        buttons : [
          {
            text : "Aceptar",
            handler : () => {
              this.router.navigateByUrl('/login')
            }
          }
        ]
      });
      await alerta.present();
    }
  }
}


