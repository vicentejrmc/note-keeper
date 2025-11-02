import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShellComponent } from "./components/shared/shell/shell.component";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [MatButtonModule, RouterOutlet, ShellComponent],
})
export class App {}
