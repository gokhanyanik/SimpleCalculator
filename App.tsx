import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const[total,setTotal]=useState("");

  const handleButtonPress=(value:string)=>{
    if(value === "c"){
      setTotal("")
    }else if(value==="back"){
      setTotal(total.slice(0,-1))
    }else if(value==="="){
      try{
        const result=eval(total);
        setTotal(String(result));
      }catch(error){
        setTotal("error");
      }
    }else if(value==="+"){
      setTotal(total+"+")
      
    }else if(value==="-"){
      setTotal(total+"-")
      
    }else if(value==="*"){
      setTotal(total+"*")
      
    }else if(value==="/"){
      setTotal(total+"/")
      
    }else{
      setTotal(total+value)
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.screen} showSoftInputOnFocus={false} value={total}></TextInput>
      <View style={styles.button_row}>
        <TouchableOpacity style={styles.yellow_button} onPress={()=>handleButtonPress("c")}>
          <Text style={styles.button_text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_button} onPress={()=>handleButtonPress("back")}>
          <Text style={styles.button_text}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress("*")}>
          <Text style={styles.button_text}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("7")}>
          <Text style={styles.button_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("8")}>
          <Text style={styles.button_text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("9")}>
          <Text style={styles.button_text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress("/")}>
          <Text style={styles.button_text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("4")}>
          <Text style={styles.button_text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("5")}>
          <Text style={styles.button_text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("6")}>
          <Text style={styles.button_text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress("+")}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("1")}>
          <Text style={styles.button_text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("2")}>
          <Text style={styles.button_text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("3")}>
          <Text style={styles.button_text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress("-")}>
          <Text style={styles.button_text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress(".")}>
          <Text style={styles.button_text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button} onPress={()=>handleButtonPress("0")}>
          <Text style={styles.button_text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_button} onPress={()=>handleButtonPress("=")}>
          <Text style={styles.button_text}>=</Text>
        </TouchableOpacity>
       
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14ecf6",
    justifyContent:"flex-end",
    alignItems:"center",
    paddingBottom:20,
    gap:10,

  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",

  },
  screen: {
    backgroundColor: "#14ecf6",
    width: "100%",
    height: 150,
    textAlign: "right",
    color:"white",
    fontSize:30
  },
  button_row: {
    flexDirection: "row",
    gap:10,
    width:"90%"
  },
  yellow_button: {
    flex: 1,
    height: 80,
    backgroundColor: "#FF9900",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation:15,
  },
  back_button: {
    flex: 2,
    height: 80,
    backgroundColor: "#CD00B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation:15,
  },
  other_button: {
    flex: 1,
    height: 80,
    backgroundColor: "#CD00B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation:15,
  },
  button_text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff"
  },
  number_button:{
    flex:1,
    height: 80,
    backgroundColor: "#009bbd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation:15,
  }

});

export default App;
