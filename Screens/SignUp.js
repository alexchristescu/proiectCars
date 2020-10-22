import React,{useState, useEffect, useRef,Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Image, TextInput} from 'react-native';

export default  class SignUp extends  Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass:'',
            rpass:''

        }



    }


    // const [email,onChangeEmail] = useState("")
    // const [pass,onChangePass] = useState("")
    // const [rpass,onChangeRpass] = useState("")
    //
    // const PassMatch = (a,b) =>{
    //
    //     a !== b ? alert(rpass) : null;
    // }

     PassMatch  (a,b) {
        if (a !== b) {

            alert("da")

        }else{
            alert("nu")
        }


}



   render() {



    return (
        <KeyboardAvoidingView  style={styles.container} behavior="padding">
            <View style={{width:"100%", height:"50%", backgroundColor:"#2652bf", justifyContent:"center", alignItems:"center"}}>
                <View style={styles.dot}>
                    <Image source={require("../images/iconfinder_home-house_2932347.png")}/>
                </View>

            </View>

            <View style={{width:"100%", height:"50%", backgroundColor:"#fff"}}>


            </View>

            <View style={{elevation: 5, borderRadius : 30, position: 'absolute', top : '32%', width: 350, height : 400, backgroundColor: '#ffffff'}}>
                <View style={styles.footer}>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Username</Text>

                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="email"
                                       onChangeText={text => this.setState({email:text})}
                                       value={this.state.email}
                            />
                        </View>
                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="password"
                                       onChangeText={text => this.setState({pass:text})}
                                       value={this.state.pass}
                                       secureTextEntry={true}

                            />
                        </View>

                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Retypepassword</Text>
                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="retypepassword"
                                       onChangeText={text => this.setState({rpass: text})}
                                       value={this.state.rpass}
                                       secureTextEntry={true}

                            />
                        </View>

                    </View>

                </View>

            </View>

            <View style={{elevation:7, position:'absolute', width: 200, height : 70, borderRadius:50, top:600,  backgroundColor: '#2652bf', alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity onPress={ () => {this.state.pass !== this.state.rpass ? alert("nu") : this.props.navigation.navigate("Home")}}>
                    <Text style={styles.text}>LogIn</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}}

const styles = StyleSheet.create({
    dot:{
        width:"35%",
        height:"35%",
        borderRadius:70,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        bottom:"20%"
    },
    container:{

        justifyContent: "center",
        alignItems: "center",
    },
    footer:{

        flex:3,
        bottom: "7%",
        backgroundColor:"#fff",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical:30,


    },
    action:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 10,


    },
    text_footer:{
        color:"#0352fc",
        fontSize: 18,
        padding:1,
        textAlign:"left"
    },
    text:{
        color:"#fff",
        fontWeight: 'bold',
        fontSize: 30,

    },

})

