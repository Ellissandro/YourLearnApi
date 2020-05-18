import { AdicionarCanalPage } from './../adicionar-canal/adicionar-canal.page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/providers/util.service';
import { VideoService } from 'src/providers/video.service';
import { CanalService } from 'src/providers/canal.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  form: FormGroup;
  canais: any[] = [];
  playlists: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private utilService: UtilService,
    private modalCtrl: ModalController,
    private canalService: CanalService,
    private videoService : VideoService,)
 {

    this.form = this.fb.group({
      titulo: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(100),
        Validators.required
      ])],
      descricao: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(255),
        Validators.required
      ])],
      idVideoYoutube: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.required
      ])],
      tags: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(150),
        Validators.required
      ])],

      idCanal: ['', Validators.compose([
        Validators.required
      ])],

      idPlaylist: ['', Validators.compose([

      ])],

      ordemNaPlayList: ['', Validators.compose([


      ])],
    });
  }
  ngOnInit(){
    this.loadCanal();
    this.loadPlayList();
  }

  async loadCanal() {

    //Abre tela de aguarde
    let loading = await this.utilService.showLoading();
    loading.present();

    this.canalService.listar().then((response) => {
      this.canais = response.json();

      //Fecha a tela de aguarde
      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      //this.utilService.showMessageError(response);

    });
  }

  async loadPlayList() {
    // //Abre tela de aguarde
    // let loading = await this.utilService.showLoading();
    // loading.present();

    // this.playListService.listar().then((response) => {
    //   this.playlists = response.json();

    //   //Fecha a tela de aguarde
    //   loading.dismiss();

    // }).catch((response) => {

    //   loading.dismiss();

    //   this.utilService.showMessageError(response);

    // });
  }
  cancelar(){
    this.navCtrl.pop();
  }
  async showAddCanal(){
    let modal = await this.modalCtrl.create({
      component: AdicionarCanalPage
    });
    modal.present();
  }

}
