import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from "./util.service";


@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient, public utilService: UtilService,
  ) { }
  
  autenticar(request : any) : Promise<any>{
    
    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(host + 'api/v1/Usuario/Autenticar', request, {headers}).toPromise();
  }

  adicionar(form: any): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(host + 'api/v1/Usuario/Adicionar',  form, { headers: headers }).toPromise();
  }
}
  