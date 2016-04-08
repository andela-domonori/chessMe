/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {List, Range} from 'immutable'

// import Board from './src/components/Board'


class Board extends Component {
  constructor(props) {
    super(props)
    this.piecesToRow = this.piecesToRow.bind(this)

    //Board creation
    const pieces = List(['rook','knight','bishop','king','queen','bishop','knight','rook'])
    const whitePieces = pieces
    const blackPieces = pieces
    const emptyRow = Range(0,8).map(() => null)
    const pawnRow = emptyRow.map(() => 'pawn')
    const whitePiecesRow = this.piecesToRow(whitePieces, true)
    const blackPiecesRow = this.piecesToRow(blackPieces, false)
    const whitePawnRow = this.piecesToRow(pawnRow, true)
    const blackPawnRow = this.piecesToRow(pawnRow, false)
    const board = List([
      blackPiecesRow,
      blackPawnRow,
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      whitePawnRow,
      whitePiecesRow
    ])

    this.state = {
      board
    }
  }

  piecesToRow(pieces, white) {
    return pieces.map(x => {
      return {
       white,
       type: x
      }
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Board View
        </Text>
      </View>
    )
  }
}


class chessMe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('chessMe', () => chessMe);
