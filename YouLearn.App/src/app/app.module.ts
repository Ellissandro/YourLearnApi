import { PlayListService } from './../providers/playlist.service';
import { CanalService } from './../providers/canal.service';
import { TestesPage } from './testes/testes.page';

import { UsuarioService } from './../providers/usuario.service';
import { VideoService } from './../providers/video.service';
import { UtilService } from '../providers/util.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    UtilService,
    VideoService,
    UsuarioService,
    CanalService,
    NavParams,
    PlayListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
