import React from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  loadUsuario = () => {
      fetch("https://randomuser.me/api/?result=100").then( res => res.json())
        .then( res => {
            this.setState({
                data: res.results || []
            })
        })
  }

  componentDidMount(){
      this.loadUsuario();
  }
  render() {
    return (
        <>
        <View>
            <FlatList 
                data={this.state.data}
                renderItem={({item}) => (
                    <View style={styles.line}>
                        <Image 
                            source={{ uri: item.picture.thumbnail}}
                            style={styles.avatar}
                        />
                        <View style={styles.info}>
                            <Text style={styles.email}>{item.email}</Text>
                            <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={
                    item => item.email
                }
            />
        </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    line: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: "column",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    name: {
        fontSize: 12
    },
    email: {
        fontSize: 14,
        height: 40
    },
})