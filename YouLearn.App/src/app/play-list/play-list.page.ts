import { VideoService } from './../../providers/video.service';
import { UtilService } from './../../providers/util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private videoService : VideoService
  ) {
     this.idPlayList = this.route.snapshot.paramMap.get("idPlayList");
     this.nomePlayList = this.route.snapshot.paramMap.get("nomePlayList");
  }

  ngOnInit() {
    this.loadVideos(this.idPlayList);
  }
  async loadVideos(idPlayList: any) {
    //Abri a tela de aguarde
    let loading = await this.utilService.showLoading();
    loading.present();

    //Chamei a API
    this.videoService.listarPorPlayList(idPlayList).then((response) => {
      //Populo minhas lista de videos em um array
      this.videos = response;
      console.log(this.videos);
      //Fecho a tela de aguarde
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
}
