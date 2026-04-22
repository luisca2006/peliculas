import { Component } from '@angular/core';
import { ListarSeriesComponent } from './series/listar-series/listar-series.component';

@Component({
  selector: 'app-root',
  imports: [ListarSeriesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
