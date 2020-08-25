import React from "react"
import { View,Text, FlatList} from "react-native"

export default class Fetch2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }
  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    this.setState({ loading: true })
    fetch(this.state.url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pokemon: res.result,
          url: res.next,
          loading: false
        })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <Text>Carregando pokemon</Text>
        </>
      )
    }
    return (
      <View style={{flex:1, paddingTop: 50, paddingLeft:5}}>
      <Text>pokemon</Text>
        <FlatList
            data={this.state.pokemon}
                renderItem={
                    ({item}) => <Text>{item.name}</Text>
                }
                keyExtractor={(item,index) => index.toString()}
        />
      </View>
    )
  }
}
