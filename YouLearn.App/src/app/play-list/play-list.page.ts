import { VideoService } from './../../providers/video.service';
import { UtilService } from './../../providers/util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.page.html',
  styleUrls: ['./play-list.page.scss'],
})
export class PlayListPage implements OnInit {
idPlayList : any;
nomePlayList : string;
videos : any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private utilService: UtilService,
    private videoService : VideoService,
    private navCtrl: NavController
  ) {
     this.idPlayList = this.route.snapshot.paramMap.get("idPlayList");
     this.nomePlayList = this.route.snapshot.paramMap.get("nomePlayList");
  }

  ngOnInit() {
    this.loadVideos(this.idPlayList);
  }
  async loadVideos(idPlayList: any) {

    let loading = await this.utilService.showLoading();
    loading.present();

    //Chamei a API
    this.videoService.listarPorPlayList(idPlayList).then((response) => {

      this.videos = response;

      loading.dismiss();

    }).catch((response) => {

      this.utilService.showMessageError(response);
    });
  }

  compartilharFacebook(video){
    window.open('https://www.facebook.com/sharer.php?u=' + video.url);
  }

  playVideo(video : any){
    this.router.navigate(['/play-video', {url: video.url}]);
  }
  voltar(){
    this.navCtrl.pop();
  }
}
