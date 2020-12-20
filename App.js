import React , {useState} from 'react';
import { Text, View, Button } from 'react-native';

/*
export default function App() {
  return (
    <View>
      <Text>
        hello..
      </Text>
    </View>
  );
}
*/

class App extends React.Component {

  constructor(){
    super();
    this.state={
      year:2021,
      name:"Hans Arias",
      message:"Mi gran proyecto de Vida"
    }
  }

  render(){
    return (
      <View style={{margin:30}}>
        <Text style={{fontSize:60, textAlign:'center', color:'skyblue'}}>
          Hola, {this.state.name}
        </Text>
        <Text style={{fontSize:30, textAlign:'center', color:'#aaa'}}>
          {this.state.message}
        </Text>
        <Text style={{fontSize:80, textAlign:'center', color:'#888', 
          fontWeight:'bold' }}>
          {this.state.year}
        </Text>
        <Button title="Ingresar.." />       
      </View>
    )
  }

}

export default App
