import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-cad-loja-component',
  templateUrl: './form-cad-loja-component.component.html',
  styleUrls: ['./form-cad-loja-component.component.css']
})
export class FormCadLojaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
