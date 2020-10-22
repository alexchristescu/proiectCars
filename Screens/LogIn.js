import React from "react"
import {View, StyleSheet, TouchableOpacity, Platform, Dimensions, Text, Image, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from "react-native-animatable";
import LinearGradient from 'react-native-linear-gradient';
//import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { Icon } from 'react-native-elements';


const LogIn = ({navigation}) => {
    const [user, onChangeUser] = React.useState('');
    const [pass, onChangePass] = React.useState('');
    return (
        <KeyboardAvoidingView
            style={styles.container}
        behavior="padding">


            <View style={{width: '100%', height : '50%', backgroundColor: '#2652bf', alignItems:"center",justifyContent:"center"}}>
                <View style={styles.dot}>
                    <Image source={require("../images/iconfinder_home-house_2932347.png")} />
                </View>
            </View>


            <View style={{width: '100%', height : '50%', backgroundColor: '#ffffff',  }}>
                <TouchableOpacity style={styles.textSignUp} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{textAlign:"center"}} >Register</Text>
                </TouchableOpacity>

            </View>

            <View style={{elevation: 5, borderRadius : 30, position: 'absolute', top : '40%', width: 350, height : 360, backgroundColor: '#ffffff'}}>
                <View style={styles.footer}>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Username</Text>

                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                placeholder="username"
                                onChangeText={text => onChangeUser(text)}
                                value={user}
                            />
                        </View>
                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="password"
                                       onChangeText={text => onChangePass(text)}
                                       value={pass}
                                       secureTextEntry={true}
                            />
                        </View>

                    </View>
                </View>
            </View>

            <View style={{elevation:7, position:'absolute', width: 200, height : 70, borderRadius:50, bottom:"5%",  backgroundColor: '#2652bf', alignItems:"center", justifyContent:"center"}}>
               <TouchableOpacity  onPress={() => navigation.navigate("Main")}>
                   <Text style={styles.text}>LogIn</Text>
               </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>

    )
}
{/*<View style={styles.header}>*/}
{/*    <View style={styles.dot}></View>*/}

{/*</View>*/}
{/*<View style={styles.footer}>*/}
{/*    <View style={{padding:50}}>*/}
{/*    <Text style={styles.text_footer}>Username</Text>*/}
{/*    <View style={styles.action}>*/}
{/*    </View>*/}
{/*    </View>*/}
{/*    <View style={{padding:50}}>*/}
{/*    <Text style={styles.text_footer}>Password</Text>*/}
{/*    <View style={styles.action}>*/}

{/*    </View>*/}

{/*    </View>*/}
{/*</View>*/}

const styles= StyleSheet.create({
    container:{
        flex:1,

        alignItems: 'center',
    },
    inputIcon:{
        fontSize: 20,
        marginLeft:15,
        justifyContent: 'center',
        color:'black'
    },
    header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer:{

        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical:30,


    },
    text:{
        color:"#fff",
        fontWeight: 'bold',
        fontSize: 30,

    },
    textSignUp:{
        top:"92%",
        textAlign:"center",
        fontWeight: 'bold'
    },

    dot: {
    height: "37%",
    width: "37%",
    backgroundColor: "#f2f2f2",
    borderRadius: 70,
    alignItems:"center",
    justifyContent:"center",

    },
    text_footer:{
        color:"#0352fc",
        fontSize: 18,
        padding:1,
        textAlign:"left"
    },
    action:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 10,


    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS === "android" ? 0 : -12,
        paddingLeft: 10,
        color:"#05375a"
    },
    button:{
        alignItems: "center",

    },
    signIn:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign:{
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default LogIn
