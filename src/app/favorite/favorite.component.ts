
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';


export interface FavoriteChangeEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.onChangeEvent.emit({ newValue: this.isSelected });
  }
}

