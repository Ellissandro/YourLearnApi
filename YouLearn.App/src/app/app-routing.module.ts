import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'novo-usuario',
    loadChildren: () => import('./novo-usuario/novo-usuario.module').then( m => m.NovoUsuarioPageModule)
  },
  {
    path: 'adicionar-canal',
    loadChildren: () => import('./adicionar-canal/adicionar-canal.module').then( m => m.AdicionarCanalPageModule)
  },
  {
    path: 'adicionar-play-list',
    loadChildren: () => import('./adicionar-play-list/adicionar-play-list.module').then( m => m.AdicionarPlayListPageModule)
  },
  {
    path: 'play-list',
    loadChildren: () => import('./play-list/play-list.module').then( m => m.PlayListPageModule)
  },
  {
    path: 'play-video',
    loadChildren: () => import('./play-video/play-video.module').then( m => m.PlayVideoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
