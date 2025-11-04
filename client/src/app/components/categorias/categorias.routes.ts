import { ActivatedRouteSnapshot, ResolveFn, Routes } from "@angular/router";
import { ListarCategorias } from "./listar/listar-categorias";
import { CadastrarCategoria } from "./cadastrar/cadastrar-categoria";
import { EditarCategoria } from "./editar/editar-categoria";
import { ExcluirCategoria } from "./excluir/excluir-categoria";
import { DetalhesCategoriaModel, ListarCategoriasModel } from "./categorias.model";
import { inject } from "@angular/core";
import { CategoriaService } from "./categorias.service";

const listagemCategoriasResolver: ResolveFn<ListarCategoriasModel[]> = () => {
  const categoriaService = inject(CategoriaService);

  return categoriaService.selecionarTodas();
}

const detalhesCategoriaResolver: ResolveFn<DetalhesCategoriaModel> = (route: ActivatedRouteSnapshot) => {
  const categoriaService = inject(CategoriaService);

  if (!route.paramMap.has('id')) throw new Error('O parâmetro Id não foi encontrado.')

  const categoriaId = route.paramMap.get('id')!;

  return categoriaService.selecionarPorId(categoriaId);
}

export const categoriasRoutes: Routes = [
  {path: '',
    component: ListarCategorias,
    resolve: {categoria: listagemCategoriasResolver},
  },
  {path: 'cadastrar', component: CadastrarCategoria},
  {path: 'editar/:id', component: EditarCategoria,
    resolve: {categoria : detalhesCategoriaResolver},
  },
  {path: 'excluir/:id', component: ExcluirCategoria,
    resolve: {categoria: detalhesCategoriaResolver},
  },
];
