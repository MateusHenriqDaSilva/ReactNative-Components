import React from "react";
import { View, Text, FlatList } from "react-native";

export default class Fetch3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson.movies,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <Text>Carregando pokemon</Text>
        </>
      );
    }
    let movies = this.state.dataSource.map((val, key) => {
      return (
        <View key={key}>
          <Text>{val.title}</Text>
        </View>
      );
    });
    return (
      <View style={{ flex: 1, paddingTop: 50, paddingLeft: 5 }}>
        <Text></Text>
        {movies}
      </View>
    );
  }
}
