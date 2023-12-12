import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieCategory } from 'src/app/utils';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EXPLORE YOUR NEXT MOVIES AND TV SHOWS';
  movies!: IMovie[];
  allMovies!: IMovie[];
  selectedCategory: MovieCategory = MovieCategory.All;
  userText: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.moviesService.getAllMovies().subscribe(result => {
      this.allMovies = result;
      this.movies = result;
    }, error => {
      console.log(error)
    });
  }

  private movieShouldFilteredByCategory(movie: IMovie): boolean {
    switch (this.selectedCategory) {
      case MovieCategory.All:
        return false;
      case MovieCategory.MostPopular:
        if(movie.rating) {
          return movie.rating < 7.5
        }
        return false;
      case MovieCategory.RecentlyReleased:
        const currentYear = new Date().getFullYear();
        return movie.released < currentYear - 5;
      default:
        return false;
    }
  }

  filterMovies(): void{
    this.movies = this.allMovies.filter(movie => movie.title.toLowerCase().includes(this.userText) && !this.movieShouldFilteredByCategory(movie))
  }

  textChanged(text: string): void {
    this.userText = text;
    this.filterMovies();
  }

  categorySelected(category: MovieCategory) {
    this.selectedCategory = category;
    this.filterMovies();
  }

}
