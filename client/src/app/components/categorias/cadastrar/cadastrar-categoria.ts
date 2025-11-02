import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { CategoriaService } from '../categorias.service';
import { CadastrarCategoriaModel, CadastrarCategoriaResponseModel } from '../categorias.model';
import {Observer, } from 'rxjs';
import { NotificacaoSevice } from '../../shared/notificacao/notificacao.service';

@Component({
  selector: 'app-cadastrar-categoria',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink
],
  templateUrl: './cadastrar-categoria.html',
})
export class CadastrarCategoria {
  protected readonly categoriaSevice = inject(CategoriaService);
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly router = inject(Router);
  protected readonly notificacaoService = inject(NotificacaoSevice);

  protected categoriaForm: FormGroup = this.formBuilder.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
  })

  //validação
  get titulo(){
    return this.categoriaForm.get('titulo');
  }

  public cadastrar(){
    if (this.categoriaForm.invalid) return;

    const categoriaModel: CadastrarCategoriaModel = this.categoriaForm.value;

    const cadastroObserver: Observer<CadastrarCategoriaResponseModel> = {
      next: () => this.notificacaoService.sucesso(`O registro "${categoriaModel.titulo}" foi cadastrado com sucesso!`),
      error: (err) => this.notificacaoService.erro(err.message),
      complete: () => this.router.navigate(['/categorias']),
    };

    this.categoriaSevice
      .cadastrar(categoriaModel)
      .subscribe(cadastroObserver);
  }
}
