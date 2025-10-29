import { Component } from '@angular/core';
import { CadastrarCategoriaModel } from '../categorias.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-categoria',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastrar-categoria.html',
})
export class CadastrarCategoria {
  protected categoriaForm = new FormGroup({
    titulo: new FormControl('')
  });

  public cadastrar(){
    console.log(this.categoriaForm.value);
  }
}
