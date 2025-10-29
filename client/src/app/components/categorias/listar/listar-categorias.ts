import { Component, inject } from '@angular/core';
import { CategoriaService } from '../categorias.service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listar-categorias',
  imports: [AsyncPipe, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './listar-categorias.html',
})
export class ListarCategorias {
  protected readonly categoriaService = inject(CategoriaService);

  protected readonly categorias$ = this.categoriaService.selecionarTodas();

}
