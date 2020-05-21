import { UsuarioService } from './../../providers/usuario.service';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { UtilService } from 'src/providers/util.service';
import { CanalService } from 'src/providers/canal.service';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.page.html',
  styleUrls: ['./testes.page.scss'],
})
export class TestesPage implements OnInit {

  canais: any[] = [];
  constructor(
    private utilService: UtilService,
    private canalService: CanalService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) {
  }
  ngOnInit() {
    this.loadCanal();
  }
  async loadCanal() {

    //Abre tela de aguarde
    let loading = await this.utilService.showLoading();
    loading.present();

    this.canalService.listar().then((response) => {
      console.log(response);
      this.canais = response;

      //Fecha a tela de aguarde
      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async adicionar() {
    let prompt = await this.alertCtrl.create({
      header: 'Adicionar canal',
      message: "Informe os dados do canal",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome do canal',
          type: 'text'
        },
        {
          name: 'urlLogo',
          type: 'text',
          placeholder: 'http://logo.jpg'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Salvar',
          handler: async data => {
            //Abre tela de aguarde
            let loading = await this.utilService.showLoading();
            loading.present();
              console.log(data);
            this.canalService.adicionar(data.nome, data.urlLogo).then((response) => {
              //Fecha a tela de aguarde
              loading.dismiss();

              this.loadCanal();

            }).catch((response) => {

              loading.dismiss();

              this.utilService.showMessageError(response);

            });
          }
        }
      ]
    });

    prompt.present();
  }

  async excluir(canal: any){
    
    //Abre tela de aguarde
    let loading = await this.utilService.showLoading();
    loading.present();

    this.canalService.excluir(canal.id).then((response) => {

      this.utilService.showAlert(response.json().message);

      this.loadCanal();

      //Fecha a tela de aguarde
      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }
}

