import { Rank } from "../constant/ranks"
import { Suits } from "../constant/suits"
import { Card } from "./card"

export class Deck {
  public cards: Card[] = []

  constructor() {
    this.render()
  }

  public shuffle() {
    return this.cards
      .map(((card: Card)=>( { card, sort: Math.random()})))
      .sort((a: any,b: any)=> a.sort - b.sort)
      .map(({card}:any)=> card)
  }

  private render() {
    const ranks = Object.values(Rank)
    const suits = Object.values(Suits)

    suits.forEach((suit: Suits) => {
      ranks.forEach((rank: Rank) => {
        this.cards.push(new Card(rank,suit))
      })
    })
  }
}