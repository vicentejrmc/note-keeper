import { Routes } from "@angular/router";
import { ListarCategorias } from "./listar/listar-categorias";
import { CadastrarCategoria } from "./cadastrar/cadastrar-categoria";

export const categoriasRoutes: Routes = [
  {path: '', component: ListarCategorias},
  {path: 'cadastrar', component: CadastrarCategoria},
];
