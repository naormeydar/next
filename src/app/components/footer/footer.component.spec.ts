import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ILink } from 'src/app/models/link.model';
import links from '../../utils'

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.links = links;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of links', () => {
    const linkElements = fixture.nativeElement.querySelectorAll('.link');
    expect(linkElements.length).toEqual(links.length);
  });

  it('should render links with correct href and image source', () => {
    const linkElements = fixture.nativeElement.querySelectorAll('.link');

    links.forEach((link: ILink, index: number) => {
      const anchorElement = linkElements[index].querySelector('a');
      const imgElement = linkElements[index].querySelector('img');

      expect(anchorElement.getAttribute('href')).toEqual(link.linkUrl);
      expect(imgElement.getAttribute('src')).toEqual(`../../../assets/${link.name}.png`);
    });
  });
});
