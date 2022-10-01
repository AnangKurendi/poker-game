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

    // const rule = new Rule()
    // console.log(cropier.hands)
    // this.hands.forEach((element) => {
    //   console.log(rule.assignToMatrix(element.cards), element.cards)
    //   console.log('**Royal Flush** =>', rule.isRoyalFlush(element.cards))
    //   console.log('**Straight Flush** =>', rule.isStraightFlush(element.cards))
    //   console.log('**Four of a Kind** =>', rule.isFourOfKind(element.cards))
    //   console.log('**Full House** =>', rule.isFullHouse(element.cards))
    //   console.log('**Flush** =>', rule.isFlush(element.cards))
    //   console.log('**Straight **=>', rule.isStraight(element.cards))
    //   console.log('isTreeOfKind =>', rule.isTreeOfKind(element.cards))
    //   console.log('isTwoPair =>', rule.isTwoPair(element.cards))
    //   console.log('isOnePair=>', rule.isOnePair(element.cards))
    // })
  }
}
