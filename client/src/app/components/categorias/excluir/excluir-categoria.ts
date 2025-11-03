import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { CategoriaService } from '../categorias.service';

@Component({
  selector: 'app-excluir-categoria',
  imports: [],
  templateUrl: './excluir-categoria.html',
})
export class ExcluirCategoria {
  protected readonly router = inject(Router);
  protected readonly _route = inject(ActivatedRoute)
  protected readonly notificacaoService = inject(NotificacaoService);
  protected readonly categoriaSevice = inject(CategoriaService);
}
