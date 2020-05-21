import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from "./util.service";


@Injectable()
export class PlayListService {

  constructor(public http: HttpClient, public utilService: UtilService,) { }
  
  listar(): Promise<any> {
    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.get(host + 'api/v1/PlayList/Listar/', { headers: headers }).toPromise();
  }

  adicionar(nome: string): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers : any = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.post(host + 'api/v1/PlayList/Adicionar/',  {nome: nome}, { headers: headers }).toPromise();
  }

  excluir(id : any): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers : any = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.delete(host + 'api/v1/PlayList/Excluir/' + id, { headers: headers }).toPromise();
  }
}
  