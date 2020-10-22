import React, { Component } from 'react';

import {
    Platform,
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Image,
} from 'react-native';

class Accordion_Panel extends Component {

    constructor() {

        super();

        this.state = {

            updated_Height: 0,


        }
    }

    componentWillReceiveProps(update_Props) {
        if (update_Props.item.expanded) {
            this.setState(() => {
                return {
                    updated_Height: null
                }
            });
        }
        else {
            this.setState(() => {
                return {
                    updated_Height: 0
                }
            });
        }
    }

    shouldComponentUpdate(update_Props, nextState) {

        if (update_Props.item.expanded !== this.props.item.expanded) {

            return true;

        }

        return false;

    }

    render() {

        return (

            <View style={styles.Panel_Holder}>

                <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>

                    <Text style={styles.Panel_Button_Text}>{this.props.item.title}  </Text>
                    <Text style={styles.Panel_Button_Text}>{this.props.item.price}</Text>
                </TouchableOpacity>

                <View style={{ height: this.state.updated_Height, overflow: 'hidden',flexDirection:"row" }}>

                    <Text style={styles.Panel_text}>


                        {this.props.item.body.map((body) => {
                            return(<View style={{width:400,flexDirection:"row",  alignItems:"center", justifyContent:"center"}}>

                                <View style={{width:100,}}>
                                 <Text style={{bottom:50, fontSize:25, fontWeight:"bold"}}>
                                     {body.class}
                                 </Text>
                                <Text>
                                    <Image  source={body.passengerimg}/>{body.passengerdesc}
                                </Text>
                                <Text>
                                    <Image source={body.capacityimg}/>{body.capacitydesc}
                                </Text>
                                    <Text>
                                        <Image source={body.gasimg}/>{body.gasdesc}
                                    </Text>
                                </View>
                                <View style={{width:300,height:300,alignItems:"center",justifyContent:"center"}}>
                                    <Image style={{  flex: 1, width: '100%', height:  '1000%',resizeMode: 'contain'}} source={body.image}/>
                                </View>



                                </View>
                            )
                        })}



                        </Text>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1 ,
        justifyContent: 'center',

        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    Panel_text: {

        fontSize: 18,
        color: '#000',
        padding: 10,

    },

    Panel_Button_Text: {

        color: '#000',
        fontSize: 21,

    },

    Panel_Holder: {
        borderWidth: 1,
        borderRadius:10,
        elevation:1,
        backgroundColor:"#d0d4d9",
        borderColor: '#2d6ccf',
        marginVertical: 5,
        width:400,



    },

    Btn: {
        padding: 10,
        elevation: 4,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent: "space-between"
    },

    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    }

});


export default Accordion_Panel;
