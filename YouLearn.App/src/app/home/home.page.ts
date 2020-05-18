import { UsuarioService } from './../../providers/usuario.service';
import { VideoService } from './../../providers/video.service';
import { UtilService } from '../../providers/util.service';
import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videos : any[] = [];
  constructor(
    private utilService: UtilService, 
    private videoService : VideoService, 
    private navCtrl : NavController,
    private alertCtrl : AlertController,
    private usuarioService : UsuarioService
    ) {
    
  }
buscarVideo(tag : string){
 if (tag == null || tag.trim() =='' ){
   return;
 }
 this.loadVideos(tag);
}
  async loadVideos(tag:string){
  let loading = await this.utilService.showLoading();
  loading.present();

  this.videoService.listarPorTags(tag).then((response) => {
     let result = (response as any);
    loading.dismiss();
  }
  ).catch((response)=>{
    this.utilService.showMessageError(response);
  }  
  );
  }
  async showNovoVideo(){
    let token = localStorage.getItem("YouLearnToken");

    if (token != null) {
      this.navCtrl.navigateForward("video");
    } 
    else{
      let prompt = await this.alertCtrl.create({
        header : 'Autenticar',
        message : 'Informe seus dados para se autenticar no sistema',
        inputs: [
          {
            name: 'email',
            placeholder: 'E-mail',
            type: 'email',    
            value: localStorage.getItem('usuario.email')               
          },
          {
            name: 'senha',
            placeholder: 'Senha',
            type: 'password' 
          }
        ],
        buttons: [
          {
            text: 'Novo usuário',
            handler : ()=>{
              this.navCtrl.navigateForward("novo-usuario");
            }
          },
          {
            text: 'Entrar',
            handler : (data)=>{
              this.autenticarUsuario(data);
            }
          }
        ]
      });
      prompt.present();
    }
  }
  async autenticarUsuario(resquest : any){  
    let loading = await this.utilService.showLoading("Autenticando...");
    loading.present();

    this.usuarioService.autenticar(resquest)
    .then(async(response)=> {
      
      let autenticado : boolean = response.authenticated;

      if (autenticado == false) {
        this.utilService.showToast("Email ou senha inválidos");
        loading.dismiss();
        return ;
      }

      let token : string = response.accessToken;
      let primeiroNome : string = response.primeiroNome;

      if (token != null) {
        localStorage.setItem("YouLearnToken",token);
      }
      loading.dismiss();

      let confirm = await this.alertCtrl.create({
        header: 'Oi '+ primeiroNome,
        message: 'Deseja criar um novo vídeo?',
        buttons:[
          {
            text: 'Não',
            handler: ()=>{}
          },
          {
            text: 'Sim, quero registrar',
            handler: ()=> {
              this.navCtrl.navigateForward("video");
            }
          },
        ]
      });
      confirm.present();
    })
    .catch((response)=>{
      loading.dismiss(); 
      this.utilService.showMessageError(response);
    }); 
  }
}
