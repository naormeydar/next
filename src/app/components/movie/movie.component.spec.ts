import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IMovie } from 'src/app/models/movie.model';
import { MovieComponent } from './movie.component';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports: [BrowserAnimationsModule, MatIconModule],
      providers: [
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => ({ subscribe: () => {} }) }) } }
      ]
    }).compileComponents();

    dialog = TestBed.inject(MatDialog);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.movie = {
      id: "207856",
      title: "2001: A Space Odyssey",
      image: "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
      synopsis: "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
      rating: 8.3,
      released: 1968,
      runtime: "2h28m",
    } as IMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie details', () => {
    const titleAndYear = fixture.debugElement.query(By.css('.titleAndYear')).nativeElement.textContent;
    expect(titleAndYear).toContain('2001: A Space Odyssey (1968)');

    const rating = fixture.debugElement.query(By.css('.rating')).nativeElement.textContent;
    expect(rating).toContain('8.3');
  });

  it('should open dialog on button click', () => {
    spyOn(dialog, 'open');
    const button = fixture.debugElement.query(By.css('.readMoreBtn')).nativeElement;
    button.click();

    expect(dialog.open).toHaveBeenCalledWith(MovieDialogComponent, { data: { movie: component.movie } });
  });
});
