export interface ListarCategoriasApiRespose{
  registros: ListarCategoriasModel[];
}

export interface ListarCategoriasModel{
  id: string;
  titulo: string;
}

export interface CadastrarCategoriaModel{
  titulo: string;
}
