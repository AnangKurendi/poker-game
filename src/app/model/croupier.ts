import { toArray } from "src/utils/array"
import { Deck } from "./deck"
import { Hand } from "./hand"

export class Cropier {
  public hands: Hand[] = []
  
  constructor(handCount: number, cardCount: number) {
    this.hands = this.give(handCount, cardCount)
  }

  public give(handCount: number, cardCount: number) {
    const deck = new Deck()
    const shuffleCard = deck.shuffle()

    return toArray(handCount).map(()=> {
      const hand = new Hand()
      toArray(cardCount).forEach(()=> {
        hand.takeCard(shuffleCard[0])
        shuffleCard.shift()
      })
      return hand
    })
  }
  
}