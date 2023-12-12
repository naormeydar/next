import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MoviesService } from 'src/app/services/movies.service';
import { of } from 'rxjs';
import { IMovie } from 'src/app/models/movie.model';
import { MovieCategory } from 'src/app/utils';
import { HeaderComponent } from '../header/header.component';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let moviesService: jasmine.SpyObj<MoviesService>;

  beforeEach(() => {
    moviesService = jasmine.createSpyObj('MoviesService', ['getAllMovies']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, MoviesComponent],
      imports: [FormsModule],
      providers: [
        { provide: MoviesService, useValue: moviesService }
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    const mockMovies: IMovie[] = [
      {
        id: '215318',
        title: 'Ace Ventura: When Nature Calls',
        image: 'https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914',
        synopsis: 'Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>',
        rating: 9,
        released: 1995,
        runtime: '1h34m',
      },
      {
        id: '234365',
        title: 'Against All Odds',
        image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603',
        synopsis: 'An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>',
        rating: 5.9,
        released: 1984,
        runtime: '2h1m',
      },
    ];

    moviesService.getAllMovies.and.returnValue(of(mockMovies));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter movies by category and text input', () => {
    fixture.detectChanges();
    component.selectedCategory = MovieCategory.MostPopular;
    component.userText = 'Ace';

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const expectedFilteredMovies: IMovie[] = [
        {
          id: '215318',
          title: 'Ace Ventura: When Nature Calls',
          image: 'https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914',
          synopsis: 'Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>',
          rating: 9,
          released: 1995,
          runtime: '1h34m',
        },
      ];

      expect(component.movies).toEqual(expectedFilteredMovies);
    });
  });
});
