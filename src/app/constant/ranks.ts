import { toArray } from 'src/utils/array'

export enum Rank {
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
  _9 = '9',
  _10 = 'T',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K',
  ACE = 'A',
}

export const NUM_OF_RANK = Object.keys(Rank).length
export const MATRIX_OF_RANK = toArray(NUM_OF_RANK)
export const INDEX_OF_RANK = Object.values(Rank)
