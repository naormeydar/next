import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieDialogComponent } from './movie-dialog.component';

describe('MovieDialogComponent', () => {
  let component: MovieDialogComponent;
  let fixture: ComponentFixture<MovieDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            movie: {
              id: '207856',
              title: '2001: A Space Odyssey',
              image:
                'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c',
              synopsis:
                'While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship\'s intelligent computer system.<br><b>New on 2020-06-18</b>',
              rating: '8.3',
              released: '1968',
              runtime: '2h28m',
            },
          },
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: () => '' } },
      ],
    });

    fixture = TestBed.createComponent(MovieDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render movie details correctly', () => {
    fixture.detectChanges();

    const titleElement: HTMLDivElement = fixture.nativeElement.querySelector('.dialogTitle');
    expect(titleElement.textContent).toContain('2001: A Space Odyssey');

    const runtimeElement: HTMLDivElement = fixture.nativeElement.querySelector('.dialodRuntime');
    expect(runtimeElement.textContent).toContain('2h 28min');

    const ratingElement: HTMLDivElement = fixture.nativeElement.querySelector('.rating');
    expect(ratingElement.textContent).toContain('8.3/10');
  });

  it('should call onCloseDialog method when back button is clicked', () => {
    spyOn(component, 'onCloseDialog');
    const backButton: HTMLButtonElement = fixture.nativeElement.querySelector('.backBtn');
    backButton.click();
    expect(component.onCloseDialog).toHaveBeenCalled();
  });

});
