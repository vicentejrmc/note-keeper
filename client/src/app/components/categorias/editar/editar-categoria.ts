import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { CategoriaService } from '../categorias.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DetalhesCategoriaModel, EditarCategoriaModel, EditarCategoriaResponseModel} from '../categorias.model';
import { filter, map, Observer, shareReplay, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-editar-categoria',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './editar-categoria.html',
})
export class EditarCategoria {
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly router = inject(Router);
  protected readonly _route = inject(ActivatedRoute)
  protected readonly notificacaoService = inject(NotificacaoService);
  protected readonly categoriaSevice = inject(CategoriaService);

  protected categoriaForm: FormGroup = this.formBuilder.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
  })

  //validação
  get titulo(){
    return this.categoriaForm.get('titulo');
  }

  protected readonly categoria$ = this._route.data.pipe(
      filter((data) => data['categoria']),
      map((data) => data['categoria'] as DetalhesCategoriaModel),
      tap(categoria => this.categoriaForm.patchValue(categoria)),
      shareReplay({bufferSize: 1, refCount: true}),
  );


  public editar(){
    if(this.categoriaForm.invalid) return;

    const editarCategoriaModel: EditarCategoriaModel = this.categoriaForm.value;

    const edicaoObserver: Observer<EditarCategoriaResponseModel> = {
      next: () => this.notificacaoService.sucesso(
        `O registro "${editarCategoriaModel.titulo}" foi editado com sucesso!`
      ),
      error: (err) => this.notificacaoService.erro(err.message),
      complete: () => this.router.navigate(['/categorias']),
    };

    this.categoria$.pipe(
      take(1), // determina quantidade de execuções para evitar erro de roteamento continuo impedindo o retorno (router.navigate([]).
      switchMap((categoria) => this.categoriaSevice.editar(categoria.id, editarCategoriaModel)),
    ).subscribe(edicaoObserver);
  }

}
