import React, {Component} from "react";
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

import {WebCallClass} from "../Screens/WebCallClass"


 var WebCall = new WebCallClass();

class Test extends Component {
    constructor(){
        super();
        this.state= {
            element: []
        }
    }




 componentDidMount(){


     this.TestSql();

}


    TestSql = async () => {
        result = await WebCall.testSql()
      //  alert(result.)

        this.setState({element:result})



    }



    render() {
        return (
            <FlatList
               // numColumns={2}
                keyExtractor={(item) => item.id}
                data={this.state.element}
                renderItem={({item}) =>(
                    <Text style={styles.item}>
                        {item.mileage}
                        <Image style={{  flex: 1, resizeMode: 'contain'}} source={item.image} />
                    </Text>

                )}/>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2",
        height:"100%",



    },

    item:{

        borderColor: "#949292",
        padding:30,
        height:180,

        backgroundColor:"#fff",
        borderWidth: 1,
        fontSize: 24,
        marginHorizontal:30,
        marginTop: 24,
        elevation: 5,
        flex:0.5



    }

})
export default Test
