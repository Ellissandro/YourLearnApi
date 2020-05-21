import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.page.html',
  styleUrls: ['./play-video.page.scss'],
})
export class PlayVideoPage implements OnInit {
  urlSecurity : any;
  constructor(private route: ActivatedRoute,private domSanitizer : DomSanitizer, private navCtrl: NavController) {
     let url = this.route.snapshot.paramMap.get("url");
    this.urlSecurity = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
   }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.pop();
  }
}
