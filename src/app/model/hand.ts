import { Sets } from '../constant/sets'
import { Card } from './card'
import { Rule } from './rule'

export class Hand extends Rule {
  public cards: Card[] = []
  public setName: Sets = Sets.NOTHING
  constructor() {
    super()
  }

  public takeCard(card: Card): void {
    console.log(card)
    this.cards.push(card)

    if (this.cards.length === 5) {
      this.setName = this.calculateSets()
    }
  }

  private calculateSets() {
    if (this.isRoyalFlush(this.cards)) {
      return Sets.ROYAL_FLUSH
    }

    if (this.isStraightFlush(this.cards)) {
      return Sets.STRAIGHT_FLUSH
    }

    if (this.isFourOfKind(this.cards)) {
      return Sets.FOUR_OF_KIND
    }

    if (this.isFullHouse(this.cards)) {
      return Sets.FULL_HOUSE
    }

    if (this.isFlush(this.cards)) {
      return Sets.FLUSH
    }

    if (this.isStraight(this.cards)) {
      return Sets.STRAIGHT
    }

    if (this.isTreeOfKind(this.cards)) {
      return Sets.TREE_OF_KIND
    }

    if (this.isTwoPair(this.cards)) {
      return Sets.TWO_PAIR
    }

    if (this.isOnePair(this.cards)) {
      return Sets.ONE_PAIR
    }

    return Sets.NOTHING
  }
}
