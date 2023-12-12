import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { IMovie } from '../models/movie.model';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });

    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return movies from the API', () => {
    const mockMovies: IMovie[] = [
     {
      id: "207856",
      title: "2001: A Space Odyssey",
      image: "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
      synopsis: "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
      rating: 8.3,
      released: 1968,
      runtime: "2h28m",
     },
    ];

    service.getAllMovies().subscribe((movies) => {
      expect(movies[0]).toEqual(mockMovies[0]);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/movies');
    expect(req.request.method).toEqual('GET');

    req.flush(mockMovies);
  });
});
