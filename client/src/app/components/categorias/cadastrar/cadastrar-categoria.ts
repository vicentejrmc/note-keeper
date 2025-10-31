import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { CategoriaService } from '../categorias.service';
import { CadastrarCategoriaModel } from '../categorias.model';
import { finalize } from 'rxjs';

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


  protected categoriaForm = this.formBuilder.group({
    titulo: []
  })

  public cadastrar(){
    if (this.categoriaForm.invalid) return;

    const categoriaModel = this.categoriaForm.value as CadastrarCategoriaModel;

    this.categoriaSevice
      .cadastrar(categoriaModel)
      .pipe(
        finalize(() => this.router.navigate(['/categorias']))
      )
      .subscribe((res)=> console.log(res));
  }
}
