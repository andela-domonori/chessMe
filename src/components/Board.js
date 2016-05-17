import React from 'react-native'

const {
  Component,
  StyleSheet,
  View,
  Text,
  ListView
}  =  React

import Dimensions from 'Dimensions'
import Officials from './Officals'
const {height, width}  = Dimensions.get('window')

class Board extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(Officials)
    }
  }

  render() {
    const evenRows = () => {}
    const oddRows = () => {}
    return (
      <View style={board.wrapper}>
        <ListView
          contentContainerStyle={board.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionData, rowId) => {
            console.log(rowData, sectionData, rowId, 'rowdata')
            return (
              <View
                style={[board.container, {
                  backgroundColor: (((parseInt(rowId) + 1) % 2) === 0) ? '#aaa' : 'white'
                }]}
              >
               {
                rowData.map((piece, i) => {
                  return piece ? (
                    <View
                      style={[board.row, {
                        backgroundColor: (((parseInt(rowId) + 1) % 2) === 0) ? '#aaa' : 'white'
                      }]}
                      key={i}
                    >
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


const board = StyleSheet.create({
  wrapper: {
    backgroundColor: 'purple',
    width,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  row: {
    width: (width/8),
    height: (height/16),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  emptySquares: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: (width/8),
    height: (height/16),
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


export default Board
