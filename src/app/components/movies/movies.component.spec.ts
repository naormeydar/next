import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MoviesComponent } from './movies.component';

@Component({
  selector: 'app-movie',
  template: '<div class="mock-movie"></div>',
})
class MockMovieComponent {
  @Input() movie!: IMovie;
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent, MockMovieComponent],
    });

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of movies', () => {
    const mockMovies: IMovie[] = [
      {
        id: '215318',
        title: 'Ace Ventura: When Nature Calls',
        image:
          'https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914',
        synopsis:
          'Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>',
        rating: 6.4,
        released: 1995,
        runtime: '1h34m',
      },
      {
        id: '234365',
        title: 'Against All Odds',
        image:
          'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603',
        synopsis:
          'An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>',
        rating: 5.9,
        released: 1984,
        runtime: '2h1m',
      },
    ];

    component.movies = mockMovies;
    fixture.detectChanges();

    const movieElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('.movie');
    expect(movieElements.length).toBe(mockMovies.length);
  });
});
