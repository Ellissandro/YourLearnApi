import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/providers/util.service';
import { PlayListService } from 'src/providers/playlist.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-play-list',
  templateUrl: './adicionar-play-list.page.html',
  styleUrls: ['./adicionar-play-list.page.scss'],
})
export class AdicionarPlayListPage implements OnInit {
  playLists = [];
  constructor(private modalCtrl:ModalController,
    private utilService: UtilService,
    private playListService: PlayListService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadPlayList();
  }
  closeModal() {
    this.modalCtrl.dismiss();
    this.loadPlayList();
  }
  async excluir(playlist: any) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      message: 'Deseja excluir essa playlist?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.excluirConfirm(playlist);
          }
        }
      ]
    });
    await alert.present();
  }

  async excluirConfirm(playlist: any) {

    let loading = await this.utilService.showLoading();
    loading.present();
 
    this.playListService.excluir(playlist.id).then((response) => {

      this.utilService.showAlert(response.message);

      this.loadPlayList();

      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }
  async loadPlayList() {

    let loading = await this.utilService.showLoading();
    loading.present();

      this.playListService.listar().then((response) => {
      this.playLists = response;

      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
  }
  async adicionar() {
    let prompt = await this.alertCtrl.create({
      header: 'Adicionar playlist',
      message: "Informe os dados da playlist",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome da playlist',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {

          }
        },
        {
          text: 'Salvar',
          handler: async data => {
            let loading = await this.utilService.showLoading();
            loading.present();
            this.playListService.adicionar(data.nome).then((response) => {

              loading.dismiss();

              this.loadPlayList();

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
}
