import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MovieCategory } from 'src/app/utils';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.searchText).toEqual('');
    expect(component.showCategories).toBeFalse();
    expect(component.selectedCategory).toEqual(MovieCategory.All);
    expect(component.categories).toEqual(Object.values(MovieCategory));
  });

  it('should emit input change event when text changes', () => {
    spyOn(component.inputChange, 'emit');
    component.searchText = 'test';
    component.textChange();
    expect(component.inputChange.emit).toHaveBeenCalledWith('test');
  });

  it('should emit category selected event when a category is selected', () => {
    spyOn(component.categorySelectedEvent, 'emit');
    const selectedCategory = MovieCategory.MostPopular;
    component.categorySelected(selectedCategory);
    expect(component.categorySelectedEvent.emit).toHaveBeenCalledWith(selectedCategory);
  });

  it('should save text to localStorage when text changes', () => {
    spyOn(localStorage, 'setItem');
    component.searchText = 'test';
    component.textChange();
    expect(localStorage.setItem).toHaveBeenCalledWith('searchText', 'test');
  });

  it('should save category to localStorage when a category is selected', () => {
    spyOn(localStorage, 'setItem');
    const selectedCategory = MovieCategory.RecentlyReleased;
    component.categorySelected(selectedCategory);
    expect(localStorage.setItem).toHaveBeenCalledWith('selectedCategory', selectedCategory);
  });

  it('should toggle showCategories flag when calling toggleShowCategories method', () => {
    component.showCategories = false;
    component.toggleShowCategories();
    expect(component.showCategories).toBeTrue();
    component.toggleShowCategories();
    expect(component.showCategories).toBeFalse();
  });
});
