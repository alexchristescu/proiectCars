import React, {Component} from "react"
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, Dimensions, UIManager, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Accordion_Panel from '../Components/AccordionPanel';
import Modal from 'react-native-modal';

import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


class MainScreen extends Component  {
    constructor() {
        super();
        if (Platform.OS === 'android') {

            UIManager.setLayoutAnimationEnabledExperimental(true)

        }



        const array = [

            { expanded: false, title: "Volskwagen Polo", price:"$ 13.30/day", body: [{
                class:"compact",
                image: require("../volskwagenpolo.png"),
                passengerimg:require("../person-silhouette.png"),
                passengerdesc:" 5 persons",
                capacityimg:require("../shopping-bag.png") ,
                capacitydesc:" 4 bags",
                gasimg:require("../gas-station.png"),
                gasdesc:" full to full",
                }] },
            { expanded: false, title: "BMW Series 1", price:"$ 23.50/day",body: [{
                    class:"compact",
                image: require("../bmwseries1.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons",   capacityimg:require("../shopping-bag.png")  ,
                    capacitydesc:" 4 bags", gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",      }] },
            { expanded: false, title: "Audi A1", price:"$ 20.30/day", body: [{
                    class:"compact",
                image: require("../audia1.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons",   capacityimg:require("../shopping-bag.png")  ,
                    capacitydesc:" 4 bags",   gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",    }] },
            { expanded: false, title: "Mercedes-benz ML", price:"$ 33.30/day", body: [{
                    class:"SUV",
                image: require("../mercedesml.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons",   capacityimg:require("../shopping-bag.png")  ,
                    capacitydesc:" 4 bags",   gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",    }] },
            { expanded: false, title: "Renault Pulse",  price:"$ 13.30/day", body: [{
                    class:"compact",
                image: require("../renaultpulse.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons",   capacityimg:require("../shopping-bag.png")  ,
                    capacitydesc:" 4 bags",   gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",    }] },
            { expanded: false, title: "Porsche 911", price:"$ 83.00/day", body: [{
                    class:"sport",
                image: require("../porsche911.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons" ,   capacityimg:require("../shopping-bag.png") ,
                    capacitydesc:" 4 bags",  gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",    }] },
            { expanded: false, title: "Opel Corsa", price:"$ 3.30/day", body: [{
                    class:"compact",
                image: require("../opelcorsa.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons" ,   capacityimg:require("../shopping-bag.png") ,
                    capacitydesc:" 4 bags",  gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",    }] },
            { expanded: false, title: "Mitsubishi Lancer", price:"$ 233.30/day", body: [{
                    class:"sedan",
                image: require("../mitsubishlancer.png"),
                    passengerimg:require("../person-silhouette.png"),passengerdesc:" 5 persons",   capacityimg:require("../shopping-bag.png")  ,
                    capacitydesc:" 4 bags",  gasimg:require("../gas-station.png"),
                    gasdesc:" full to full",  }] },


        ];

        this.state = {
            AccordionData: [...array],
            isModalVisible: false,
            country: "compact"
        }
    }
    // openModal = () =>{
    //     this.setState({
    //         isModalVisible:true
    //     })
    // }
    // closeModal = () =>{
    //     this.setState({
    //         isModalVisible:false
    //     })
    // }
    update_Layout = (index) => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = this.state.AccordionData.map((item) => {

            const newItem = Object.assign({}, item);

            newItem.expanded = false;

            return newItem;
        });

        array[index].expanded = true;

        this.setState(() => {
            return {
                AccordionData: array
            }
        });
    }


    render() {
    return (


            <View style={styles.MainContainer}>

                <View style={styles.header}>

                     {/*<TouchableOpacity style={styles.headerbtn}>*/}
                     {/*   <Text style={{color:"#fff", fontSize: 18,}}> Filter </Text>*/}
                     {/*</TouchableOpacity>*/}

                    <TouchableOpacity style={styles.headerbtn} onPress={() => this.props.navigation.navigate("Filter")}>
                        <Text style={{color:"#fff", fontSize: 18,}}> Filter </Text>
                    </TouchableOpacity>

                    {/*<Modal isVisible={this.state.isModalVisible} onBackdropPress={()=>this.closeModal()} style={{backgroundColor:'white',*/}
                    {/*    maxHeight:Dimensions.get('window').height / 2,*/}
                    {/*    justifyContent:'center',*/}
                    {/*    marginTop:50,*/}
                    {/*    textAlign:'center',*/}
                    {/*}}>*/}
                    {/*    <View style={{justifyContent:"center",}}>*/}
                    {/*    <View style={{ height:300, justifyContent:"flex-start", left:65, top:50, }} >*/}
                    {/*        <Text style={{fontSize:25,  width:80}}>Price*/}
                    {/*        </Text>*/}

                    {/*        <Text style={{fontSize:25, width:80, }}>Class:</Text>*/}

                    {/*        <View style={{alignContent:"space-between", justifyContent:"center", alignItems:"center", bottom:33,}}>*/}
                    {/*        <DropDownPicker*/}
                    {/*            items={[*/}
                    {/*                {label: 'compact', value: 'compact', icon: () => <Icon name="flag" size={18} color="#900" />},*/}
                    {/*                {label: 'sedan', value: 'sedan', icon: () => <Icon name="flag" size={18} color="#900" />},*/}
                    {/*                {label: 'suv', value: 'suv', icon: () => <Icon name="flag" size={18} color="#900" />},*/}
                    {/*            ]}*/}
                    {/*            defaultValue={this.state.country}*/}
                    {/*            containerStyle={{height: 40, width:130}}*/}
                    {/*            style={{backgroundColor: '#fafafa',}}*/}
                    {/*            itemStyle={{*/}
                    {/*                justifyContent: 'flex-start'*/}
                    {/*            }}*/}
                    {/*            dropDownStyle={{backgroundColor: '#fafafa'}}*/}
                    {/*            onChangeItem={item => this.setState({*/}
                    {/*                country: item.value*/}
                    {/*            })}*/}
                    {/*        />*/}
                    {/*        </View>*/}

                    {/*    </View>*/}


                    {/*    </View>*/}

                    {/*</Modal>*/}

                </View>

                <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5,  }}>
                    {
                        this.state.AccordionData.map((item, key) =>
                            (
                                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                            ))
                    }
                </ScrollView>

            </View>

    )

} }

const styles= StyleSheet.create({
  header: {
      width: 450,
      height: 60,
      backgroundColor: "#2d6ccf",
      flexDirection:"row",
      justifyContent: "space-around",
      padding: 4
  },
    headerbtn:{
      width:130,
        height:30,
      //  right:10,
      borderRadius: 5,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center",
      top:"2%",
      backgroundColor:"#4287f5",
        padding : 5




    },
    headerbtn2: {
        width: 130,
        height: 30,
        //  right:10,
        borderRadius: 5,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        top: "3%",
        backgroundColor: "#4287f5",
        padding: 5,
    },
        MainContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            backgroundColor: '#d0d4d9',
            alignItems:"center"

        },

        Panel_text: {
            fontSize: 18,
            color: '#000',
            padding: 10
        },

        Panel_Button_Text: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 21
        },

        Panel_Holder: {
            borderWidth: 1,
            borderColor: '#FF6F00',
            marginVertical: 5
        },

        Btn: {
            padding: 10,
            backgroundColor: '#FF6F00'
        }


    }
)

export default MainScreen;
