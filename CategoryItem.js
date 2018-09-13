import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,Image,
    TouchableOpacity
} from "react-native";
import Proptypes from 'prop-types'
import priceDisplay from '../networking/util'


class CategoryItem extends Component {
    static proptypes = {
        box:Proptypes.array.isRequired,
        onPress:Proptypes.func.isRequired,
    };
    handlePress = () => {
       this.props.onPress(this.props.box.catId)
    };
    render() {
        const {box} = this.props;
        return (
            <TouchableOpacity style={styles.area} onPress = {this.handlePress}>
            <View style ={styles.info}>
            <Image style ={styles.image} 
            source={require('../catimages/59085af44bc6b0d3074933b6.jpeg')}
             /> 
                <Text style ={styles.title}>{box.name}</Text>          
            </View>
        </TouchableOpacity>        
        );
    }
}
export default CategoryItem;

const styles = StyleSheet.create({
    deal: {
        marginHorizontal:12,
        marginTop:12,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width:'100%',
        height:150,
    },
    info: {
        padding:10,
        backgroundColor:'#fff',
        borderColor:'#bbb',
        borderWidth:1,
        borderTopWidth:1,
        width:350
    },
    title: {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom:5,
    },
    footer: {
        flexDirection:'row'
    },
    cause:{
        flex:2,
    },
    price: {
        flex:1,
        textAlign:'right'
    },
});
/*   <Image style ={styles.image}source={{ uri: deal.media[0] }}/> 
 <Image style ={styles.image}
                source={require('../catimages/59085af44bc6b0d3074933b6.jpg')}/> 

 <View style ={styles.info}>
                    <Text style ={styles.name}>{deal.title}</Text>                  
                
                </View>

             

*/
