import { Color } from "../constant/color"
import { Rank } from "../constant/ranks"
import { Suits } from "../constant/suits"

export class Card {
  public value: Rank
  public suits: Suits
  public color: Color = Color.BLACK

  constructor(value: Rank,suits: Suits) {
    this.value = value
    this.suits = suits
    this.setColor()
  }

  private setColor (): void {
    if (this.suits === Suits.HEARTS || this.suits === Suits.DIAMONDS) {
      this.color = Color.RED;
    } else {
      this.color = Color.BLACK;
    }
  }
}