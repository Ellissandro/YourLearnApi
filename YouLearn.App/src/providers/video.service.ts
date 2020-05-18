import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from "./util.service";


@Injectable()
export class VideoService {

  constructor(public http: HttpClient, public utilService: UtilService,
  ) { }
  
  listarPorTags(tags: string): Promise<any> {
    
    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(host + 'api/v1/Video/Listar/' + tags, { headers: headers }).toPromise();
  }

  listarPorPlayList(idPlayList: string): Promise<any> {
    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(host + 'api/v1/Video/Listar/' + idPlayList, { headers: headers }).toPromise();
  }

  adicionar(request: any): Promise<any> {

    let host = this.utilService.obterHostDaApi();

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('YouLearnToken'));

    return this.http.post(host + 'api/v1/Video/Adicionar/',  request, { headers: headers }).toPromise();
  }
}
  