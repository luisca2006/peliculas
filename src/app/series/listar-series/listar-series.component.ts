import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  standalone: true,
  imports: [CommonModule],
  providers: [SeriesService]
})
export class ListarSeriesComponent implements OnInit {

  series: Serie[] = [];
  promedio: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      const total = this.series.reduce((acc, s) => acc + s.seasons, 0);
      this.promedio = total / this.series.length;
    });
  }
}
