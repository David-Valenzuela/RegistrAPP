import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario : Usuario;
  constructor(
    private activatedRouter : ActivatedRoute,
    private router          : Router,
    private usuariosService : UsuariosService,
    private alertControl    : AlertController
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.usuario = this.usuariosService.getUsuario(Number(id));
    })
  }
  async ver(){
    const alerta = await this.alertControl.create({
      header  : "Acción temporalmente no disponible.",
      message : "Por favor intentelo nuevamente.",
      buttons : [
        {
          text : "Aceptar",
          role : "cancel"
        }
      ]
    });
    await alerta.present();
  }
}
