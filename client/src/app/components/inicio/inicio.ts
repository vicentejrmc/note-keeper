import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, RouterLink, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './inicio.html',
})
export class Inicio {

}
