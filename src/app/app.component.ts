import { Component } from '@angular/core'
import { Rank } from './constant/ranks'
import { Suits } from './constant/suits'
import { Card } from './factory/card'
import { Cropier } from './factory/croupier'
import { Hand } from './factory/hand'
import { Rule } from './factory/rule'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poker'
  hands: Hand[] = []

  constructor() {
    const rule = new Rule()
    const c: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank._3, Suits.HEARTS),
      new Card(Rank._3, Suits.HEARTS),
      new Card(Rank._3, Suits.SPADES),
    ]
    console.log(rule.assignToMatrix(c))
  }

  play() {
    const cropier = new Cropier()
    cropier.rematch(4, 5)
    this.hands = cropier.hands
  }
}
