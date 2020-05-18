import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from "./util.service";


@Injectable()
export class CanalService {

  constructor(public http: HttpClient, public utilService: UtilService,) { }
  
  listar(): Promise<any> {
    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.get(host + 'api/v1/Canal/Listar/', { headers }).toPromise();
  }

  adicionar(nome: string, urlLogo: string): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.post(host + 'api/v1/Canal/Adicionar/',  {nome: nome, urlLogo : urlLogo}, { headers: headers }).toPromise();
  }

  excluir(id : any): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.delete(host + 'api/v1/Canal/Excluir/' + id, { headers: headers }).toPromise();
  }
}
  