import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, GetBreedList, GetCatList, SetSearchForm } from './state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { ICat, IBreed } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @Select(AppState.catList) catList$!: Observable<ICat[]>;
  @Select(AppState.catListLoaded) catListLoaded$!: Observable<boolean>;
  @Select(AppState.breedList) breedList$!: Observable<IBreed[]>;
  @Select(AppState.breedListLoaded) breedListLoaded$!: Observable<boolean>;

  form: FormGroup = new FormGroup({
    limit: new FormControl(10),
    breed: new FormControl(),
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetCatList());
    this.store.dispatch(new GetBreedList());
  }

  onSelectChange() {
    this.store.dispatch(new SetSearchForm(this.form.value));
  }
}
