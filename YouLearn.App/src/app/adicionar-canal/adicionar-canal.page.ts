import { CanalService } from './../../providers/canal.service';
import { UtilService } from './../../providers/util.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-canal',
  templateUrl: './adicionar-canal.page.html',
  styleUrls: ['./adicionar-canal.page.scss'],
})
export class AdicionarCanalPage implements OnInit {
  canal = [];
  constructor(private modalCtrl:ModalController,
    private utilService: UtilService,
    private canalService: CanalService,
    private alertCtrl: AlertController ) { }

  ngOnInit() {
    this.loadCanal();
  }
  
  async loadCanal() {

    let loading = await this.utilService.showLoading();

    loading.present();

    this.canalService.listar().then((response) => {

      this.canal = response;

      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
    this.loadCanal();
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
            let loading = await this.utilService.showLoading();
            loading.present();

            this.canalService.adicionar(data.nome, data.urlLogo).then((response) => {
              
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
  async excluir(canal: any) {

    let loading = await this.utilService.showLoading();
    loading.present();
    this.canalService.excluir(canal.id).then((response) => {

      this.utilService.showAlert(response.message);

      this.loadCanal();

      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }
}
