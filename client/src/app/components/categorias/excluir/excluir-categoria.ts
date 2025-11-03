import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { CategoriaService } from '../categorias.service';
import { filter, map, switchMap, tap, shareReplay, take, Observer } from 'rxjs';
import { MatCard, MatCardModule } from "@angular/material/card";
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-excluir-categoria',
  imports: [
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './excluir-categoria.html',
})
export class ExcluirCategoria {
  protected readonly router = inject(Router);
  protected readonly _route = inject(ActivatedRoute)
  protected readonly notificacaoService = inject(NotificacaoService);
  protected readonly categoriaSevice = inject(CategoriaService);

  protected readonly categoria$ = this._route.paramMap.pipe(
    filter(params => params.has('id')),
    map(params => params.get('id')!),
    switchMap(id => this.categoriaSevice.selecionarPorId(id)),
      shareReplay({bufferSize: 1, refCount: true}),
  );

  public excluir(){
    const exclusaoObserver: Observer<null> = {
      next: () => this.notificacaoService.sucesso(
        `O registro foi excluído com sucesso!`
      ),
      error: (err) => this.notificacaoService.erro(err.message),
      complete: () => this.router.navigate(['/categorias']),
    };

    this.categoria$.pipe(
      take(1),
      switchMap(categoria => this.categoriaSevice.excluir(categoria.id))
    ).subscribe(exclusaoObserver);

  }
}
