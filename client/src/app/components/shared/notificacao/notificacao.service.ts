import { EnvironmentProviders, inject, Injectable, makeEnvironmentProviders } from "@angular/core";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class NotificacaoService{
  protected readonly  snackBar = inject(MatSnackBar);

  public sucesso(mensagem: string):void{
    this.snackBar.open(mensagem, 'Ok', {
      panelClass: ['notificacao-sucesso']
    })
  }

  public aviso(mensagem: string):void{
    this.snackBar.open(mensagem, 'Ok', {
      panelClass: ['notificacao-aviso']
    })
  }

  public erro(mensagem: string):void{
    this.snackBar.open(mensagem, 'Ok', {
      panelClass: ['notificacao-erro']
    })
  }


}
