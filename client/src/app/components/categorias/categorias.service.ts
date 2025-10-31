import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { CadastrarCategoriaModel, CadastrarCategoriaResponseModel, ListarCategoriasApiRespose, ListarCategoriasModel } from "./categorias.model";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private readonly apiUrl = environment.apiUrl + '/categorias';
  private readonly http = inject(HttpClient);

  public selecionarTodas(): Observable<ListarCategoriasModel[]>{
    return this.http.get<ListarCategoriasApiRespose>(this.apiUrl)
    .pipe(
      map(res => res.registros)
    );
  }

  public cadastrar(categoriaModel: CadastrarCategoriaModel):
    Observable<CadastrarCategoriaResponseModel> {
      return this.http.post<CadastrarCategoriaResponseModel>(this.apiUrl, categoriaModel)
  }
}
