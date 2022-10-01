import { toArray } from 'src/utils/array'

export enum Suits {
  SPADES = '♠',
  HEARTS = '♥ ',
  CLUBS = '♣',
  DIAMONDS = '♦',
}

export const NUM_OF_SUITS = Object.keys(Suits).length
export const MATRIX_OF_SUITS = toArray(NUM_OF_SUITS)
export const INDEX_OF_SUITS = Object.values(Suits)
