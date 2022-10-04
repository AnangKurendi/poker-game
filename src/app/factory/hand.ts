import { Sets } from '../constant/sets'
import { Card } from './card'
import { Rule } from './rule'

export class Hand extends Rule {
  public cards: Card[] = []
  public setName: string = Sets.NOTHING.name
  public score: number = 0
  public winner: boolean = false
  constructor() {
    super()
  }

  public takeCard(card: Card): void {
    // console.log(card)
    this.cards.push(card)

    if (this.cards.length === 5) {
      const sets = this.calculateSets()
      console.log(sets)
      this.setName = sets.name
      this.score = sets.score
    }
  }

  private calculateSets() {
    if (this.isRoyalFlush(this.cards)) {
      return {
        name: Sets.ROYAL_FLUSH.name,
        score: this.sumScore(this.cards, Sets.ROYAL_FLUSH.score),
      }
    }

    if (this.isStraightFlush(this.cards)) {
      return {
        name: Sets.STRAIGHT_FLUSH.name,
        score: this.sumScore(this.cards, Sets.STRAIGHT_FLUSH.score),
      }
    }

    if (this.isFourOfKind(this.cards)) {
      return {
        name: Sets.FOUR_OF_KIND.name,
        score: this.sumScore(this.cards, Sets.FOUR_OF_KIND.score),
      }
    }

    if (this.isFullHouse(this.cards)) {
      return {
        name: Sets.FULL_HOUSE.name,
        score: this.sumScore(this.cards, Sets.FULL_HOUSE.score),
      }
    }

    if (this.isFlush(this.cards)) {
      return {
        name: Sets.FLUSH.name,
        score: this.sumScore(this.cards, Sets.FLUSH.score),
      }
    }

    if (this.isStraight(this.cards)) {
      return {
        name: Sets.STRAIGHT.name,
        score: this.sumScore(this.cards, Sets.STRAIGHT.score),
      }
    }

    if (this.isTreeOfKind(this.cards)) {
      return {
        name: Sets.TREE_OF_KIND.name,
        score: this.sumScore(this.cards, Sets.TREE_OF_KIND.score),
      }
    }

    if (this.isTwoPair(this.cards)) {
      return {
        name: Sets.TWO_PAIR.name,
        score: this.sumScore(this.cards, Sets.TWO_PAIR.score),
      }
    }

    if (this.isOnePair(this.cards)) {
      return {
        name: Sets.ONE_PAIR.name,
        score: this.sumScore(this.cards, Sets.ONE_PAIR.score),
      }
    }

    return {
      name: Sets.NOTHING.name,
      score: this.sumScore(this.cards, Sets.NOTHING.score),
    }
  }

  private sumScore(cards: Card[], combinationScore: number) {
    const cardScore: number = cards.map((card) => card.value).reduce((a, b) => a + b, 0)
    return combinationScore + cardScore
  }
}
