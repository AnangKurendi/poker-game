import { Component } from '@angular/core';
import { Card } from './model/card';
import { Cropier } from './model/croupier';
import { Deck } from './model/deck';
import { Hand } from './model/hand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poker';
  hands: Hand[] = []

  constructor() {
    const cropier = new Cropier(4,5)
    this.hands = cropier.hands
    // console.log(cropier.hands)
  }
}
