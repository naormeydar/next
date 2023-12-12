import { Component, Inject, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {
  sanitizedSynopsis: SafeHtml = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {movie: IMovie},
    private dialogRef: MatDialogRef<MovieDialogComponent>,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.sanitizedSynopsis = this.sanitizer.bypassSecurityTrustHtml(this.data.movie.synopsis);
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  formatRuntime() {
    const movieRuntime = this.data.movie.runtime;
    const hoursMatch = movieRuntime.match(/\d+h/);
    const minutesMatch = movieRuntime.match(/\d+m/);

    const hours = hoursMatch ? parseInt(hoursMatch[0], 10) || 0 : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[0], 10) || 0 : 0;

    const formattedRuntime = `${hours ? `${hours}h` : ''} ${minutes ? `${minutes}min` : ''}`;
    return formattedRuntime.trim();
  }

  isNumber(value: any): boolean {
    return typeof value === 'number' && isFinite(value) && !isNaN(value);
  }

}
