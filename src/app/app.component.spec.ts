import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { Rule } from './factory/rule'
import { Card } from './factory/card'
import { Rank } from './constant/ranks'
import { Suits } from './constant/suits'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  })

  it(`isOnePair should be true ['T♦', 'T♣', 'A♥ ', '7♥ ', '2♠']`, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank.ACE, Suits.HEARTS),
      new Card(Rank._7, Suits.HEARTS),
      new Card(Rank._2, Suits.SPADES),
    ]

    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isOnePair(cards)).toEqual(true)
  })

  it(`isTwoPair should be true & is isOnePair sould be false ['T♦', 'T♣', 'A♥ ', '7♥ ', 'A♠']`, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank.ACE, Suits.HEARTS),
      new Card(Rank._7, Suits.HEARTS),
      new Card(Rank.ACE, Suits.SPADES),
    ]

    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isTwoPair(cards)).toEqual(true)
    expect(rule.isOnePair(cards)).toEqual(false)
  })

  it(`
    isTreeOfKind should be false &
    isFullHouse should be true &
    isOnePair sould be true
    ['T♦', 'T♣', 'A♥ ', 'A♥ ', 'A♠']
  `, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank.ACE, Suits.CLUBS),
      new Card(Rank.ACE, Suits.HEARTS),
      new Card(Rank.ACE, Suits.SPADES),
    ]
    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isFullHouse(cards)).toEqual(true)
    expect(rule.isTreeOfKind(cards)).toEqual(true)
    expect(rule.isOnePair(cards)).toEqual(true)
  })

  it(`
    isFullHouse should be true &
    ['T♦', 'T♣', '3♥ ', '3♥ ', '3♠']
  `, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank._3, Suits.DIAMONDS),
      new Card(Rank._3, Suits.HEARTS),
      new Card(Rank._3, Suits.SPADES),
    ]
    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isFullHouse(cards)).toEqual(true)
    expect(rule.isTreeOfKind(cards)).toEqual(true)
    expect(rule.isOnePair(cards)).toEqual(true)
  })

  it(`
    isFullHouse should be true &
    ['T♦', 'T♣', '3♦', '3♥ ', '3♠']
  `, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._10, Suits.DIAMONDS),
      new Card(Rank._10, Suits.CLUBS),
      new Card(Rank._3, Suits.CLUBS),
      new Card(Rank._3, Suits.HEARTS),
      new Card(Rank._3, Suits.SPADES),
    ]
    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isFullHouse(cards)).toEqual(true)
    expect(rule.isTreeOfKind(cards)).toEqual(true)
    expect(rule.assignToMatrix(cards)).toEqual([
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    ] as any[])
  })

  it(`
    isStraight should be true &
    is isOnePair sould be false
    ['T♦', 'T♣', 'A♥ ', 'A♥ ', 'A♠']
  `, () => {
    const rule = new Rule()
    const cards: Card[] = [
      new Card(Rank._2, Suits.DIAMONDS),
      new Card(Rank._3, Suits.CLUBS),
      new Card(Rank._4, Suits.HEARTS),
      new Card(Rank._5, Suits.HEARTS),
      new Card(Rank.ACE, Suits.SPADES),
    ]
    console.log(cards.map((card) => card.rank + card.suits))
    expect(rule.isStraight(cards)).toEqual(true)
    expect(rule.isOnePair(cards)).toEqual(false)
  })
})
