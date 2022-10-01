import { Component } from '@angular/core'
import { Card } from './model/card'
import { Cropier } from './model/croupier'
import { Deck } from './model/deck'
import { Hand } from './model/hand'
import { Rule } from './model/rule'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poker'
  hands: Hand[] = []

  constructor() {
    const cropier = new Cropier()
    cropier.rematch(4, 5)
    this.hands = cropier.hands
    // console.log(cropier.hands)

    // const rule = new Rule()
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

  play() {
    const cropier = new Cropier()
    cropier.rematch(4, 5)
    this.hands = cropier.hands
  }
}
