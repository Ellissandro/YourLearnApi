import { UsuarioService } from './../../providers/usuario.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.page.html',
  styleUrls: ['./testes.page.scss'],
})
export class TestesPage implements OnInit {

  createContactForm: FormGroup;
  @ViewChild('createForm', { static: false }) createForm: FormGroupDirective;

  constructor(
    private modalController: ModalController,
    private dataService: UsuarioService
  ) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit(): void {
    this.createContactForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl(''),
      'senha': new FormControl('', Validators.required)
    });
  }

  submitForm() {
    this.createForm.onSubmit(undefined);
  }

  createContact(values: any) {
    // copy all the form values into the new contact
    let newContact: Contact = { ...values };
    this.dataService.adicionar(newContact);
    this.dismissModal();
  }
}
 class Contact {
  firstName: string;
  lastName: string;
  email: string;
  senha: string;
}

