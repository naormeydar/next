import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie!: IMovie;

  constructor(private dialog: MatDialog) {}

  openDialog(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      data: {movie: this.movie}
    });

    dialogRef.afterClosed().subscribe();
  }
}
