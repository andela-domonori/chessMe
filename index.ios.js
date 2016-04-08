/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import Dimensions from 'Dimensions'

let {height, width}  = Dimensions.get('window')
import {List, Range, is} from 'immutable'

// import Board from './src/components/Board'


class Board extends Component {
  constructor(props) {
    super(props)
    this.piecesToRow = this.piecesToRow.bind(this)

    //Board creation
    const pieces = ['rook','knight','bishop','king','queen','bishop','knight','rook']
    const whitePieces = pieces
    const blackPieces = pieces
    const emptyRow = Range(0,8).map(() => null).toArray()
    const pawnRow = emptyRow.map(() => 'pawn')
    const whitePiecesRow = this.piecesToRow(whitePieces, true)
    const blackPiecesRow = this.piecesToRow(blackPieces, false)
    const whitePawnRow = this.piecesToRow(pawnRow, true)
    const blackPawnRow = this.piecesToRow(pawnRow, false)
    const board = [
      blackPiecesRow,
      blackPawnRow,
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      whitePawnRow,
      whitePiecesRow
    ]
  console.log(board, 'board')
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => is(r1, r2)})
    this.state = {
      dataSource: ds.cloneWithRows(board)
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
      <View style={board.wrapper}>
        <ListView
          style={board.list}
          dataSource={this.state.dataSource}
          renderRow={rowData => {
            return (
              <View style={board.container}>
               {
                rowData.map((piece, i) => {
                  return piece ? (
                    <View style={board.row} key={i}>
                        <Text>{piece.type}</Text>
                    </View>
                  ) : (
                    <View style={board.emptySquares} key={i}>
                      <Text>empty</Text>
                    </View>
                  )
                })
               }
              </View>
            )
          }}
        />
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




const board = StyleSheet.create({
  wrapper: {
    backgroundColor: 'purple',
    width,
  },
  container: {
    backgroundColor: 'green',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
  },
  emptySquares: {
    backgroundColor: 'red',
  },
  list: {
  }
});


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
  }
});

AppRegistry.registerComponent('chessMe', () => chessMe);
