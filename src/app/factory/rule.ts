import { INDEX_OF_RANK, MATRIX_OF_RANK, Rank } from '../constant/ranks'
import { INDEX_OF_SUITS, MATRIX_OF_SUITS, Suits } from '../constant/suits'
import { Card } from './card'

export class Rule {
  constructor() {}

  public isOnePair(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    const rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })
    return rankCombinations.filter((comb) => comb === 2).length === 1
  }

  public isTwoPair(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    const rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })
    return rankCombinations.filter((comb) => comb === 2).length === 2
  }

  public isTreeOfKind(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    const rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })
    return rankCombinations.filter((comb) => comb === 3).length === 1
  }

  public isStraight(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    let rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })

    if (rankCombinations.some((com) => com > 1)) return false

    const firstIndex = rankCombinations.findIndex((com) => com === 1)

    if (firstIndex === 0 && rankCombinations[12] === 1) {
      rankCombinations = [1, ...rankCombinations]
    }

    if (
      cards.some((el, idx) => {
        return rankCombinations[firstIndex + idx] === 0
      })
    ) {
      return false
    }

    return true
  }

  public isFlush(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    const suitsCombinations = matrix.map((ranks, index) => {
      let count = 0
      ranks.forEach((rank) => {
        count += rank
      })
      return count
    })

    return suitsCombinations.some((com) => com === 5)
  }

  public isFullHouse(cards: Card[]): boolean {
    return this.isOnePair(cards) && this.isTreeOfKind(cards)
  }

  public isFourOfKind(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    const rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })

    return rankCombinations.filter((comb) => comb === 4).length === 1
  }

  public isStraightFlush(cards: Card[]): boolean {
    return this.isStraight(cards) && this.isFlush(cards)
  }

  public isRoyalFlush(cards: Card[]): boolean {
    const matrix = this.assignToMatrix(cards)
    let rankCombinations = MATRIX_OF_RANK.map((el, index) => {
      let count = 0
      matrix.forEach((rank) => {
        count += rank[index]
      })
      return count
    })

    const firstIndex = rankCombinations.findIndex((com) => com === 1)
    const isRoyal = firstIndex === 8
    return isRoyal && this.isStraightFlush(cards)
  }

  public assignToMatrix(cards: Card[]) {
    let matrix: number[][] = [...MATRIX_OF_SUITS].map(() => [...MATRIX_OF_RANK])
    cards.forEach((card) => {
      const suitIndex = INDEX_OF_SUITS.findIndex(
        (suits: Suits) => card.suits === suits
      )
      const rankIndex = INDEX_OF_RANK.findIndex(
        (rank: Rank) => card.rank === rank
      )

      matrix[suitIndex][rankIndex] = 1
    })

    return matrix
  }
}
