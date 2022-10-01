import { Color } from '../constant/color'
import { INDEX_OF_RANK, Rank } from '../constant/ranks'
import { INDEX_OF_SUITS, Suits } from '../constant/suits'

export class Card {
  public rank: Rank
  public suits: Suits
  public color: Color = Color.BLACK
  public rankValue: number = 0
  public suitsValue: number = 0
  public value: number = 0

  constructor(value: Rank, suits: Suits) {
    this.rank = value
    this.suits = suits
    this.setColor()
    this.setValues()
  }

  private setColor(): void {
    if (this.suits === Suits.HEARTS || this.suits === Suits.DIAMONDS) {
      this.color = Color.RED
    } else {
      this.color = Color.BLACK
    }
  }

  private setValues() {
    this.suitsValue =
      INDEX_OF_SUITS.findIndex((suits) => suits === this.suits) + 1
    this.rankValue = INDEX_OF_RANK.findIndex((rank) => rank === this.rank)
    this.value = this.rankValue + this.suitsValue / 10
  }
}
