import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() form!: FormGroup;
  @Output() selectChange: EventEmitter<void> = new EventEmitter<void>();

  limitValues: number[] = [10, 20, 50, 100];

  onSelectChange() {
    this.selectChange.emit();
  }
}
