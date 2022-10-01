import { toArray } from 'src/utils/array'
import { Deck } from './deck'
import { Hand } from './hand'

export class Cropier {
  public hands: Hand[] = []

  constructor() {}

  rematch(handCount: number, cardCount: number) {
    this.hands = []
    this.hands = this.give(handCount, cardCount)
    this.pickWinner()
  }

  private give(handCount: number, cardCount: number) {
    const deck = new Deck()
    const shuffleCard = deck.shuffle()

    return toArray(handCount).map(() => {
      const hand = new Hand()
      toArray(cardCount).forEach(() => {
        hand.takeCard(shuffleCard[0])
        shuffleCard.shift()
      })
      return hand
    })
  }

  private pickWinner() {
    const cardValues = this.hands.map((hand) => hand.score)
    const max = Math.max(...cardValues)
    const index = cardValues.indexOf(max)
    this.hands[index].winner = true
  }
}
