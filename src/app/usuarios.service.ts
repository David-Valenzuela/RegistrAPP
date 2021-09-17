import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios : Usuario[] = [
    {
      id  : 1,
      nombre  : "Juan",
      apellido  : "Lopez",
      username  : "juan.lopez",
      clave     : "juanduoc2021"
    },
    {
      id  : 2,
      nombre  : "Antonia",
      apellido  : "Mendez",
      username  : "anto.mendez",
      clave     : "antoniaduoc2021"
    },
  ]
  constructor() { }

  getUsuarios()
  {
    return this.usuarios
  }

  getUsuario(id: number)
  {
    return this.usuarios.find(x => {return x.id == id});
  }
}
