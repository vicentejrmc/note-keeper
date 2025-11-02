import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class NotificacaoSevice{
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
