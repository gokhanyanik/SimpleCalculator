import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ToastWithRef = React.forwardRef((props, ref:any) => (
  <Toast {...props} ref={ref} />
));

function App(): React.JSX.Element {
const showToast=()=>{
  Toast.show({
    type:'error',
    position:'top',
    text1:'hatalı tuşlama yaptınız...',
    visibilityTime:3000,
    autoHide:true,
    topOffset:30,
  })
}
// Hesap makinesindeki girilen değerleri tutan bir state oluşturduk.
  const[total,setTotal]=useState("");
// kullanıcının yapacağı işlemleri gerçekleştirmek için aşağıdaki fonk.u oluşturduk.
  const handleButtonPress=(value:string)=>{
    //İlk koşul eğer c' ye basıldığında setTotal değerini boş yap.
    if(value === "c"){
      setTotal("")
    }else if(value==="back"){
      //ikinci koşul eğer back tusuna basılırsa geri gitmesi için slice metodu ile bir önceki ifayi 
      //siler ve yeni oluşan değeri setTotal' e atar.
      setTotal(total.slice(0,-1))
    }else if(value==="="){
      //üçüncü koşul herhangi bir matematiksel işlem kullanıldığında sonucu bulmak için eval fonk.
      //ile total değişkeninin içindeki değeri(sitring) javascript kodu olarak işleme alır ve çıkan sonucu
      // result değişkenine stringe çevirerek atama yapar.Eğer hata yakalarsa catch bloğu hata mesajı verir.
      try{
        const result=eval(total);
        setTotal(String(result));
      }catch(error){
        showToast();
        setTotal("error");
        
        
      }
    }else if(value==="+"){
      //dördüncü koşulda total değerine '+' ekleyerek değeri güncelleriz
      //(örneğin 5 ve ardından + ya basıldı total değeri '5+'olacak.ardından 8' e basalım yeni değer
      //'5+8' olur.)
      setTotal(total+"+")
      
    }else if(value==="-"){
      setTotal(total+"-")
      
    }else if(value==="*"){
      setTotal(total+"*")
      
    }else if(value==="/"){
      setTotal(total+"/")
      
    }else{
      // Burası eğer işlem için bir tuşa basılmadığı zaman çalışır.Yani rakamları yan yana yazmak 
      // için bu satırı kullanır.
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
        <Toast ref={(ref)=>Toast.setRef(ref)}/>
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
