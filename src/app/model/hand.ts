import { Card } from "./card";

export class Hand {
  public cards: Card[] = [] 

  public takeCard(card: Card) {
    console.log(card)
    this.cards.push(card)
  }
}