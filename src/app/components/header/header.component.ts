import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieCategory } from 'src/app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() categorySelectedEvent = new EventEmitter<MovieCategory>();
  @Output() inputChange = new EventEmitter<string>();
  searchText: string = '';
  showCategories: boolean = false;
  categories: MovieCategory[] = Object.values(MovieCategory);
  selectedCategory: MovieCategory = MovieCategory.All;

  constructor() {}

  ngOnInit(): void {
    const savedSearchText = localStorage.getItem('searchText');
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedSearchText) {
      this.searchText = savedSearchText;
      this.saveText();
    }
    if(savedCategory) {
      this.selectedCategory = savedCategory as MovieCategory;
      this.saveCategory();
    }
  }

  private saveText() {
    this.inputChange.emit(this.searchText.toLowerCase());
  }

  private saveCategory() {
    this.categorySelectedEvent.emit(this.selectedCategory);
  }

  textChange(): void {
    localStorage.setItem('searchText', this.searchText);
    this.saveText();
  }

  toggleShowCategories(): void {
    this.showCategories = !this.showCategories;
  }

  categorySelected(category: MovieCategory): void {
    this.showCategories = false;
    this.selectedCategory = category;
    localStorage.setItem('selectedCategory', category);
    this.saveCategory();
  }
}
