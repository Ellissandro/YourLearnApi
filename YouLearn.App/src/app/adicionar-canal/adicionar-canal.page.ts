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
  public canais = new Array<any>();
  constructor(private modalCtrl:ModalController,
    private utilService: UtilService,
    private canalService: CanalService,
    private alertCtrl: AlertController ) { }

  ngOnInit() {
    this.loadCanal();
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }

  async loadCanal() {

    //Abre tela de aguarde
    let loading = await this.utilService.showLoading();
    loading.present();

    this.canalService.listar().then((response) => {
      const result = (response as any);
      this.canais = result;
           
      //Fecha a tela de aguarde
      loading.dismiss();

    }).catch((response) => {

      loading.dismiss();

      this.utilService.showMessageError(response);

    });
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
  excluir(canal: any){
    
    //Abre tela de aguarde
    let loading = this.utilService.showLoading();
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
