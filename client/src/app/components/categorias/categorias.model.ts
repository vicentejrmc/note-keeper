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

export interface CadastrarCategoriaResponseModel{
  id: string;
}

export interface EditarCategoriaModel{
  titulo: string;
}

export interface EditarCategoriaResponseModel{
  titulo: string;
}

export interface DetalhesCategoriaModel{
  id: string;
  titulo: string;
}

export interface ExcluirCategoria{
  id: string;
}
