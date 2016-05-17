import {List, Range, is} from 'immutable'

const piecesToRow = (pieces, white) => pieces.map(x => ({white, type: x }) )

//create chess Officals
const pieces = ['rook','knight','bishop','queen','king','bishop','knight','rook']
const whitePieces = pieces
const blackPieces = pieces
const emptyRow = Range(0,8).map(() => null).toArray()
const pawnRow = emptyRow.map(() => 'pawn')
const whitePiecesRow = piecesToRow(whitePieces, true)
const blackPiecesRow = piecesToRow(blackPieces, false)
const whitePawnRow = piecesToRow(pawnRow, true)
const blackPawnRow = piecesToRow(pawnRow, false)

const Officials = [
  blackPiecesRow,
  blackPawnRow,
  emptyRow,
  emptyRow,
  emptyRow,
  emptyRow,
  whitePawnRow,
  whitePiecesRow
]

export default Officials
