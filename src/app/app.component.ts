import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'app',
    isFavorite: true
  };

  onChangeFavorite(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite change: ' + eventArgs.newValue);
  }
}
