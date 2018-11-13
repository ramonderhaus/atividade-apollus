import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  //INICIA O FORM
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http) {      

    //DEFINE OS CAMPOS
    this.formulario = this.formBuilder.group({

      //NOME CAMPO: [VALUE, VALIDATOR]
      nome: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
      
    });

  }

  ngOnInit() {
  }

  btnEnviar() {
    console.log(this.formulario.value);
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', 
                    JSON.stringify(this.formulario.value))
                    .subscribe(dados => {
                      console.log(dados);
                      //reseta o form
                      this.resetar();
                    },
                    (error: any) => alert('Erro'));
  }

  resetar() {
    this.formulario.reset();
  }

}
