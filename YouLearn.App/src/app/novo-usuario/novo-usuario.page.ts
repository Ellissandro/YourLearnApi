import { UsuarioService } from './../../providers/usuario.service';
import { UtilService } from './../../providers/util.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage implements OnInit {

  public form : FormGroup;
  
  constructor(private formBuilder : FormBuilder,
    private utilService : UtilService,
    private usuarioService : UsuarioService,
    private navCtrl : NavController,
    private router: Router) {

      this.form = this.formBuilder.group({
        primeiroNome: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.required
        ])],
        ultimoNome: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.required
        ])],
        email: ['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
          Validators.required
        ])],
        senha: ['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(36),
          Validators.required
        ])],
  
      });

  }
  ngOnInit() {
   
  }

  async salvar(){
    let loading = await this.utilService.showLoading();
    loading.present();;
    this.usuarioService.adicionar(this.form.value)
    .then((response)=>{
      
      loading.dismiss();

      this.utilService.showAlert('Operação realizada com sucesso!');

      localStorage.setItem('usuario.email', this.form.value.email);

      this.router.navigate[('/')];
    })
    .catch((response)=>{
      loading.dismiss();
      this.utilService.showMessageError(response);
    });
  }

  cancelar(){
    this.router.navigate[('/')];
  }
}