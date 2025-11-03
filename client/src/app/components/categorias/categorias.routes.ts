import { Routes } from "@angular/router";
import { ListarCategorias } from "./listar/listar-categorias";
import { CadastrarCategoria } from "./cadastrar/cadastrar-categoria";
import { EditarCategoria } from "./editar/editar-categoria";
import { ExcluirCategoria } from "./excluir/excluir-categoria";

export const categoriasRoutes: Routes = [
  {path: '', component: ListarCategorias},
  {path: 'cadastrar', component: CadastrarCategoria},
  {path: 'editar/:id', component: EditarCategoria},
  {path: 'excluir/:id', component: ExcluirCategoria},
];
