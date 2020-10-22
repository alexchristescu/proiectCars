import React, {useState} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';

const Filter = ({navigation}) =>{
 const [element,setElement] = useState([
     {category:"Car Size", id:1},
     {category:"Price Range", id:2},
     {category:"Transmission", id:3},
 ])
    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={element}
                renderItem={({item}) =>(
                    item.id === 1 ? <TouchableOpacity onPress={() => navigation.navigate("CarSize")}>
                                                <Text style={styles.item}>{item.category}</Text>
                                             </TouchableOpacity>
                            : item.id === 2 ? <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                                                                 <Text style={styles.item}>{item.category}</Text>
                                                            </TouchableOpacity>
                            : item.id === 3 ? <TouchableOpacity onPress={() => navigation.navigate("Test")}>
                                                    <Text style={styles.item}>{item.category}</Text>
                                                        </TouchableOpacity>
                            : null
                )}/>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#f2f2f2",
      paddingTop:40,
      paddingHorizontal:20
    },

    item:{
        borderColor: "#949292",
        padding:30,
        backgroundColor:"#fff",
        borderWidth: 1,
        fontSize: 24,


    }

})

export default Filter;
