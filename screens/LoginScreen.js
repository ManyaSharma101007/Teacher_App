import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,Alert,Image} from 'react-native'
import  * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            email : "",
            password : "",
        }
    }

    login = async(email,password) => {
        if(email && password){
            try {
             const response = await firebase.auth().signInWithEmailAndPassword(email.password)
             if(response){
                 this.props.navigation.navigate("Transaction")
             }    
            }
            catch(error){
              switch(error.code){
                case "auth/user-not-found" :
                   Alert.alert("User doesn't exist")
                   break;

                case "auth/invalid-email" :
                   Alert.alert("Invalid Email or Password") 
                   break; 
              }
            }
        }

        else {
            Alert.alert("Enter the Email Id and Password")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                    <Image 
                        style = {{width : 150, height : 150}}
                        source = { require("../assets/booklogo.jpg")}
                    />
                    <Text> Student Tracking App </Text>
                </View>
                <View>
                    <TextInput 
                        style = {styles.loginBox}
                        placeholder = "abc@example.com"
                        keyboardType = "email-address"
                        onChangeText = {(text) => {
                            this.setState ({email : text})
                        }}
                    />
                </View>
                <View>
                    <TextInput 
                        style = {styles.loginBox}
                        placeholder = "Enter your password"
                        onChangeText ={(text) => {
                            this.setState({password : text})
                        }}
                        secureTextEntry = {true}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                     style = {{width : 80, height : 25, borderRadius : 6, padding : 10, margin : 10, borderWidth : 1.5}}
                     onPress = { () => {
                        this.login(this.state.email, this.state.password)
                     }}>
                      <Text style = {{textAlign = "center"}}> Login </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({ 
    loginBox: { 
        width: 300, 
        height: 40, 
        borderWidth: 1.5, 
        fontSize: 20, 
        margin:10, 
        paddingLeft:10 }, 
    })