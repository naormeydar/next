import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo with the correct routerLink', () => {
    const logoElement: HTMLImageElement = fixture.nativeElement.querySelector('.logo');
    expect(logoElement).toBeTruthy();

    const anchorElement: HTMLAnchorElement = fixture.nativeElement.querySelector('.navbar a');
    expect(anchorElement).toBeTruthy();
    expect(anchorElement.getAttribute('routerLink')).toBe('/');
  });


});
