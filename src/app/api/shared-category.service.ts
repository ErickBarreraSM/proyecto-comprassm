import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedCategoryService {
  private selectedCategorySource = new BehaviorSubject<string>('');
  selectedCategory$ = this.selectedCategorySource.asObservable();

  getSelectedCategory(): string {
    return this.selectedCategorySource.value;
  }

  setSelectedCategory(category: string): void {
    this.selectedCategorySource.next(category);
  }
}
