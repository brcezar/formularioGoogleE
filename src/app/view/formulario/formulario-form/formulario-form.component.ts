import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-form',
  templateUrl: './formulario-form.component.html',
  styleUrls: ['./formulario-form.component.css'],
})
export class FormularioFormComponent implements OnInit {
  formularioFormGroup = this.fb.group({
    id: [null],
    titulo: [null, Validators.required],
    descricao: [null, Validators.required],
    questoes: [[]],
  });

  questaoFormGroup = this.fb.group({
    titulo: [null, Validators.required],
    tipo: [null, Validators.required],
    requerido: [false],
    opcoes: [[]],
  });

  opcoesFormGroup = this.fb.group({
    valor: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit() {}

  addQuestao() {
    this.formularioFormGroup
      .get('questoes')
      .value.push(this.questaoFormGroup.value);
    this.questaoFormGroup.reset({ opcoes: [], requerido: false });
  }

  addOpcao() {
    this.questaoFormGroup.get('opcoes').value.push(this.opcoesFormGroup.value);
    this.opcoesFormGroup.reset();
  }
}
