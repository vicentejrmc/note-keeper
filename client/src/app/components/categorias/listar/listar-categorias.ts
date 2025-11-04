import { Component, inject } from '@angular/core';
import { CategoriaService } from '../categorias.service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { filter, map } from 'rxjs';
import { ListarCategoriasModel } from '../categorias.model';

@Component({
  selector: 'app-listar-categorias',
  imports: [AsyncPipe, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './listar-categorias.html',
})
export class ListarCategorias {
  protected readonly route = inject(ActivatedRoute);
  protected readonly categoriaService = inject(CategoriaService);

  protected readonly categorias$ = this.route.data
  .pipe(
    filter((data) => data['categoria']),
    map((data) => data['categoria'] as ListarCategoriasModel[]),
  );

}
